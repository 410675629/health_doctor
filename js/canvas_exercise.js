
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


 





       
    }
);