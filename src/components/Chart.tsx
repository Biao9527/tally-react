import React from 'react';
import ReactECharts from 'echarts-for-react';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';

type Props = {
  category: '-' | '+'
}
const Page: React.FC<Props> = (props) => {
  const {records} = useRecords();
  const {tags} = useTags();
  const selectedCategory = records.filter(r => props.category === r.category);
  const array = []
    for (let i = 0; i < tags.length; i++) {
      let sum = 0
      for (let j = 0; j < selectedCategory.length; j++) {
        let a = 0
        selectedCategory[j].tagIds.forEach(id => {
          if (id === tags[i].id) {
            a= selectedCategory[j].amount;
          }
          return a
        });
        if(a){sum+=a}
      }
      array.push({value:sum,name:tags[i].name})
    }
  const newArray = array.filter(i => i.value !== 0)
  console.log(newArray);
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
        center: ['50%', '40%'],
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
        data: newArray
      }
    ]
  };

  return (
    <>
      <ReactECharts option={options} style={{height: 400}}/>
    </>
  );
};

export default Page;