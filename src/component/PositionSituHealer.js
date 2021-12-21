import React, { useState, useEffect } from 'react';
import { Modal, Button, Select } from 'antd';
import {TeamOutlined, PieChartOutlined, DownOutlined} from '@ant-design/icons';
import ReactDOM from 'react-dom';
import { Pie, Column } from '@ant-design/charts';
import "../stylesheet/Body.css"
import mercy from "../image/mercy.png"
import lucio from "../image/lucio.png"
import moira from "../image/moira.png"
import zen from "../image/zen.png"
import ana from "../image/ana.png"

const { Option } = Select;

function PositionSituHealer() {
    
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

      {/* 치유량 파이차트 코드*/}
      function one() {
        const data = [
            {
                type: '메르시',
                value: 4.762652,
              },
              {
                type: '아나',
                value: 3.073366,
              },
              {
                type: '루시우',
                value: 4.409396,
              },
              {
                type: '모이라',
                value: 3.576232,
              },
              {
                type: '바티스트',
                value: 0.727206,
              },
              {
                type: '젠야타',
                value: 0,
            },
              {
                  type: '브리기테',
                  value: 0.496212,
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

        return <Pie {...config1} style = {{position:"absolute", marginLeft: "130%", width: "500px"}}/>
      }

      {/* 준 피해량 파이차트 코드*/}
      function two() {
        const data = [
            {
                type: '메르시',
                value: 0,
              },
              {
                type: '아나',
                value: 3.199874,
              },
              {
                type: '루시우',
                value: 4.019015,
              },
              {
                type: '모이라',
                value: 4.154251,
              },
              {
                type: '바티스트',
                value: 2.235912,
              },
              {
                type: '젠야타',
                value: 5.691415,
            },
              {
                  type: '브리기테',
                  value: 0.979702,
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
        return <Pie {...config2} style = {{position:"absolute", marginLeft: "130%", width: "500px"}}/>
      }

      {/* 승리횟수 파이차트 작성 코드*/}
      function third() {
        const data = [
            {
                type: '메르시',
                value: 158,
              },
              {
                type: '아나',
                value: 98,
              },
              {
                type: '루시우',
                value: 58,
              },
              {
                type: '모이라',
                value: 52,
              },
              {
                type: '바티스트',
                value: 12,
              },
              {
                type: '젠야타',
                value: 10,
            },
              {
                  type: '브리기테',
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
        return <Pie {...config3} style = {{position:"absolute", marginLeft: "130%", width: "500px"}}/>
      }

      {/* 추천 영웅 작성 코드*/}
      function four() {
        const data = [
            {
                type: '메르시',
                value: 9.090585,
              },
              {
                type: '아나',
                value: 6.563223,
              },
              {
                type: '루시우',
                value: 6.720148,
              },
              {
                type: '모이라',
                value: 3.918752,
              },
              {
                type: '바티스트',
                value: 1.483446,
              },
              {
                type: '젠야타',
                value: 1.722511,
            },
              {
                  type: '브리기테',
                  value: 0,
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
        return <Pie {...config4} style = {{position:"absolute", marginLeft: "130%", width: "500px"}}/>
      }

    
    return(
        <div style = {{fontFamily: "koverwatch"}}>
        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"40px", marginLeft:"10px" }}> 치유량 </b>
        <ex style = {{marginLeft: "140px", fontSize: "17px", color: "#787A69"}}>
            목숨 당 치유량과 최고 치유량의 표준화한 값의 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {mercy} style = {{width: '90px', position:"absolute", marginTop: "0px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%"}}>1위 메르시</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%"}}>최고 치유량: 17,151</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "30%"}}>목숨 당 치유량: 1,268</p>

        <img src = {lucio} style = {{width: '90px', position:"absolute", marginTop: "165px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "150px"}}>2위 루시우</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%", marginTop: "200px"}}>최고 치유량: 15,158</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "30%", marginTop: "230px"}}>목숨 당 치유량: 1,279</p>

        <img src = {moira} style = {{width: '95px', position:"absolute", marginTop: "320px", marginLeft:"10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "300px"}}>3위 모이라</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%", marginTop: "350px"}}>최고 치유량: 13,723</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "30%", marginTop: "380px"}}>목숨 당 치유량: 1,146</p>
        </div>
        {one()}



        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 준 피해량 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
            최고 준 피해량과 목숨 당 준 피해량의 표준화한 값의 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {zen} style = {{width: '80px', position:"absolute", marginTop: "5px", marginLeft: "10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%"}}>1위 젠야타</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%"}}>최고 준 피해량: 10,141</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "30%"}}>목숨 당 준 피해량: 7,446</p>

        <img src = {moira} style = {{width: '95px', position:"absolute", marginTop: "170px", marginLeft:"10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "150px"}}>2위 모이라</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%", marginTop: "200px"}}>최고 준 피해량: 8,962</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "30%", marginTop: "230px"}}>목숨 당 준 피해량: 4,769</p>

        <img src = {lucio} style = {{width: '90px', position:"absolute", marginTop: "320px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "300px"}}>3위 루시우</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%", marginTop: "350px"}}>최고 준 피해량: 9,066</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "30%", marginTop: "380px"}}>목숨 당 준 피해량: 4,402</p>
        </div>
        {two()}



        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 승리 횟수 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
            승리 횟수가 많은 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {mercy} style = {{width: '90px', position:"absolute", marginTop: "0px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%"}}>1위 메르시</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%"}}>승리한 횟수: 158번</p>

        <img src = {ana} style = {{width: '90px', position:"absolute", marginTop: "155px", marginLeft:"10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "150px"}}>2위 아나</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%", marginTop: "200px"}}>승리한 횟수: 98번</p>

        <img src = {lucio} style = {{width: '90px', position:"absolute", marginTop: "320px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "300px"}}>3위 루시우</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "30%", marginTop: "350px"}}>승리한 횟수: 58번</p>
        </div>
        {third()}




        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 추천 영웅 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
            평균 치명타, 최고 치유량, 목숨 당 치유량, 승리 횟수의 표준화한 값의 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {mercy} style = {{width: '90px', position:"absolute", marginTop: "0px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%"}}>1위 메르시</b>

        <img src = {lucio} style = {{width: '90px', position:"absolute", marginTop: "155px", marginLeft:"6px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "150px"}}>2위 루시우</b>

        <img src = {ana} style = {{width: '90px', position:"absolute", marginTop: "300px", marginLeft:"10px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "30%", marginTop: "300px"}}>3위 아나</b>

        </div>
        {four()}


        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default PositionSituHealer;