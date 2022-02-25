import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page: React.FC = () => {
  const options = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '15%',
      left: 'center'
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '70%'],
        center:['50%','40%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '衣' },
          { value: 735, name: '食' },
          { value: 580, name: '住' },
          { value: 484, name: '行' },
          { value: 300, name: '工资' }
        ]
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: 400}} />;
};

export default Page;