
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

       /* function jsonToJson () {
            return Math.round(Math.random()*100)
        }
        var data_arr=[];
        
        var data_arr_str = localStorage.getItem(data_arr);*/
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
            var heartJson = JavaScriptInterface.jsontohtml();//从客户端中读取来的数据
            var obj = eval("("+heartJson+")");//解析出来的json
            var curHeartBeating = obj.rate ;//实时心跳数据
            var curTime =obj.time;
            /*data_arr.push(curHeartBeating);
            if(data_arr.length>9){
                data_arr.shift();//移除掉第一项
                localStorage.setItem('data_arr',data_arr);//将数据临时存储在客户端中
            }*/

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