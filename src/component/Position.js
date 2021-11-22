import React, { useState } from 'react';
import { Modal, Button, Select } from 'antd';
import {TeamOutlined, PieChartOutlined, DownOutlined} from '@ant-design/icons';

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
        <TeamOutlined  style = {{fontSize: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "50px"}}> 포지션 별 분석</b>

        <Select defaultValue="돌격군(Tanker)" style={{ width: 140, fontFamily: "koverwatch", fontSize: "20px", marginLeft: "20px" }} onChange={handleChange}>
        <Option value="돌격군(Tanker)">돌격군(Tanker)</Option>
        <Option value="공격군(Dealer)" >공격군(Dealer)</Option>
        <Option value="지원군(Healer)" >지원군(Dealer)</Option>
        </Select>

        </div>

        {
            // 돌격군 선택 시
            (con == "돌격군(Tanker)") && ( 
                <div style = {{fontFamily: "koverwatch"}}>
                <PieChartOutlined style = {{fontSize: "40px", marginLeft: "40px", marginTop: "50px"}}/>
                <b style = {{fontFamily: "koverwatch", fontSize: "40px", }}> 막은 피해량 </b>
                <Button type="primary" onClick={showModal} style = {{marginLeft: "30px", position:"absolute", marginTop: "52px", fontSize:"20px", height: "40px"}}>
                분석 세부 내용
                </Button>
                <Modal title="분석 세부 내용" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style = {{fontFamily: "koverwatch"}}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </Modal>
                </div>
                )
        }

        {
            // 공격군 선택 시
            (con == "공격군(Dealer)") && ( 
                <div>
                <PieChartOutlined style = {{fontSize: "40px", marginLeft: "40px", marginTop: "50px"}}/>
                <b style = {{fontFamily: "koverwatch", fontSize: "40px"}}> 준 피해량 </b>
                </div>)
        }

        {
            // 지원군 선택 시
            (con == "지원군(Healer)") && ( 
                <div>
                <PieChartOutlined style = {{fontSize: "40px", marginLeft: "40px", marginTop: "50px"}}/>
                <b style = {{fontFamily: "koverwatch", fontSize: "40px"}}> 평균 치유량 </b>
                </div>)
        }
        </>
    )
}

export default Position;