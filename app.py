#!/usr/bin/env python
# coding:utf-8

from flask import Flask, render_template, session, request, url_for, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import *
# from gevent import monkey; monkey.patch_socket()
# import gevent
import os
from pymongo import MongoClient
from functools import wraps

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = "threading"

app = Flask(__name__, static_folder="build", static_url_path="", template_folder="")
# app.debug = True
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)

iec_json_path = "./build/data/iec104_server.json"
iec_json_dst = "/etc/safe/iec104.json"

modbus_json_path = "./build/data/modbus_server.json"
modbus_json_dst = "/etc/safe/modbus.json"

json_path = iec_json_path
json_dst = iec_json_dst

#datebase clinet
client = MongoClient('localhost', 27017)
user_db = client.safe_protocol.user

CORS(app, supports_credentials=True)

def deal_with_alert_data(d):
    d1 = d.split("|")
    d2 = [s.split("-") for s in d1]
    return dict(d2)


def main_server(port=5000):
    socketio.run(app, host="0.0.0.0", port=port)

def monitor_server(port=8000):
    import socket
    from select import select
    inputs = []
    s = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)
    s.bind(("0.0.0.0", port))
    s.listen(10)
    s.setblocking(False)
    inputs.append(s)
    address = dict()
    while 1:
        rs, ws, es = select(inputs, [], [], 1)
        for r in rs:
            if r is s:
                conn, addr = s.accept()
                print("Client {0} connected !".format(addr))
                address[conn] = addr
                inputs.append(conn)
            else:
                data = r.recv(1024)
                if not data:
                    print("Client {0} disconnected !".format(address[r]))
                    address.pop(r)
                    inputs.remove(r)
                else:
                    d = deal_with_alert_data(data.strip())
                    socketio.emit("alert", d)


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session['username'] is None:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

# @app.route("/#/iec")
# @login_required
# def iec():
#     return render_template('./src/view/iec.html', async_mode=socketio.async_mode)

# @app.route("/#/modbus")
# @login_required
# def modbus():
#     return render_template('./src/view/modbus.html', async_mode=socketio.async_mode)

@app.route("/")
def index():
    return render_template('./src/index.html', async_mode=socketio.async_mode)

# @app.route("/s", methods=['POST'])
# def monitor():
#     data = json.loads(request.form.get('data'))
#     # d = deal_with_alert_data(data.strip())
#     socketio.emit("alert", data)



@app.route('/api/v1.0/users', methods=['GET'])
def get_users():
    return jsonify({'users': users})

@app.route('/api/v1.0/user', methods=['POST', 'GET'])
def get_user():
    username = request.args['username']
    password = request.args['password']
    user = user_db.find_one({'username': username})
    if user and user['password'] == password:
        user = {
            'username': user['username'],
            'password': user['password'],
            'level': user['level']
        }
        session['username'] = user['username']
        session['password'] = user['password']

        return jsonify({'users': user}), 200
    else :
        session['username'] = None
        session['password'] = None

        return render_template('login.html', error='Invalid username/password')


def deal_with_file(dst=json_dst):
    cmd = "cp " + json_path + " " + dst
    os.system(cmd)


@socketio.on("setting")
def receive_json(data):
    # global json_path
    # global json_dst

    # if data['type'] == 'modbus':
    #     json_path = modbus_json_path
    #     json_dst = modbus_json_dst
    # else:
    #     json_path = iec_json_path
    #     json_dst = iec_json_dst

    try:
        with open(json_path, "w") as f:
            f.write(data["json"])
        deal_with_file()
        print("Receive json file")
        socketio.emit("setting", "Success!")
    except:
        socketio.emit("setting", "Failed!")
        print("Writing file error!")


@socketio.on('connect')
def connect():
    try:
        with open(json_path, "r") as f:
            d = f.read()
            socketio.emit("init", {"json": d}) #向前端发送初始化init
    except:
        socketio.emit("init", {"json": "{}"})
        print("Loading file error!")


@socketio.on('disconnect')
def disconnect():
    print('Client disconnected', request.sid)


if __name__ == '__main__':
    import threading
    # t1 = gevent.spawn(main_server)
    # t2 = gevent.spawn(monitor_server)
    t1 = threading.Thread(target=main_server, args=())
    t2 = threading.Thread(target=monitor_server, args=())
    t1.start()
    t2.start()
    t1.join()
    t2.join()

