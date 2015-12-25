
/*
    Description:
    @ author : 小蟑螂zz
    @ email  : zhangzhang2@myhexin.com
    @ time   : 2015/11/10
*/

// 使用
require(
    [
        'echarts',
        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {

        //心率统计

        var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
        var dataZoom_showHeartBeat = {
            title : {
                    text: ' '
            },
            grid:{
                borderWidth:0,
                y:48,  //离canvas最上面的距离是40px
                x:40,
                x2:30
            },
            dataZoom : {
                show : false,
                realtime : true,
                y: 27,
                height: 28,
                start : 70,
                end : 100
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    splitLine:{show: false},//去掉网格线
                    data : (function (){
                        var res = [];
                        var len = 60;
                        while (len--) {
                            //res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                            //now = new Date(now - 10000);
                            res.push(0)
                        }
                        return res;
                    })(),
                    axisLabel :{
                        textStyle : {
                            color : '#999',
                            fontSize:14
                        }   
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'实时',
                    type:'line',
                    data:function (){
                        var list = [];
                        for (var i = 1; i <= 60; i++) {
                            list.push(0);
                        }
                        return list;
                    }()
                }
            ],
            calculable:false
        };
        showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic');   
      
        //给menu添加事件

        $("#shishi").addClass("heart_hover");
        $(".heart_menu span").on("click",function(){
            $(".heart_menu span").removeClass("heart_hover");
            var span_name=$(this).attr("id");
            $("#"+span_name.toString()).addClass("heart_hover");

            switch(span_name){
                case 'shishi':
                loading_shishi();
                break;
                case 'ab':
                loading_ab();
                break;
                case 'one':
                loading_one();
                break;
                case 'six':
                loading_six();
                break;
                case 'twelve':
                loading_twelve();
                break;
                case 'oneday':
                loading_oneday();
                break;
                case 'sevenday':
                loading_sevenday();
                break;
            }

        })
        


        //实时的方法
        function loading_shishi(){
            var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
            var dataZoom_showHeartBeat = {
                title : {
                        text: ' '
                },
                grid:{
                    borderWidth:0,
                    y:48,  //离canvas最上面的距离是40px
                    x:40,
                    x2:30
                },
                dataZoom : {
                    show : false,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    /*x: 0,*/
                    y: 27,
                    //width: 400,
                    height: 28,
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    //xAxisIndex:[],
                    //yAxisIndex:[],
                    start : 70,
                    end : 100
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        splitLine:{show: false},//去掉网格线
                        data : (function (){
                            var now = new Date();
                            var res = [];
                            var len = 60;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                now = new Date(now - 10000);
                            }
                            return res;
                        })(),
                        axisLabel :{
                            textStyle : {
                                color : '#999',
                                fontSize:14
                            }   
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'实时',
                        type:'line',
                        data:function (){
                            var list = [];
                            for (var i = 1; i <= 120; i++) {
                                list.push(Math.round(Math.random()* 120));
                            }
                            return list;
                        }()
                    }
                ],
                calculable:false
            };
            showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic');
        }

        //实时的方法
        function loading_ab(){
            var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
            var dataZoom_showHeartBeat = {
                title : {
                        text: ' '
                },
                grid:{
                    borderWidth:0,
                    y:48,  //离canvas最上面的距离是40px
                    x:40,
                    x2:30
                },
                dataZoom : {
                    show : false,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    /*x: 0,*/
                    y: 27,
                    //width: 400,
                    height: 28,
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    //xAxisIndex:[],
                    //yAxisIndex:[],
                    start : 70,
                    end : 100
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        splitLine:{show: false},//去掉网格线
                        data : (function (){
                            var now = new Date();
                            var res = [];
                            var len = 60;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                now = new Date(now - 10000);
                            }
                            return res;
                        })(),
                        axisLabel :{
                            textStyle : {
                                color : '#999',
                                fontSize:14
                            }   
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'实时',
                        type:'line',
                        data:function (){
                            var list = [];
                            for (var i = 1; i <= 120; i++) {
                                list.push(Math.round(Math.random()* 120));
                            }
                            return list;
                        }()
                    }
                ],
                calculable:false
            };
            showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic');
        }
            //以上是实时


            //前1小时前1小时前1小时前1小时前1小时
        function loading_one(){
            var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
            var dataZoom_showHeartBeat = {
                title : {
                        text: ' '
                },
                grid:{
                    borderWidth:0,
                    y:48,  //离canvas最上面的距离是40px
                    x:40,
                    x2:30
                },
                dataZoom : {
                    show : true,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    /*x: 0,*/
                    y: 27,
                    //width: 400,
                    height: 28,
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    //xAxisIndex:[],
                    //yAxisIndex:[],
                    start : 70,
                    end : 100
                },
                xAxis : [
                    {
                         type : 'category',
                                boundaryGap : false,
                                data : function (){
                                    var list = [];
                                    var n = 0;
                                    while (n++ < 120) {
                                        list.push(n);
                                    }
                                    return list;
                                }()}
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'前1小时',
                                type:'line',
                                data:function (){
                                    var list = [];
                                    for (var i = 1; i <= 150; i++) {
                                        list.push(Math.round(Math.random()* 30));
                                    }
                                    return list;
                                }()
                    }
                ],
                calculable:false
            };
            showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic'); 
        }
        
            //前6小时前6小时前6小时前6小时前6小时前6小时前6小时前6小时
        function loading_six(){
            var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
            var dataZoom_showHeartBeat = {
                title : {
                        text: ' '
                },
                grid:{
                    borderWidth:0,
                    y:48,  //离canvas最上面的距离是40px
                    x:40,
                    x2:30
                },
                dataZoom : {
                    show : true,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    /*x: 0,*/
                    y: 27,
                    //width: 400,
                    height: 28,
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    //xAxisIndex:[],
                    //yAxisIndex:[],
                    start : 70,
                    end : 100
                },
                xAxis : [
                    {
                         type : 'category',
                                boundaryGap : false,
                                data : function (){
                                    var list = [];
                                    var n = 0;
                                    while (n++ < 900) {
                                        list.push(n);
                                    }
                                    return list;
                                }()
                            }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'前6小时',
                                type:'line',
                                data:function (){
                                    var list = [];
                                    for (var i = 1; i <= 900; i++) {
                                        list.push(Math.round(Math.random()* 30));
                                    }
                                    return list;
                                }()
                    }
                ],
                calculable:false
            };
            showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic');   
        }

            //前12小时前12小时前12小时前12小时前12小时前12小时前12小时前12小时前12小时前12小时前12小时前12小时前12小时前12小时
        function loading_twelve(){
            var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
            var dataZoom_showHeartBeat = {
                title : {
                        text: ' '
                },
                grid:{
                    borderWidth:0,
                    y:48,  //离canvas最上面的距离是40px
                    x:40,
                    x2:30
                },
                dataZoom : {
                    show : true,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    /*x: 0,*/
                    y: 27,
                    //width: 400,
                    height: 28,
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    //xAxisIndex:[],
                    //yAxisIndex:[],
                    start : 70,
                    end : 100
                },
                xAxis : [
                    {
                          type : 'category',
                                boundaryGap : false,
                                data : function (){
                                    var list = [];
                                    var n = 0;
                                    while (n++ < 1800) {
                                        list.push(n);
                                    }
                                    return list;
                                }()
                            }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                          name:'前12小时',
                                type:'line',
                                data:function (){
                                    var list = [];
                                    for (var i = 1; i <= 1800; i++) {
                                        list.push(Math.round(Math.random()* 30));
                                    }
                                    return list;
                                }()
                    }
                ],
                calculable:false
            };
            showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic');   
        }
            //前1天前1天前1天前1天前1天前1天前1天前1天前1天前1天前1天前1天前1天前1天前1天前1天
        function loading_oneday(){
            var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
            var dataZoom_showHeartBeat = {
                title : {
                        text: ' '
                },
                grid:{
                    borderWidth:0,
                    y:48,  //离canvas最上面的距离是40px
                    x:40,
                    x2:30
                },
                dataZoom : {
                    show : true,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    /*x: 0,*/
                    y: 27,
                    //width: 400,
                    height: 28,
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    //xAxisIndex:[],
                    //yAxisIndex:[],
                    start : 70,
                    end : 100
                },
                xAxis : [
                    {
                          type : 'category',
                                boundaryGap : false,
                                data : function (){
                                    var list = [];
                                    var n = 0;
                                    while (n++ < 3600) {
                                        list.push(n);
                                    }
                                    return list;
                                }()
                            }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                          name:'前12小时',
                                type:'line',
                                data:function (){
                                    var list = [];
                                    for (var i = 1; i <= 3600; i++) {
                                        list.push(Math.round(Math.random()* 30));
                                    }
                                    return list;
                                }()
                    }
                ],
                calculable:false
            };
            showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic');   
        }

            //前7天前7天前7天前7天前7天前7天前7天前7天
        function loading_sevenday(){
            var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
            var dataZoom_showHeartBeat = {
                title : {
                        text: ' '
                },
                grid:{
                    borderWidth:0,
                    y:48,  //离canvas最上面的距离是40px
                    x:40,
                    x2:30
                },
                dataZoom : {
                    show : true,
                    realtime : true,
                    //orient: 'vertical',   // 'horizontal'
                    /*x: 0,*/
                    y: 27,
                    //width: 400,
                    height: 28,
                    //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                    //fillerColor: 'rgba(38,143,26,0.6)',
                    //handleColor: 'rgba(128,43,16,0.8)',
                    //xAxisIndex:[],
                    //yAxisIndex:[],
                    start : 70,
                    end : 100
                },
                xAxis : [
                    {
                          type : 'category',
                                boundaryGap : false,
                                data : function (){
                                    var list = [];
                                    var n = 0;
                                    while (n++ < 25200) {
                                        list.push(n);
                                    }
                                    return list;
                                }()
                            }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                          name:'前12小时',
                                type:'line',
                                data:function (){
                                    var list = [];
                                    for (var i = 1; i <= 25200; i++) {
                                        list.push(Math.round(Math.random()* 30));
                                    }
                                    return list;
                                }()
                    }
                ],
                calculable:false
            };
            showHeartBeat.setOption(dataZoom_showHeartBeat).setTheme('macarons', 'infographic');   
        }
        

        var lastIndex = 0;
        var len = dataZoom_showHeartBeat.series[0].data.length;
        clearInterval(timeTicket);
        var timeTicket = setInterval(function (){
            // 动态数据接口 addData
            var heartJson = JavaScriptInterface.jsontohtml();//从客户端中读取来的数据
            var obj = eval("("+heartJson+")");//解析出来的json
            var curHeartBeating = obj.rate ;//实时心跳数据
            var curTime =obj.time;
            lastIndex += 1;
            showHeartBeat.addData([
                [
                    0,        // 系列索引
                    curHeartBeating, // 新增数据
                    //dataZoom_showHeartBeat.series[0].data[lastIndex%len], // 新增数据
                    false,     // 新增数据是否从队列头部插入
                    false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                    curTime
                    //new Date(new Date().getTime()+2000).toLocaleTimeString().replace(/^\D*/,'')
                ]
            ]);
        }, 2000);
    }
);


        