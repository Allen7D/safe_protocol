'use strict';

angular.module('app').controller("modbusCtrl", ["$scope", function ($scope) {

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
                                1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 15, 16, 17, 20, 21, 22, 23, 24, 43, 43
                            ],
                            "notes": [
                                "0x01 Read Coils",
                                "0x02 Read Discrete Inputs",
                                "0x03 Read Holding Registers",
                                "0x04 Read Input Registers",
                                "0x05 Write Single Coil",
                                "0x06 Write Single Register",
                                "0x07 Read Exception Status (Serial Line only)",
                                "0x08 Diagnostics (Serial Line only)",
                                "0x0B Get Comm Event Counter (Serial Line only)",
                                "0x0C Get Comm Event Log (Serial Line only)",
                                "0x0F Write Multiple Coils",
                                "0x10 Write Multiple registers",
                                "0x11 Report Slave ID (Serial Line only)",
                                "0x14 Read File Record",
                                "0x15 Write File Record",
                                "0x16 Mask Write Register",
                                "0x17 Read/Write Multiple registers",
                                "0x18 Read FIFO Queue",
                                "0x2B Encapsulated Interface Transport",
                                "0x2B Read Device Identification"
                            ]
                        },
                        "default": {
                            "type": "boolean",
                            "title": "默认打开",
                            "default": true,
                            // "required":true  //必须 *
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
                                                },
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "memory": {
                "type": "array",
                "title": "内存限制",
                "maxItems": 4,
                "uniqueItems": true,
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer",
                            "title": "内存类型",
                            "required": true,
                            "default": 1,
                            "enum": [1, 2, 3, 4],
                            "notes": [
                                "Discretes Input",
                                "Coils",
                                "Input Registers",
                                "Holding Registers"
                            ]
                        },
                        "default": {
                            "type": "boolean",
                            "title": "默认打开",
                            "default": true,
                            "required": true
                        },
                        "excepts": {
                            "type": "array",
                            "title": "例外",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "start": {
                                        "type": "integer",
                                        "title": "开始地址",
                                        "required": true,
                                        "minimum": 0,
                                        "maximum": 65535
                                    },
                                    "end": {
                                        "type": "integer",
                                        "title": "结束地址(包含)",
                                        "required": true,
                                        "minimum": 0,
                                        "maximum": 65535
                                    },
                                    "excepts": {
                                        "type": "array",
                                        "title": "例外",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "start": {
                                                    "type": "integer",
                                                    "title": "开始地址",
                                                    "required": true,
                                                    "minimum": 0,
                                                    "maximum": 65535
                                                },
                                                "end": {
                                                    "type": "integer",
                                                    "title": "结束地址(包含)",
                                                    "required": true,
                                                    "minimum": 0,
                                                    "maximum": 65535
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
    var container = document.getElementById("modbus_container");
    var init_flag = undefined;

    // var socket = io(location.protocol + '//' + document.domain + ':' + location.port);
    var socket = io(location.protocol + '//' + document.domain + ':' + 5000);

    socket.on('connect', function () {
        console.log('----------connect----------');
        socket.emit('my_event', {data: 'I\'m connected!'});
    });

    socket.on('reconnect', function () {
        console.log('----------reconnect----------');
        socket.emit('needinit', {type:'modbus'});
    });


    var _index = 1;
    socket.on("alert", function (message) {
        var divs = '<tr class="danger">\n<td class="col-check"><input type="checkbox" class="form-check-input"></td>\n' +
            "<td>" + (_index++) + "</td>\n" +
            "<td>" + Date() + "</td>\n" +
            '<td>' + message["Message"] + '</td>\n<td>  ' + message["data"] + '</td>\n</tr>';
        $("#modbus_monitor").append(divs);
    });

    socket.on("setting", function (message) {
        alert(message);
    });

    socket.on("init", function (data) {
        var json_data = JSON.parse(data["json"]);
        // console.log(data["json"]);
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

    $("#btn3").click(function () {
        var data = bf.getData();
        if (bf.validate()) {
            socket.emit("setting", {"json": JSON.stringify(data, null, 4)});
        }
    });
}])
