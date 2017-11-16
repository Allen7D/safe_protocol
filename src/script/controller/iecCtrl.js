'use strict';

angular.module('app').controller("iecCtrl", ["$scope", function ($scope) {


    var schema = {
        "$schema": "",
        "type": "object",
        "properties": {
            "connection": {
                "type": "object",
                "title": "报警连接",
                "oneline": true,
                "properties": {
                    "ip": {
                        "type": "string",
                        "default": "192.168.1.1",
                        "required": true
                    },
                    "port": {
                        "type": "integer",
                        "default": 1080,
                        "required": true
                    }
                }
            },
            "function": {
                "type": "array",
                "title": "功能码限制",
                "maxItems": 20,
                "uniqueItems": true,
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer",
                            "title": "功能码",
                            "required": true,
                            "default": 1,
                            "enum": [
                                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128
                            ],
                            "notes": [
                                "0x01  不带时标的单点遥信（每个遥信占1个字节）",
                                "0x02  带3个字节短时标的单点信息",
                                "0x03  不带时标的双点遥信，每个遥信占1个字节",
                                "0x04  带3个字节短时标的双点信息",
                                "0x05  ",
                                "0x06  ",
                                "0x07  ",
                                "0x08  ",
                                "0x09  带品质描述的测量值，每个遥测值占3个字节",
                                "0x0a  带3个字节时标的且具有品质描述的测量值，每个遥测值占6个字节",
                                "0x0b  不带时标的标度化值，每个遥测值占3个字节(目前仅df8900支持)",
                                "0x0c  带3个字节时标的不带时标的标度化值，每个遥测值占6个字节(目前 仅df8900支持)",
                                "0x0d  带品质描述的浮点值，每个遥测值占5个字节",
                                "0x0e  带3个字节时标的且具有带品质描述的浮点值每个遥测值占8个字节 (目前仅df8900支持)",
                                "0x0f  不带时标的电能脉冲计数,每个值占5个字节 ",
                                "0x10  带3个字节短时标的电能脉冲计数,每个值占8个字节",
                                "0x11  ",
                                "0x12  ",
                                "0x13  ",
                                "0x14  具有状态变位检出的成组单点遥信，每个字节8个遥信",
                                "0x15  不带品质描述的测量值，每个遥测值占2个字节",
                                "0x16  ",
                                "0x17  ",
                                "0x18  ",
                                "0x19  ",
                                "0x1a  ",
                                "0x1b  ",
                                "0x1c  ",
                                "0x1d  ",
                                "0x1e  带CP56Time2a（7个字节）时标的单点信息",
                                "0x1f  带CP56Time2a（7个字节）时标的双点信息",
                                "0x20  ",
                                "0x21  ",
                                "0x22  ",
                                "0x23  ",
                                "0x24  ",
                                "0x25  带7个字节时标的电能脉冲计数,每个值占12个字节",
                                "0x26  ",
                                "0x27  ",
                                "0x28  ",
                                "0x29  ",
                                "0x2a  ",
                                "0x2b  ",
                                "0x2c  ",
                                "0x2d  ",
                                "0x2e  双点遥控",
                                "0x2f  双点遥调",
                                "0x30  ",
                                "0x31  ",
                                "0x32  ",
                                "0x33  ",
                                "0x34  ",
                                "0x35  ",
                                "0x36  ",
                                "0x37  ",
                                "0x38  ",
                                "0x39  ",
                                "0x3a  ",
                                "0x3b  ",
                                "0x3c  ",
                                "0x3d  ",
                                "0x3e  ",
                                "0x3f  ",
                                "0x40  ",
                                "0x41  ",
                                "0x42  ",
                                "0x43  ",
                                "0x44  ",
                                "0x45  ",
                                "0x46  初始化结束",
                                "0x47  ",
                                "0x48  ",
                                "0x49  ",
                                "0x4a  ",
                                "0x4b  ",
                                "0x4c  ",
                                "0x4d  ",
                                "0x4e  ",
                                "0x4f  ",
                                "0x50  ",
                                "0x51  ",
                                "0x52  ",
                                "0x53  ",
                                "0x54  ",
                                "0x55  ",
                                "0x56  ",
                                "0x57  ",
                                "0x58  ",
                                "0x59  ",
                                "0x5a  ",
                                "0x5b  ",
                                "0x5c  ",
                                "0x5d  ",
                                "0x5e  ",
                                "0x5f  ",
                                "0x60  ",
                                "0x61  ",
                                "0x62  ",
                                "0x63  ",
                                "0x64  召唤全数据",
                                "0x65  召唤全电度",
                                "0x66  ",
                                "0x67  时钟同步",
                                "0x68  长帧链路测试",
                                "0x69  长帧复位",
                                "0x70",
                                "0x71",
                                "0x72",
                                "0x73",
                                "0x74",
                                "0x75",
                                "0x76",
                                "0x77",
                                "0x78",
                                "0x79",
                                "0x80"
                            ]
                        },
                        "default": {
                            "type": "boolean",
                            "title": "默认打开",
                            "default": true,
                            // "required":true
                        },
                        "excepts": {
                            "type": "array",
                            "title": "例外",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "start": {
                                        "type": "object",
                                        "title": "开始",
                                        "oneline": true,
                                        "properties": {
                                            "year": {
                                                "title": "年",
                                                "type": "integer",
                                                "enum": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                                                "noneValue": -1
                                            },
                                            "mon": {
                                                "title": "月",
                                                "type": "integer",
                                                "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                "noneValue": -1

                                            },
                                            "day": {
                                                "title": "日",
                                                "type": "integer",
                                                "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                                                "noneValue": -1
                                            },
                                            "hour": {
                                                "title": "时",
                                                "type": "integer",
                                                "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                                                "noneValue": -1
                                            },
                                            "min": {
                                                "title": "分",
                                                "type": "integer",
                                                "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                "noneValue": -1
                                            },
                                            "sec": {
                                                "title": "秒",
                                                "type": "integer",
                                                "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                "noneValue": -1
                                            },
                                            "wday": {
                                                "title": "周",
                                                "type": "integer",
                                                "enum": [1, 2, 3, 4, 5, 6, 7],
                                                "notes": ["一", "二", "三", "四", "五", "六", "日"],
                                                "noneValue": -1
                                            }
                                        }
                                    },
                                    "end": {
                                        "type": "object",
                                        "title": "结束",
                                        "oneline": true,
                                        "properties": {
                                            "year": {
                                                "title": "年",
                                                "type": "integer",
                                                "enum": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                                                "noneValue": -1
                                            },
                                            "mon": {
                                                "title": "月",
                                                "type": "integer",
                                                "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                "noneValue": -1,
                                                "ditto": true
                                            },
                                            "day": {
                                                "title": "日",
                                                "type": "integer",
                                                "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                                                "noneValue": -1,
                                                "ditto": true
                                            },
                                            "hour": {
                                                "title": "时",
                                                "type": "integer",
                                                "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                                                "noneValue": -1
                                            },
                                            "min": {
                                                "title": "分",
                                                "type": "integer",
                                                "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                "noneValue": -1,
                                                "ditto": true
                                            },
                                            "sec": {
                                                "title": "秒",
                                                "type": "integer",
                                                "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                "noneValue": -1,
                                                "ditto": true
                                            },
                                            "wday": {
                                                "title": "周",
                                                "type": "integer",
                                                "enum": [1, 2, 3, 4, 5, 6, 7],
                                                "notes": ["一", "二", "三", "四", "五", "六", "日"],
                                                "noneValue": -1,
                                                "ditto": true
                                            }
                                        }
                                    },
                                    "excepts": {
                                        "type": "array",
                                        "title": "例外",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "start": {
                                                    "type": "object",
                                                    "title": "开始",
                                                    "oneline": true,
                                                    "properties": {
                                                        "year": {
                                                            "title": "年",
                                                            "type": "integer",
                                                            "enum": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                                                            "noneValue": -1
                                                        },
                                                        "mon": {
                                                            "title": "月",
                                                            "type": "integer",
                                                            "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                            "noneValue": -1
                                                        },
                                                        "day": {
                                                            "title": "日",
                                                            "type": "integer",
                                                            "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                                                            "noneValue": -1
                                                        },
                                                        "hour": {
                                                            "title": "时",
                                                            "type": "integer",
                                                            "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                                                            "noneValue": -1
                                                        },
                                                        "min": {
                                                            "title": "分",
                                                            "type": "integer",
                                                            "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                            "noneValue": -1
                                                        },
                                                        "sec": {
                                                            "title": "秒",
                                                            "type": "integer",
                                                            "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                            "noneValue": -1
                                                        },
                                                        "wday": {
                                                            "title": "周",
                                                            "type": "integer",
                                                            "enum": [1, 2, 3, 4, 5, 6, 7],
                                                            "notes": ["一", "二", "三", "四", "五", "六", "日"],
                                                            "noneValue": -1
                                                        }
                                                    }
                                                },
                                                "end": {
                                                    "type": "object",
                                                    "title": "结束",
                                                    "oneline": true,
                                                    "properties": {
                                                        "year": {
                                                            "title": "年",
                                                            "type": "integer",
                                                            "enum": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                                                            "noneValue": -1
                                                        },
                                                        "mon": {
                                                            "title": "月",
                                                            "type": "integer",
                                                            "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                            "noneValue": -1

                                                        },
                                                        "day": {
                                                            "title": "日",
                                                            "type": "integer",
                                                            "enum": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                                                            "noneValue": -1
                                                        },
                                                        "hour": {
                                                            "title": "时",
                                                            "type": "integer",
                                                            "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                                                            "noneValue": -1
                                                        },
                                                        "min": {
                                                            "title": "分",
                                                            "type": "integer",
                                                            "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                            "noneValue": -1
                                                        },
                                                        "sec": {
                                                            "title": "秒",
                                                            "type": "integer",
                                                            "enum": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                                                            "noneValue": -1
                                                        },
                                                        "wday": {
                                                            "title": "周",
                                                            "type": "integer",
                                                            "enum": [1, 2, 3, 4, 5, 6, 7],
                                                            "notes": ["一", "二", "三", "四", "五", "六", "日"],
                                                            "noneValue": -1
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    var BrutusinForms = brutusin["json-forms"];
    var bf = BrutusinForms.create(schema);
    var container = document.getElementById("iec_container");
    var init_flag = undefined;

    var socket = io(location.protocol + '//' + document.domain + ':' + 5000);
    socket.on('connect', function () {
        socket.emit('my_event', {data: 'I\'m connected!'});
    });
    var _index = 1;
    socket.on("alert", function (message) {
        // console.log(message);
        var divs = '<tr class="danger">\n<td class="col-check"><input type="checkbox" class="form-check-input"></td>\n' +
            "<td>" + (_index++) + "</td>\n" +
            "<td>" + Date() + "</td>\n" +
            '<td>' + message["Message"] + '</td>\n<td>  ' + message["data"] + '</td>\n</tr>';
        $("#iec_monitor").append(divs);
    });
    socket.on("setting", function (message) {
        //接收前端的@socketio.on("setting")
        alert(message);
    });
    socket.on("init", function (data) {
        var json_data = JSON.parse(data["json"]);
        if (typeof(init_flag) == "undefined") {
            bf.render(container, json_data);
            init_flag = 1;
        }
    });

    $("#btn1").click(function () {
        alert(JSON.stringify(bf.getData(), null, 4));
    });
    $("#btn2").click(function () {
        if (bf.validate()) {
            alert("Validation succeeded");
        }
    });

    //设置权限发送权限
    //显示，您无权限修改
    $("#btn3").click(function () {
        var data = bf.getData();//JSON.stringify(bf.getData(), null, 4);
        if (bf.validate()) {
            //向后端发送setting，由于@socketio.on("setting")接收
            socket.emit("setting", {"json": JSON.stringify(data, null, 4)});
        }
    });
}])
