import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import {TeamOutlined, PieChartOutlined, DownOutlined} from '@ant-design/icons';
import ReactDOM from 'react-dom';
import { DualAxes, Pie, Radar, Line } from '@ant-design/charts';

import ana from "../image/ana.png"
import mercy from "../image/mercy.png"
import lucio from "../image/lucio.png"

const dataSource = [
    {
      key: '1',
      name: '메르시',
      season: 18,
    },
    {
      key: '2',
      name: '메르시',
      season: 19,
    },
    {
        key: '3',
        name: '메르시',
        season: 20,
      },
      {
        key: '4',
        name: '루시우',
        season: 21,
      },
      {
        key: '5',
        name: '루시우',
        season: 22,
      },{
        key: '6',
        name: '루시우',
        season: 23,
      },
      {
        key: '7',
        name: '메르시',
        season: 24,
      },
      {
        key: '8',
        name: '아나',
        season: 25,
      },
      {
        key: '9',
        name: '아나',
        season: 26,
      },
      {
        key: '10',
        name: '아나',
        season: 28,
      },
      {
        key: '11',
        name: '메르시',
        season: 30,
        
      },
      {
        key: '12',
        name: '아나',
        season: 31,
      },
  ];
  
  const columns = [
    {
        title: 'season',
        dataIndex: 'season',
        key: 'season',
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

function one() {
    
    const data = [
        {
          season: '18',
          win_rate: 0.37,
          score: 1397
        },
        {
        season: '19',
        win_rate: 0.472,
        score: 1324
        },
        {
        season: '20',
        win_rate: 0.5,
        score: 1352
        },
        {
        season: '21',
        win_rate: 0.5,
        score: 1514
        },
        {
        season: '22',
        win_rate: 0.5,
        score: 1618
        },
        {
        season: '23',
        win_rate: 0.667,
        score: 1878
        },
        {
        season: '24',
        win_rate: 0.623,
        score: 2060
        },
        {
        season: '25',
        win_rate: 0.533,
        score: 2153
        },
        {
        season: '26',
        win_rate: 0.462,
        score: 2044
        },
        {
        season: '28',
        win_rate: 0.42,
        score: 2012
        },
        {
        season: '30',
        win_rate: 0.5,
        score: 2103
        },
        {
        season: '31',
        win_rate: 0.507,
        score: 2060
        },
      ];
      const config = {
        data: [data, data, data, data],
        xField: 'season',
        yField: ['win_rate','score'],
        geometryOptions: [
          {
            geometry: 'line',
            color: '#5B8FF9',
          },
          {
            geometry: 'line',
            color: '#5AD8A6',
          },
          
        ],
      };
      return <DualAxes {...config} style={{marginRight: "25%", marginLeft: "80px"}}/>
}

function two() {
    const data = [
        {
            type: '메르시',
            value: 5,
          },
          {
            type: '아나',
            value: 4,
          },
          {
            type: '루시우',
            value: 3,
          },
    ];

      const config1 = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
    };

    return <Pie {...config1} style = {{position:"absolute", marginLeft: "45%", width: "500px"}}/>
}

function rader() {
    const data = [
        {
          name: '평균 임무기여 시간(초)',
          star: 89,
        },
        {
          name: '평균 폭주 시간(초)',
          star: 35,
        },
        {
          name: '평균 치유량',
          star: 7482,
        },
        {
          name: '평균 처치량',
          star: 9.5,
        },
        {
          name: '치명타',
          star: 2.5,
        },
        {
          name: '평균 피해량',
          star: 2821,
        },
        {
          name: '평균 죽음수',
          star: 7,
        },
      ];
      const config = {
        data: data.map((d) => ({ ...d, star:d.star })),
        xField: 'name',
        yField: 'star',
        xAxis: {
          tickLine: null,
        },
        yAxis: {
          label: false,
          grid: {
            alternateColor: 'rgba(0, 0, 0, 0.04)',
          },
        },

        point: {
          size: 2,
        },
        area: {},
      };
      return <Radar {...config} style = {{marginTop:"70px", marginRight:"400px" }}/>
}

function reg() {
    const data = [
        {
          score: '1300',
          season: 18,
        },
        {
            score: '1500',
            season: 20,
        },
        {
            score: '1700',
            season: 22,
        },
        {
            score: '2000',
            season: 26,
        },
        {
            score: '2300',
            season: 29,
        },
        {
            score: '2500',
            season: 32,
        },
        {
            score: '2700',
            season: 34,
        },
        {
            score: '3000',
            season: 37,
        },
        {
            score: '3200',
            season: 39,
        },
      ];
      const config = {
        data,
        xField: 'score',
        yField: 'season',
        label: {},
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#5B8FF9',
            lineWidth: 2,
          },
        },
        tooltip: {
          showMarkers: false,
        },
        state: {
          active: {
            style: {
              shadowBlur: 4,
              stroke: '#000',
              fill: 'red',
            },
          },
        },
        interactions: [
          {
            type: 'marker-active',
          },
        ],
      };
      return <Line {...config} style={{marginRight: "25%", marginLeft: "80px"}}/>
}

function Competition() {
    return(
        <div style = {{fontFamily: "koverwatch"}}>

        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"40px", marginLeft:"10px" }}> 시즌 별 한 눈에 보기 </b>
        <ex style = {{marginLeft: "220px", fontSize: "17px", color: "#787A69"}}>
        시즌별 승률, 배치 점수를 제공합니다.
        </ex>
        <br/><br/><br/>
        {one()}


        <br/><br/><br/><br/><br/><br/>
        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"40px", marginLeft:"10px" }}> 가장 많이 플레이한 영웅 </b>
        <ex style = {{marginLeft: "250px", fontSize: "17px", color: "#787A69"}}>
        시즌별 모스트 영웅 중 가장 많이 플레이한 영웅 순위
        </ex><br/><br/>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {mercy} style = {{width: '90px', position:"absolute", marginTop: "0px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "5%"}}>1위 메르시</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "5%"}}>누적 횟수 횟수: 5번</p>

        <img src = {ana} style = {{width: '90px', position:"absolute", marginTop: "155px", marginLeft:"10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "5%", marginTop: "150px"}}>2위 아나</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "5%", marginTop: "200px"}}>누적 횟수 횟수: 4번</p>

        <img src = {lucio} style = {{width: '90px', position:"absolute", marginTop: "320px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "5%", marginTop: "300px"}}>3위 루시우</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "5%", marginTop: "350px"}}>누적 횟수 횟수: 3번</p>
        {two()}
        <Table dataSource={dataSource} columns={columns} style = {{width: "30%", marginLeft: "20%", fontSize: "10px"}} scroll={{ y: 300, x: 500 }}/>
        </div>
        <br/><br/><br/><br/><br/><br/>

        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"40px", marginLeft:"10px" }}> 전체 통계 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
        총 시즌의 평균 특성을 알려드립니다.
        </ex>
        {rader()}
        <br/><br/><br/><br/><br/><br/>

        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"40px", marginLeft:"10px" }}> 티어 예측기 </b>
        <ex style = {{marginLeft: "140px", fontSize: "17px", color: "#787A69"}}>
        선형회귀를 통하여 다음 티어에 달성할 시즌을 알려드립니다.
        </ex><br/><br/><br/>

        <b style = {{fontSize: "40px", position:"absolute", marginLeft:"50px"}}> 배치점수가 <color style={{color: "red"}}>2500</color>점을 넘기는 시즌은 <color style={{color: "red"}}>32시즌</color>으로 예측됩니다.</b>
        <br/><br/><br/><br/><br/><br/>
        {reg()}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    )
}

export default Competition;