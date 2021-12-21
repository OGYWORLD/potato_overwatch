import React, { useState } from 'react';
import { Modal, Button, Select } from 'antd';
import {TeamOutlined, PieChartOutlined, DownOutlined} from '@ant-design/icons';
import "../stylesheet/Body.css"

import PositionSituTanker from './PositionSituTanker';
import PositionSituDealer from './PositionSituDealer';
import PositionSituHealer from './PositionSituHealer';

const { Option } = Select;

function Position() {

    const [con, setCon] = useState("돌격군(Tanker)");

    function handleChange(value) {
        console.log(`selected ${value}`);
        console.log(value);
        setCon(value);
      }

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

    return(
        <>
        <div style = {{marginLeft:"30px"}}>
        <TeamOutlined  style = {{fontSize: "40px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px"}}> 포지션 별 분석</b>
        <Select defaultValue="돌격군(Tanker)" style={{ width: "120px", fontFamily: "koverwatch", fontSize: "16px", marginLeft: "20px" }} onChange={handleChange}>

        <Option value="돌격군(Tanker)">돌격군(Tanker)</Option>
        <Option value="공격군(Dealer)" >공격군(Dealer)</Option>
        <Option value="지원군(Healer)" >지원군(Healer)</Option>
        </Select>

        </div>

        {
            // 돌격군 선택 시
            (con == "돌격군(Tanker)") && ( 
                <PositionSituTanker/>
                )
        }

        {
            // 공격군 선택 시
            (con == "공격군(Dealer)") && ( 
                <div>
                <PositionSituDealer/>
                </div>)
        }

        {
            // 지원군 선택 시
            (con == "지원군(Healer)") && ( 
                <div>
                <PositionSituHealer/>
                </div>)
        }
        </>
    )
}

export default Position;