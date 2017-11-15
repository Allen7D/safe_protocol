import socket
import time
import random

host='127.0.0.1';
port= 8000
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect((host,port))
id = str(random.randint(0,1000))
while 1:
    time.sleep(1)
    s.send('hello from client' + id)
s.close()