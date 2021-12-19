import React, { useState } from 'react';
import { Modal, Button, Select } from 'antd';
import {TeamOutlined, PieChartOutlined, DownOutlined} from '@ant-design/icons';
import "../stylesheet/Body.css"

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
      
    return(
        <div style = {{fontFamily: "koverwatch"}}>
        <PieChartOutlined style = {{fontSize: "30px", marginLeft: "40px", marginTop: "50px"}}/>
        <b style = {{fontFamily: "koverwatch", fontSize: "30px", }}> 막은 피해량 </b>

        <Button type="primary" onClick={showModal} style = {{marginLeft: "30px", position:"absolute", marginTop: "49px", fontSize:"17px", height: "35px"}}>
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

export default PositionSituTanker;