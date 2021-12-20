import React from 'react';
import Quick from "./Quick"
import Competition from "./Competition"
import { Tag, Tabs } from 'antd';
import "../stylesheet/Body.css"
import { ForwardOutlined, TrophyOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Body() {

    return(
        <>
        <Tabs defaultActiveKey="1" onChange={callback} className="left-margin" size = "large">
        <TabPane tab={<span><ForwardOutlined /> 빠른대전</span>} key="1" style={{color: "black"}}>
        <Quick/>
        </TabPane>
        <TabPane tab={<span><TrophyOutlined />경쟁전</span>} key="2">
        <Competition/>
        </TabPane>
        </Tabs>
        </>
    )
}

export default Body;