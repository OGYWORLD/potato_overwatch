import React, { useState, useEffect } from 'react';
import { Modal, Button, Select } from 'antd';
import {TeamOutlined, PieChartOutlined, DownOutlined} from '@ant-design/icons';
import ReactDOM from 'react-dom';
import { Pie, Column } from '@ant-design/charts';
import "../stylesheet/Body.css"
import sigma from "../image/sigma.png"
import rein from "../image/rein2.png"
import orisa from "../image/orisa_icon2.png"
import zarya from "../image/zayra_icon.png"
import Dva from "../image/Dva.png"

const { Option } = Select;

function PositionSituTanker() {
    
     const [isModalVisible, setIsModalVisible] = useState(false);
    
      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      function one() {
        const data = [
            {
                type: '시그마',
                value: 5.783673,
              },
              {
                type: '자리야',
                value: 1.246000,
              },
              {
                type: '디바',
                value: 1.273221,
              },
              {
                type: '라인하르트',
                value: 2.982796,
              },
              {
                type: '윈스턴',
                value: 1.768998,
              },
              {
                  type: '오리사',
                  value: 1.896148,
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

        return <Pie {...config1} style = {{position:"absolute", marginLeft: "80%", width: "500px"}}/>
      }

      function two() {
        const data = [
            {
              type: '시그마',
              value: 3.611318,
            },
            {
              type: '자리야',
              value: 4.571028,
            },
            {
              type: '디바',
              value: 0.882134,
            },
            {
              type: '라인하르트',
              value: 3.780894,
            },
            {
            type: '레킹볼',
            value: 1.196232,
            },
            {
              type: '윈스턴',
              value: 0.529239,
            },
            {
                type: '오리사',
                value: 1.000001,
            },
            {
                type: '로드호그',
                value: 2.229712,
            },
          ];
    
          const config2 = {
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
        return <Pie {...config2} style = {{position:"absolute", marginLeft: "80%", width: "500px"}}/>
      }

      function third() {
        const data = [
            {
              type: '시그마',
              value: 69,
            },
            {
              type: '자리야',
              value: 60,
            },
            {
              type: '디바',
              value: 10,
            },
            {
              type: '라인하르트',
              value: 18,
            },
            {
            type: '레킹볼',
            value: 4,
            },
            {
              type: '윈스턴',
              value: 5,
            },
            {
                type: '오리사',
                value: 6,
            },
            {
                type: '로드호그',
                value: 5,
            },
          ];
    
          const config3 = {
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
        return <Pie {...config3} style = {{position:"absolute", marginLeft: "80%", width: "500px"}}/>
      }

      function four() {
        const data = [
            {
              type: '시그마',
              value: 13.231512,
            },
            {
              type: '자리야',
              value: 14.477935,
            },
            {
              type: '디바',
              value: 8.015437,
            },
            {
              type: '라인하르트',
              value: 8.010165,
            },
            {
            type: '레킹볼',
            value: 0.000000,
            },
            {
              type: '윈스턴',
              value: 2.861478,
            },
            {
                type: '오리사',
                value: 1.384262,
            },
            {
                type: '로드호그',
                value: 5.312367,
            },
          ];
    
          const config4 = {
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
        return <Pie {...config4} style = {{position:"absolute", marginLeft: "80%", width: "500px"}}/>
      }

    
    return(
        <div style = {{fontFamily: "koverwatch"}}>
        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"40px", marginLeft:"10px" }}> 막은 피해량 </b>
        <ex style = {{marginLeft: "140px", fontSize: "17px", color: "#787A69"}}>
            최고 막은 피해량과 목숨 당 막은 피해량의 표준화한 값의 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {sigma} style = {{width: '70px', position:"absolute", marginTop: "10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%"}}>1위 시그마</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%"}}>최고 막은 피해량: 26,310</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%"}}>목숨 당 막은 피해량: 12,890</p>

        <img src = {rein} style = {{width: '60px', position:"absolute", marginTop: "125px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "150px"}}>2위 라인하르트</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "200px"}}>최고 막은 피해량: 23,317</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%", marginTop: "230px"}}>목숨 당 막은 피해량: 2,300</p>

        <img src = {orisa} style = {{width: '90px', position:"absolute", marginTop: "320px",}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "300px"}}>3위 오리사</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "350px"}}>최고 막은 피해량: 13,742</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%", marginTop: "380px"}}>목숨 당 막은 피해량: 1,944</p>
        </div>
        {one()}



        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 준 피해량 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
            최고 준 피해량과 목숨 당 준 피해량의 표준화한 값의 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {zarya} style = {{width: '90px', position:"absolute", marginTop: "10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%"}}>1위 자리야</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%"}}>최고 준 피해량: 16,407</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%"}}>목숨 당 준 피해량: 9,903</p>

        <img src = {rein} style = {{width: '60px', position:"absolute", marginTop: "125px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "150px"}}>2위 라인하르트</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "200px"}}>최고 준 피해량: 15,170</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%", marginTop: "230px"}}>목숨 당 준 피해량: 5,182</p>

        <img src = {sigma} style = {{width: '70px', position:"absolute", marginTop: "310px",}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "300px"}}>3위 시그마</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "350px"}}>최고 준 피해량: 17,887</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%", marginTop: "380px"}}>목숨 당 준 피해량: 7,656</p>
        </div>
        {two()}



        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 승리 횟수 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
            승리 횟수가 많은 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {sigma} style = {{width: '70px', position:"absolute", marginTop: "10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%"}}>1위 시그마</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%"}}>승리한 횟수: 69번</p>

        <img src = {zarya} style = {{width: '90px', position:"absolute", marginTop: "165px", marginLeft:"0px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "150px"}}>2위 자리야</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "200px"}}>승리한 횟수: 60번</p>

        <img src = {rein} style = {{width: '60px', position:"absolute", marginTop: "280px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "300px"}}>3위 라인하르트</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "350px"}}>승리한 횟수: 18번</p>
        </div>
        {third()}




        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 추천 영웅 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
            평균 치명타, 단독 처치, 연속 처치, 한 목숨 당 처치 횟수, 최고 처치 횟수, 한 목숨 당 피해량, 최고 피해량, 한 목숨 당 막은 피해량, 최고 막은 피해량의 표준화한 값의 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {zarya} style = {{width: '90px', position:"absolute", marginTop: "10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%"}}>1위 자리야</b>

        <img src = {sigma} style = {{width: '70px', position:"absolute", marginTop: "145px", marginLeft:"0px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "150px"}}>2위 시그마</b>

        <img src = {Dva} style = {{width: '80px', position:"absolute", marginTop: "300px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "300px"}}>3위 디바</b>

        </div>
        {four()}


        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default PositionSituTanker;