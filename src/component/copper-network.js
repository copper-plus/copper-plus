import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {graph,categories} from '../component/copper-network_data'

export const CopperNetwork = () => (
    <ReactEcharts
        option={{
            title: {
                text: 'Copper-plus Network',
                subtext: JSON.stringify(graph.nodes[0]),
                top: 'bottom',
                left: 'right'
            },
            tooltip: {},
            legend: [{
                // selectedMode: 'single',
                data: categories.map(function (a) {
                    return a.name;
                })
            }],
            animationDuration: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    name: 'Copper-plus',
                    type: 'graph',
                    layout: 'none',
                    data: graph.nodes,
                    links: graph.links,
                    categories: categories,
                    roam: true,
                    focusNodeAdjacency: true,
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    },
                    label: {
                        position: 'right',
                        formatter: '{b}'
                    },
                    lineStyle: {
                        color: 'source',
                        curveness: 0.1
                    },
                    emphasis: {
                        lineStyle: {
                            width: 10
                        }
                    }
                }
            ]
        }}
      />
);


{/* <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [{ 
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }]
        }}
      /> */}