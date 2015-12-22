
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
    }
);