
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
       
    }
);