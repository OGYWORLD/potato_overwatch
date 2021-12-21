import React, { useState, useEffect } from 'react';
import { Modal, Button, Select } from 'antd';
import {TeamOutlined, PieChartOutlined, DownOutlined} from '@ant-design/icons';
import ReactDOM from 'react-dom';
import { Pie, Column } from '@ant-design/charts';
import "../stylesheet/Body.css"
import mei from "../image/mei_icon.png"
import ashe from "../image/ashe.png"
import reaper from "../image/reaper.png"
import symetra from "../image/symetra.png"

const { Option } = Select;

function PositionSituDealer() {
    
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

      {/* 준 피해량 파이차트 작성 코드*/}
      function one() {
        const data = [
            {
                type: '리퍼',
                value: 2.562823,
              },
              {
                type: '시메트라',
                value: 1.530427,
              },
              {
                type: '바스티온',
                value: 1.722019,
              },
              {
                type: '솔져76',
                value: 1.989190,
              },
              {
                type: '애쉬',
                value: 2.874501,
              },
              {
                  type: '캐서디',
                  value: 0.740477,
              },
              {
                type: '메이',
                value: 8.058559,
            },
            {
                type: '한조',
                value: 1.667204,
            },
            {
                type: '위도우 메이커',
                value: 0.203880,
            },
            {
                type: '정크랫',
                value: 0.754755,
            },
            {
                type: '솜브라',
                value: 0.077010,
            },
            {
                type: '토르비욘',
                value: 0.598432,
            },
            {
                type: '파라',
                value: 0.347082,
            },
            {
                type: '트레이서',
                value: 0.230112,
            },
            {
                type: '둠피스트',
                value: 0.000000,
            },
            {
                type: '에코',
                value: 0.186829,
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

        return <Pie {...config1} style = {{position:"absolute", marginLeft: "90%", width: "500px"}}/>
      }

      {/* 승리 횟수 파이차트 작성 코드*/}
      function third() {
        const data = [
            {
                type: '리퍼',
                value: 10,
              },
              {
                type: '시메트라',
                value: 9,
              },
              {
                type: '바스티온',
                value: 2,
              },
              {
                type: '솔져76',
                value: 2,
              },
              {
                type: '애쉬',
                value: 3,
              },
              {
                  type: '캐서디',
                  value: 1,
              },
            {
                type: '한조',
                value: 1,
            },
            {
                type: '정크랫',
                value: 1,
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
        return <Pie {...config3} style = {{position:"absolute", marginLeft: "90%", width: "500px"}}/>
      }

      {/* 추천 영웅 파이차트 작성 코드*/}
      function four() {
        const data = [
            {
                type: '리퍼',
                value: 19.607769,
              },
              {
                type: '시메트라',
                value: 14.697686,
              },
              {
                type: '바스티온',
                value: 9.812257,
              },
              {
                type: '솔져76',
                value: 8.055118,
              },
              {
                type: '애쉬',
                value: 10.257179,
              },
              {
                  type: '캐서디',
                  value: 3.042753,
              },
              {
                type: '메이',
                value: 9.514369,
            },
            {
                type: '한조',
                value: 4.819862,
            },
            {
                type: '위도우 메이커',
                value: 2.610747,
            },
            {
                type: '정크랫',
                value: 2.043183,
            },
            {
                type: '솜브라',
                value: 1.954226,
            },
            {
                type: '토르비욘',
                value: 2.651175,
            },
            {
                type: '파라',
                value: 0.548582,
            },
            {
                type: '트레이서',
                value: 1.149775,
            },
            {
                type: '둠피스트',
                value: 0.000000,
            },
            {
                type: '에코',
                value: 3.739761,
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
        return <Pie {...config4} style = {{position:"absolute", marginLeft: "90%", width: "500px"}}/>
      }

    
    return(
        <div style = {{fontFamily: "koverwatch"}}>
        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"40px", marginLeft:"10px" }}> 준 피해량 </b>
        <ex style = {{marginLeft: "140px", fontSize: "17px", color: "#787A69"}}>
        최고 준 피해량과 목숨 당 준 피해량의 공분산 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {mei} style = {{width: '70px', position:"absolute", marginTop: "10px", marginLeft:"15px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%"}}>1위 메이</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%"}}>최고 막은 피해량: 22,158</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%"}}>목숨 당 막은 피해량: 36,716</p>

        <img src = {ashe} style = {{width: '100px', position:"absolute", marginTop: "165px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "150px"}}>2위 애쉬</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "200px"}}>최고 막은 피해량: 7,459</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%", marginTop: "230px"}}>목숨 당 막은 피해량: 11,398</p>

        <img src = {reaper} style = {{width: '90px', position:"absolute", marginTop: "320px",}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "300px"}}>3위 리퍼</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "350px"}}>최고 막은 피해량: 5,182</p>
        <p style = {{position:"absolute", marginTop: "80px", marginLeft: "20%", marginTop: "380px"}}>목숨 당 막은 피해량: 15,170</p>
        </div>
        {one()}



        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 승리 횟수 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
            승리 횟수가 많은 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {reaper} style = {{width: '90px', position:"absolute", marginTop: "0px",}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%"}}>1위 리퍼</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%"}}>승리한 횟수: 10번</p>

        <img src = {symetra} style = {{width: '70px', position:"absolute", marginTop: "150px", marginLeft:"12px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "150px"}}>2위 시메트라</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "200px"}}>승리한 횟수: 9번</p>

        <img src = {ashe} style = {{width: '100px', position:"absolute", marginTop: "315px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "300px"}}>3위 애쉬</b>
        <p style = {{position:"absolute", marginTop: "50px", marginLeft: "20%", marginTop: "350px"}}>승리한 횟수: 3번</p>
        </div>
        {third()}



        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "600px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", position:"absolute", marginTop:"590px", marginLeft:"10px" }}> 추천 영웅 </b>
        <ex style = {{marginLeft: "120px", fontSize: "17px", color: "#787A69"}}>
        평균 치명타, 단독 처치, 연속 처치, 한 목숨 당 처치 횟수, 최고 처치 횟수, 한 목숨 당 피해량, 최고 피해량의 표준화한 값의 합이 제일 큰 순
        </ex>

        <div style={{marginLeft:"40px", fontSize: "20px"}}><br/>
        <img src = {reaper} style = {{width: '90px', position:"absolute", marginTop: "0px",}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%"}}>1위 리퍼</b>

        <img src = {symetra} style = {{width: '70px', position:"absolute", marginTop: "150px", marginLeft:"12px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "150px"}}>2위 시메트라</b>

        <img src = {ashe} style = {{width: '100px', position:"absolute", marginTop: "315px"}}/>
        <b style = {{position:"absolute", fontSize: "35px", marginLeft: "20%", marginTop: "300px"}}>3위 애쉬</b>
        </div>
        {four()}

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default PositionSituDealer;