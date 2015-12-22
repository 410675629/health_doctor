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
                text: '心率'
            },
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            grid:{
                borderWidth:'0'
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : true,
                    splitLine:{show: false},//去掉网格线
                    /*data : ['1','2','3','4','5','6','7','8','9','10','11'],*/
                    data : (function (){
                        var now = new Date();
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                            now = new Date(now - 5000);
                        }
                        return res;
                    })(),
                    axisLabel : {
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
                    scale:true,
                    axisLabel : {
                        formatter: '{value}',
                        textStyle : {
                            fontSize:20
                        }   
                    }
                }
            ],
            series : [
                {
                    name:'心率',
                    type:'line',
                    /*data:[89, 67, 75, 83, 120, 103, 110,83, 120, 103, 110],*/
                    data:(function (){
                        var res = [];
                        var len = 10;
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
                    },
                    lineStyle:{
                       color:'black',
                       type:'solid'
                    }
                }
            ]
        };
            
        showHeart.setOption(option_showHeart).setTheme('macarons', 'infographic'); 







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
                    data : ["2015-11-05","2015-11-06","2015-11-07","2015-11-08","2015-11-09","2015-11-10"
                        ,"2015-11-11","2015-11-12","2015-11-13","2015-11-14","2015-11-15","2015-11-16",
                        "2015-11-17","2015-11-18","2015-11-19"
                        ],
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
                    "data":[5, 20, 40, 10, 100, 20,5, 20, 41, 10, 10, 45,5, 20, 40, 10, 10, 20],
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

        //--- 体重变化 ---
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
                start : 40,
                end : 60
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
                        var list = [];
                        var n = 0;
                        while (n++ < 108) {
                            list.push(n);
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
                   /* smooth:true,*/
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
    }
);



//  实时K线图


option = {
    title : {
        text: '动态数据',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['上证指数']
    },

    dataZoom : {
        show : true,
        realtime: true,
        start : 50,
        end : 100
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : [
                "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
                "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
                "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
                "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
                "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
                "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
                "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
                "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
                "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
                "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
                "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
                "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
                "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
                "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
                "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
                "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
                "2013/6/6", "2013/6/7", "2013/6/13"
            ]
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            splitNumber: 5,
            boundaryGap: [0.05, 0.05]
        }
    ],
    series : [
        {
            name:'上证指数',
            type:'k',
            data:[ // 开盘，收盘，最低，最高
                [2320.26,2302.6,2287.3,2362.94],
                [2300,2291.3,2288.26,2308.38],
                [2295.35,2346.5,2295.35,2346.92],
                [2347.22,2358.98,2337.35,2363.8],
                [2360.75,2382.48,2347.89,2383.76],
                [2383.43,2385.42,2371.23,2391.82],
                [2377.41,2419.02,2369.57,2421.15],
                [2425.92,2428.15,2417.58,2440.38],
                [2411,2433.13,2403.3,2437.42],
                [2432.68,2434.48,2427.7,2441.73],
                [2430.69,2418.53,2394.22,2433.89],
                [2416.62,2432.4,2414.4,2443.03],
                [2441.91,2421.56,2415.43,2444.8],
                [2420.26,2382.91,2373.53,2427.07],
                [2383.49,2397.18,2370.61,2397.94],
                [2378.82,2325.95,2309.17,2378.82],
                [2322.94,2314.16,2308.76,2330.88],
                [2320.62,2325.82,2315.01,2338.78],
                [2313.74,2293.34,2289.89,2340.71],
                [2297.77,2313.22,2292.03,2324.63],
                [2322.32,2365.59,2308.92,2366.16],
                [2364.54,2359.51,2330.86,2369.65],
                [2332.08,2273.4,2259.25,2333.54],
                [2274.81,2326.31,2270.1,2328.14],
                [2333.61,2347.18,2321.6,2351.44],
                [2340.44,2324.29,2304.27,2352.02],
                [2326.42,2318.61,2314.59,2333.67],
                [2314.68,2310.59,2296.58,2320.96],
                [2309.16,2286.6,2264.83,2333.29],
                [2282.17,2263.97,2253.25,2286.33],
                [2255.77,2270.28,2253.31,2276.22],
                [2269.31,2278.4,2250,2312.08],
                [2267.29,2240.02,2239.21,2276.05],
                [2244.26,2257.43,2232.02,2261.31],
                [2257.74,2317.37,2257.42,2317.86],
                [2318.21,2324.24,2311.6,2330.81],
                [2321.4,2328.28,2314.97,2332],
                [2334.74,2326.72,2319.91,2344.89],
                [2318.58,2297.67,2281.12,2319.99],
                [2299.38,2301.26,2289,2323.48],
                [2273.55,2236.3,2232.91,2273.55],
                [2238.49,2236.62,2228.81,2246.87],
                [2229.46,2234.4,2227.31,2243.95],
                [2234.9,2227.74,2220.44,2253.42],
                [2232.69,2225.29,2217.25,2241.34],
                [2196.24,2211.59,2180.67,2212.59],
                [2215.47,2225.77,2215.47,2234.73],
                [2224.93,2226.13,2212.56,2233.04],
                [2236.98,2219.55,2217.26,2242.48],
                [2218.09,2206.78,2204.44,2226.26],
                [2199.91,2181.94,2177.39,2204.99],
                [2169.63,2194.85,2165.78,2196.43],
                [2195.03,2193.8,2178.47,2197.51],
                [2181.82,2197.6,2175.44,2206.03],
                [2201.12,2244.64,2200.58,2250.11],
                [2236.4,2242.17,2232.26,2245.12],
                [2242.62,2184.54,2182.81,2242.62],
                [2187.35,2218.32,2184.11,2226.12],
                [2213.19,2199.31,2191.85,2224.63],
                [2203.89,2177.91,2173.86,2210.58],
                [2170.78,2174.12,2161.14,2179.65],
                [2179.05,2205.5,2179.05,2222.81],
                [2212.5,2231.17,2212.5,2236.07],
                [2227.86,2235.57,2219.44,2240.26],
                [2242.39,2246.3,2235.42,2255.21],
                [2246.96,2232.97,2221.38,2247.86],
                [2228.82,2246.83,2225.81,2247.67],
                [2247.68,2241.92,2231.36,2250.85],
                [2238.9,2217.01,2205.87,2239.93],
                [2217.09,2224.8,2213.58,2225.19],
                [2221.34,2251.81,2210.77,2252.87],
                [2249.81,2282.87,2248.41,2288.09],
                [2286.33,2299.99,2281.9,2309.39],
                [2297.11,2305.11,2290.12,2305.3],
                [2303.75,2302.4,2292.43,2314.18],
                [2293.81,2275.67,2274.1,2304.95],
                [2281.45,2288.53,2270.25,2292.59],
                [2286.66,2293.08,2283.94,2301.7],
                [2293.4,2321.32,2281.47,2322.1],
                [2323.54,2324.02,2321.17,2334.33],
                [2316.25,2317.75,2310.49,2325.72],
                [2320.74,2300.59,2299.37,2325.53],
                [2300.21,2299.25,2294.11,2313.43],
                [2297.1,2272.42,2264.76,2297.1],
                [2270.71,2270.93,2260.87,2276.86],
                [2264.43,2242.11,2240.07,2266.69],
                [2242.26,2210.9,2205.07,2250.63],
                [2190.1,2148.35,2126.22,2190.1]
            ]
        }
    ]
};
var lastIndex = 0;
var len = option.series[0].data.length;
clearInterval(timeTicket);
timeTicket = setInterval(function (){
    // 动态数据接口 addData
    lastIndex += 1;
    myChart.addData([
        [
            0,        // 系列索引
            option.series[0].data[lastIndex%len], // 新增数据
            false,     // 新增数据是否从队列头部插入
            false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
            option.xAxis[0].data[lastIndex%len]
        ],
        [
            1,        // 系列索引
            [
                (Math.random()*100).toFixed(2) - 0,
                (Math.random()*100).toFixed(2) - 0,
                (Math.random()*100).toFixed(2) - 0
            ], // 新增数据
            false,    // 新增数据是否从队列头部插入
            false    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        ]
    ]);
}, 2000);


//  实时K线图
                    