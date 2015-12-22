
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
        //
        //
        var data = Mock.mock({
            'list|1-10': [{
                'id|+1': 1
            }]
        });
        console.log(JSON.stringify(data))

        var showHeartBeat = ec.init(document.getElementById('showHeartBeat'));
        var dataZoom_showHeartBeat = {
            title : {
                    text: ' '
            },
            legend:{
                show:true,
                selected:{
                    '前1小时':false,
                    '前6小时':false,
                    "前12小时":false,
                    "前1天":false,
                    "前7天":false
                },
                data:['实时',{
                        name:'前1小时',
                        textStyle:{
                            color:'#999'
                        }
                    },{
                        name:'前6小时',
                        textStyle:{
                            color:'#999'
                        }
                    },{
                        name:'前12小时',
                        textStyle:{
                            color:'#999'
                        }
                    },{
                        name:'前1天',
                        textStyle:{
                            color:'#999'
                        }
                    },{
                        name:'前7天',
                        textStyle:{
                            color:'#999'
                        }
                    }
                    ],
                orient: 'horizontal', // 'vertical'
                x: 'center', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                textStyle:{
                    fontSize:16,
                    fontFamily:'Microsoft YaHei',
					color:'222222'
                }
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
        var config = require('echarts/config');  
        //监控刷新事件 
        /*dataZoom1.on(config.EVENT.CLICK, function(param){ 
            alert("刷新"); 
        });*/
        // 动态添加默认不显示的数据
        showHeartBeat.on(config.EVENT.LEGEND_SELECTED, function (param){
            var selected = param.selected;
            var len;
            var added;
            if (selected['前1小时']) {
                len = dataZoom_showHeartBeat.series.length;
                added = false;
                while (len--) {
                    if (dataZoom_showHeartBeat.series[len].name == '前1小时') {
                        // 已经添加
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    showHeartBeat.showLoading({
                        text : '数据获取中',
                        effect: 'whirling'
                    });
                    setTimeout(function (){
                        dataZoom_showHeartBeat.series=[];//清空列表
                        dataZoom_showHeartBeat.xAxis =[];//重绘x轴
                        dataZoom_showHeartBeat.dataZoom.show =true;

                        dataZoom_showHeartBeat.xAxis.push({
                            type : 'category',
                            boundaryGap : false,
                            data : function (){
                                var list = [];
                                var n = 0;
                                while (n++ < 120) {
                                    list.push(n);
                                }
                                return list;
                            }()
                        })
                        dataZoom_showHeartBeat.series.push({
                            name:'前1小时',
                            type:'line',
                            data:function (){
                                var list = [];
                                for (var i = 1; i <= 150; i++) {
                                    list.push(Math.round(Math.random()* 30));
                                }
                                return list;
                            }()
                        });
                        dataZoom_showHeartBeat.legend.selected['实时'] =false;
                        dataZoom_showHeartBeat.legend.selected['前6小时'] =false;
                        showHeartBeat.hideLoading();
                        clearInterval(timeTicket);
                        showHeartBeat.setOption(dataZoom_showHeartBeat);
                    }, 1000)
                } 
            }

            if (selected['前6小时']) {
                len = dataZoom_showHeartBeat.series.length;
                added = false;
                while (len--) {
                    if (dataZoom_showHeartBeat.series[len].name == '前6小时') {
                        // 已经添加
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    showHeartBeat.showLoading({
                        text : '数据获取中',
                        effect: 'whirling'
                    });
                    setTimeout(function (){
                        dataZoom_showHeartBeat.series=[];//清空列表
                        dataZoom_showHeartBeat.xAxis =[];//重绘x轴
                        dataZoom_showHeartBeat.dataZoom.show =true;
                        dataZoom_showHeartBeat.dataZoom.start =70;
                        dataZoom_showHeartBeat.xAxis.push({
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
                        })
                        dataZoom_showHeartBeat.series.push({
                            name:'前6小时',
                            type:'line',
                            data:function (){
                                var list = [];
                                for (var i = 1; i <= 900; i++) {
                                    list.push(Math.round(Math.random()* 30));
                                }
                                return list;
                            }()
                        });
                        dataZoom_showHeartBeat.legend.selected['实时'] =false;
                        dataZoom_showHeartBeat.legend.selected['前1小时'] =false;
                        showHeartBeat.hideLoading();
                        clearInterval(timeTicket);
                        console.log(dataZoom_showHeartBeat)
                        showHeartBeat.setOption(dataZoom_showHeartBeat);
                    }, 2000)
                } 
            }
        });  

        var lastIndex = 0;
        var len = dataZoom_showHeartBeat.series[0].data.length;
        clearInterval(timeTicket);
        var timeTicket = setInterval(function (){
            // 动态数据接口 addData
            lastIndex += 1;
            showHeartBeat.addData([
                [
                    0,        // 系列索引
                    dataZoom_showHeartBeat.series[0].data[lastIndex%len], // 新增数据
                    false,     // 新增数据是否从队列头部插入
                    false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                    dataZoom_showHeartBeat.xAxis[0].data[lastIndex%len]
                ]
            ]);
        }, 5000);

         // 体温变化
         //
         //
        var showWeather = ec.init(document.getElementById('showWeather')); 
        var option_showWeather = {
            title : {
                    text: ' '
            },
            tooltip: {
                show: true
            },
            legend: {
                data  :[''],
                orient:'horizontal',
                x     :'right',
                y     :'bottom',
                textStyle:{
                    fontSize:20
                }
            },
            grid:{
                borderWidth:0,
                y:48,  //离canvas最上面的距离是40px
                x:40,
                x2:30
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap: true,
                    data :(function(){
                         var now = new Date();
                            var res = [];
                            var len = 12;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/\D*/,''));
                                now = new Date(now - 1*3600*1000);
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
                    type : 'value',                            
                    axisLabel :{
                        textStyle : {
                            color : '#222',
                            fontSize:14
                        }   
                    },
                    scale:true
                }
            ],
            series : [
                {
                    "name":"体温变化",
                    "type":"line",
                    "data":[36, 36, 37, 36.5, 36, 36.4, 38, 37, 37, 38, 38, 38.2, 39, 39.3],
                    itemStyle:{
                        normal:{
                            color:function  (params) {
                                //设置数字的阈值。
                                return params.data>36?(params.data>40?'#8AC701':'#fc9b03'):'#fc5b03';
                            }
                        }
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                }
            ]
        };

        // 为echarts对象加载数据 
        showWeather.setOption(option_showWeather);  


         // 睡眠统计
         //
         //
        var showSleep = ec.init(document.getElementById('showSleep')); 
        var option_showSleep = {
            title : {
                    text: ' '
            },
            tooltip: {
                show: true
            },
            legend: {
                data  :[''],
                orient:'horizontal',
                x     :'right',
                y     :'bottom',
                textStyle:{
                    fontSize:20
                }
            },
            grid:{
                borderWidth:0,
                y:48,  //离canvas最上面的距离是40px
                x:40,
                x2:30
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap: true,
                    data :(function(){
                         var now = new Date();
                            var res = [];
                            var len = 30;
                            while (len--) {
                                res.unshift(now.toLocaleDateString().replace(/^D*/,'').replace(/\//g,'-'));
                                now = new Date(now - 24*3600*1000);
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
                    type : 'value',                            
                    axisLabel :{
                        textStyle : {
                            color : '#222',
                            fontSize:14
                        }   
                    }
                }
            ],
            series : [
                {
                    "name":"睡眠统计",
                    "type":"bar",
                    "data":[1, 1.5, 2, 3, 4, 1.3,2, 1.4, 2, 4, 5, 1.2,3, 1.3,1, 1.5, 2, 3, 4, 1.3,2, 1.4, 2, 4, 5, 1.2,3, 1.3,1, 1.5, 2, 3, 4, 1.3,2, 1.4, 2, 4, 5, 1.2,3, 1.3,1, 1.5, 2, 3, 4, 1.3,2, 1.4, 2, 4, 5, 1.2,3, 1.3],
                    itemStyle:{
                        normal:{
                            color:function  (params) {
                                //设置数字的阈值。
                                return params.data>1?(params.data>3?'#fc5b03':'#fc9503'):'#fcd603';
                            }
                        }
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                }
            ]
        };

        // 为echarts对象加载数据 
        showSleep.setOption(option_showSleep);     


        //--- 活动统计 ---
        var showExercise = ec.init(document.getElementById('showExercise'));
        var option_showExercise = {
            title : {
                    text: ' '
            },
            tooltip : {
                trigger: 'axis'
            },
            dataZoom : {
                show : false,
                realtime : true,
                //orient: 'vertical',   // 'horizontal'
                //x: 0,
                y: 45,
                //width: 400,
                height: 20,
                //backgroundColor: 'rgba(221,160,221,0.5)',
                //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                fillerColor: 'rgba(38,143,26,0.6)',
                //handleColor: 'rgba(128,43,16,0.8)',
                //xAxisIndex:[],
                //yAxisIndex:[],
                start : 80,
                end : 107
            },
            grid:{
                borderWidth:0,
                y:48,  //离canvas最上面的距离是40px
                x:40,
                x2:30
            },
            legend: {
                data:[''],
                orient: 'horizontal', // 'vertical'
                x: 'right', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                textStyle:{
                    fontSize:22,
                    fontFamily:'Microsoft YaHei'
                }
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    splitLine:{show: false},//去掉网格线
                    data : function (){
                        var now =new Date();
                        var list = [];
                        var n = 0;
                        while (n++ < 108) {
                            list.unshift(now.toLocaleTimeString().replace(/\D*/,''));
                            now = new Date(now - 5*60*1000);
                        }
                        return list;
                    }(),
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
                    type : 'value',
                    splitLine:{show: false},//去掉网格线
                    axisLabel :{
                        textStyle : {
                            color : '#222',
                            fontSize:14
                        }   
                    }
                }
            ],
            series : [
                {
                    name:'活动统计',
                    type:'line',
                    data:function (){
                        var list = [];
                        for (var i = 1; i <= 108; i++) {
                            list.push(Math.round(Math.random()* 100));
                        }
                        return list;
                    }(),
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color:'#fff',
                                type: 'default'
                            }
                        }
                    }
                }
            ],
            calculable:false
        };
            
        showExercise.setOption(option_showExercise); 

        var ex = 0;
        var ex_len = option_showExercise.series[0].data.length;
        clearInterval(ex_timeTicket);
        var ex_timeTicket = setInterval(function (){
            // 动态数据接口 addData
            ex_lastIndex += 1;
            showExercise.addData([
                [
                    0,        // 系列索引
                    option_showExercise.series[0].data[ex_lastIndex%ex_len], // 新增数据
                    false,     // 新增数据是否从队列头部插入
                    false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                    option_showExercise.xAxis[0].data[ex_lastIndex%ex_len]
               ]
            ]);
        }, 5*60*1000);


        //--- 卡路里统计 ---
        var showCal = ec.init(document.getElementById('showCal'));
        var option_showCal = {
            title : {
                    text: ' '
            },
            tooltip : {
                trigger: 'axis'
            },
            dataZoom : {
                show : false,
                realtime : true,
                //orient: 'vertical',   // 'horizontal'
                //x: 0,
                y: 45,
                //width: 400,
                height: 20,
                //backgroundColor: 'rgba(221,160,221,0.5)',
                //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                fillerColor: '#40a1fa',
                //handleColor: 'rgba(128,43,16,0.8)',
                //xAxisIndex:[],
                //yAxisIndex:[],
                start : 80,
                end : 100
            },
            grid:{
                borderWidth:0,
                y:48,  //离canvas最上面的距离是40px
                x:40,
                x2:30
            },
            legend: {
                data:[''],
                orient: 'horizontal', // 'vertical'
                x: 'right', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                textStyle:{
                    fontSize:22,
                    fontFamily:'Microsoft YaHei',
                }
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    splitLine:{show: false},//去掉网格线
                    data : function (){
                        var now =new Date();
                        var list = [];
                        var n = 0;
                        while (n++ < 108) {
                            list.unshift(now.toLocaleTimeString().replace(/\D*/,''));
                            now = new Date(now - 5*60*1000);
                        }
                        return list;
                    }(),
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
                    type : 'value',
                    splitLine:{show: false},//去掉网格线
                    axisLabel :{
                        textStyle : {
                            color : '#222',
                            fontSize:14
                        }   
                    }
                }
            ],
            series : [
                {
                    name:'卡路里统计',
                    type:'line',
                    data:function (){
                        var list = [];
                        for (var i = 1; i <= 108; i++) {
                            list.push(Math.round(Math.random()* 100));
                        }
                        return list;
                    }(),
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                color:'#fff',
                                type: 'default'
                            }
                        }
                    }
                }
            ],
            calculable:false
        };
            
        showCal.setOption(option_showCal); 

        var ca = 0;
        var ca_len = option_showCal.series[0].data.length;
        clearInterval(ca_timeTicket);
        var ca_timeTicket = setInterval(function (){
            // 动态数据接口 addData
            ca_lastIndex += 1;
            showCal.addData([
                [
                    0,        // 系列索引
                    option_showCal.series[0].data[ca_lastIndex%ca_len], // 新增数据
                    false,     // 新增数据是否从队列头部插入
                    false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                    option_showCal.xAxis[0].data[ca_lastIndex%ca_len]
               ]
            ]);
        }, 5*60*1000);


        //--- 体重变化 ---
        var showWeight = ec.init(document.getElementById('showWeight'));
        var option_showWeight = {
            title : {
                text: ' '
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:[],
                orient: 'horizontal', // 'vertical'
                x: 'right', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                textStyle:{
                    fontSize:22,
                    fontFamily:'Microsoft YaHei',
                }
            },
            calculable : true,
            grid:{
                borderWidth:0,
                y:48,  //离canvas最上面的距离是40px
                x:40,
                x2:30
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    splitLine:{show: false},//去掉网格线
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    axisLabel : {
                        show : true,
                        textStyle : {
                            color : '#999',
                            fontSize:14
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{show: false},//去掉网格线
                    axisLabel : {
                        formatter: '{value}',
                        textStyle:{
                            color : '#999',
                            fontSize:14
                        }
                    },
                    scale:true
                }
            ],
            series : [
                {
                    name:'体重变化',
                    type:'line',
                    data:[60, 62, 62, 63, 63, 64.5, 66,68, 65, 65, 66.4, 67.3, 68.2, 70],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    textStyle:{
                        color:'green'
                    }
                }
            ]
        };
        showWeight.setOption(option_showWeight).setTheme('macarons', 'infographic'); 
    }
);