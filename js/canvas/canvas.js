
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

        //--- 心率 ---
        var showHeart = ec.init(document.getElementById('showHeart'));

        var option_showHeart = {
                title : {
                    text: '动态数据',
                    subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['心率跳动实时图'],
                    orient:'horizontal',
                    x     :'right',
                    y     :'bottom',
                    textStyle:{
                        fontSize:20
                    }
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
                                now = new Date(now - 5000);
                            }
                            return res;
                        })(),
                        axisLabel :{
                            textStyle : {
                                fontSize:20
                            }   
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:{show: false},//去掉网格线
                        boundaryGap: [0.05, 0.05]
                    }
                ],
                grid:{
                    borderWidth:0
                },
                series : [
                    {
                        name:'心率跳动实时图',
                        type:'line',
                        splitLine:{
                            show: false
                        },//去掉网格线
                        data:(function (){
                            var res = [];
                            var len = 60;
                            while (len--) {
                                res.push(Math.round(Math.random() * 120));
                            }
                            return res;
                        })(),
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        }
                    }
                ]
            };
        var lastIndex = 0;
        var len = option_showHeart.series[0].data.length;
        clearInterval(timeTicket);
        var timeTicket = setInterval(function (){
            // 动态数据接口 addData
            lastIndex += 1;
            showHeart.addData([
                [
                    0,        // 系列索引
                    option_showHeart.series[0].data[lastIndex%len], // 新增数据
                    false,     // 新增数据是否从队列头部插入
                    false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                    option_showHeart.xAxis[0].data[lastIndex%len]
                ]
            ]);
        }, 5000);
                    
        showHeart.setOption(option_showHeart).setTheme('default'); 





        // 基于准备好的dom，初始化echarts图表
        var showExercise = ec.init(document.getElementById('showExercise')); 
        var option_showExercise = {
            tooltip: {
                show: true
            },
            legend: {
                data  :['活动统计'],
                orient:'horizontal',
                x     :'right',
                y     :'bottom',
                textStyle:{
                    fontSize:20
                }
            },
            grid:{
                y:45,
                borderWidth:'0'
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
                            fontSize:20
                        }   
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',                            
                    axisLabel :{
                        textStyle : {
                            fontSize:20
                        }   
                    }
                }
            ],
            series : [
                {
                    "name":"活动统计",
                    "type":"bar",
                    "data":[5, 20, 40, 10, 100, 20,5, 20, 41, 10, 10, 45,5, 20, 40, 10, 10, 20,100, 20,5, 20, 41, 10, 10, 45,5, 20,100, 20,5, 20, 41, 10, 10, 45,5, 20],
                    itemStyle:{
                        normal:{
                            color:function  (params) {
                                //设置数字的阈值。
                                return params.data>40?(params.data>60?'#8AC701':'#E8BD00'):'#DA6200';
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
        showExercise.setOption(option_showExercise); 




        //--- 睡眠统计 ---
        var showSleep = ec.init(document.getElementById('showSleep'));
        var option_showSleep = {
            tooltip : {
                trigger: 'axis'
            },
            dataZoom : {
                show : true,
                realtime : true,
                //orient: 'vertical',   // 'horizontal'
                //x: 0,
                y: 2,
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
                y:20  //离canvas最上面的距离是40px
            },
            legend: {
                data:['每晚9个小时段中的睡眠质量'],
                orient: 'horizontal', // 'vertical'
                x: 'right', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                textStyle:{
                    fontSize:22,
                    fontFamily:'宋体',
                    fontWeight:'bold'
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
                            fontSize:20
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
                            fontSize:20
                        }   
                    }
                }
            ],
            series : [
                {
                    name:'每晚9个小时段中的睡眠质量',
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
                                color:'#085398',
                                type: 'default'
                            }
                        }
                    }
                }
            ],
            calculable:false
        };
            
        showSleep.setOption(option_showSleep); 

        var sleep_lastIndex = 0;
        var sleep_len = option_showSleep.series[0].data.length;
        clearInterval(slee_timeTicket);
        var slee_timeTicket = setInterval(function (){
            // 动态数据接口 addData
            sleep_lastIndex += 1;
            showSleep.addData([
                [
                    0,        // 系列索引
                    option_showSleep.series[0].data[sleep_lastIndex%sleep_len], // 新增数据
                    false,     // 新增数据是否从队列头部插入
                    false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                    option_showSleep.xAxis[0].data[sleep_lastIndex%sleep_len]
               ]
            ]);
        }, 5*60*1000);






        //--- 体重变化 ---
        var showWeight = ec.init(document.getElementById('showWeight'));
        var option_showWeight = {
            title : {
                text: '一年中的体重变化',
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['体重变化','体重趋势'],
                orient: 'horizontal', // 'vertical'
                x: 'right', // 'center' | 'left' | {number},
                y: 'bottom', // 'center' | 'bottom' | {number}
                textStyle:{
                    fontSize:22,
                    fontFamily:'宋体',
                    fontWeight:'bold'
                }
            },
            calculable : true,
            grid:{
                borderWidth:'0'
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
                            color : '#28c6de',
                            fontSize:20
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
                            fontSize:20
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
                },
                {
                    name:'体重趋势',
                    type:'line',
                    data:[60, 61.1, 61.3, 61.6, 62, 62.5, 63,63.5, 64, 64.5, 65, 65.5, 66.2, 67]
                }
            ]
        };
        showWeight.setOption(option_showWeight).setTheme('macarons', 'infographic'); 


        //testing
        var dataZoom1 = ec.init(document.getElementById('dataZoom1'));
        var dataZoom_option = {
            /*tooltip : {
                trigger: 'axis'
            },*/
            legend:{
                show:true,
                selected:{
                    '最近一周':false,
                    '最近一月':false
                },
                data:['实时',{
                        name:'最近一周',
                        /*icon : 'image://../asset/ico/favicon.png',*/
                        textStyle:{
                            fontWeight:'bold', 
                            color:'green'
                        }
                    },{
                        name:'最近一月',
                        icon : 'image://../asset/ico/favicon.png',
                        textStyle:{
                            fontWeight:'bold', 
                            color:'green'
                        }
                    }],
                orient: 'horizontal', // 'vertical'
                x: 'right', // 'center' | 'left' | {number},
                y: 'top', // 'center' | 'bottom' | {number}
                textStyle:{
                    fontSize:22,
                    fontFamily:'宋体',
                    fontWeight:'bold'
                }
            },
            toolbox: {
                show : true,
                itemSize:40,
                orient:'vertical',
                top:100,
                right:100,
                feature : {
                    mark : {show: false},
                    dataZoom : {show: true},
                    /*dataView : {show: true},
                    magicType : {show: true, type: ['line', 'bar']},*/
                    restore : {show: true},
                    /*saveAsImage : {show: true}*/
                    selfButtons:{//自定义按钮 danielinbiti,这里增加，selfbuttons可以随便取名字    
                       show:true,//是否显示    
                       title:'自定义', //鼠标移动上去显示的文字      
                       option: option_showWeight,    
                       onclick:function(option1) {//点击事件,这里的option1是chart的option信息
                            var dataZoom1 = ec.init(document.getElementById('dataZoom1'));
                            dataZoom1.setOption(option_showWeight).setTheme('macarons', 'infographic'); 
                        }    
                    },
                }
            },
            dataZoom : {
                show : true,
                realtime : true,
                //orient: 'vertical',   // 'horizontal'
                /*x: 0,*/
                y: 270,
                //width: 400,
                height: 28,
                //backgroundColor: 'rgba(221,160,221,0.5)',
                //dataBackgroundColor: 'rgba(138,43,226,0.5)',
                //fillerColor: 'rgba(38,143,26,0.6)',
                //handleColor: 'rgba(128,43,16,0.8)',
                //xAxisIndex:[],
                //yAxisIndex:[],
                start : 90,
                end : 100
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : function (){
                        var list = [];
                        var n = 0;
                        while (n++ < 150) {
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
                    name:'实时',
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
        dataZoom1.setOption(dataZoom_option).setTheme('macarons', 'infographic');   
        var config = require('echarts/config');  
        //监控刷新事件 
        dataZoom1.on(config.EVENT.CLICK, function(param){ 
            alert("刷新"); 
        });
        // 动态添加默认不显示的数据
        dataZoom1.on(config.EVENT.LEGEND_SELECTED, function (param){
            var selected = param.selected;
            var len;
            var added;
            if (selected['最近一周']) {
                len = dataZoom_option.series.length;
                added = false;
                while (len--) {
                    if (dataZoom_option.series[len].name == '最近一周') {
                        // 已经添加
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    dataZoom1.showLoading({
                        text : '数据获取中',
                        effect: 'whirling'
                    });
                    setTimeout(function (){
                        dataZoom_option.series=[];//清空列表
                        dataZoom_option.xAxis =[];//重绘x轴
                        dataZoom_option.xAxis.push({
                            type : 'category',
                            boundaryGap : false,
                            data : function (){
                                var list = [];
                                var n = 0;
                                while (n++ < 550) {
                                    list.push(n);
                                }
                                return list;
                            }()
                        })
                        dataZoom_option.series.push({
                            name:'最近一周',
                            type:'line',
                            data:function (){
                                var list = [];
                                for (var i = 1; i <= 550; i++) {
                                    list.push(Math.round(Math.random()* 30));
                                }
                                return list;
                            }()
                        });
                        dataZoom_option.legend.selected['实时'] =false;

                        dataZoom1.hideLoading();
                        dataZoom1.setOption(dataZoom_option);
                    }, 2000)
                } 
            }

             if (selected['最近一月']) {
                len = dataZoom_option.series.length;
                dataZoom_option.legend.selected['实时']=false;
                dataZoom_option.legend.selected['最近一周']=false;
                added = false;
                while (len--) {
                    if (dataZoom_option.series[len].name == '实时') {
                        // 已经添加
                        added = true;
                        break;
                    }
                }
            }
        });       
    }
);