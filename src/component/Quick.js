import React from 'react';
import 'antd/dist/antd.css';
import Layout from 'antd/lib/layout'
import { Menu, Tabs, Radio, Space } from 'antd';
import "../stylesheet/Quick.css"
import Position from "./Position"

const { TabPane } = Tabs;


function Quick() {
    const state = {
        tabPosition: 'left',
      };

      const { tabPosition } = state;

    return (
        <>
        <p style = {{fontFamily: "koverwatch", fontSize: "30px", color: "#656565", position:"absolute", marginLeft: "86%"}}> 빠른 대전 총 플레이 시간</p>
        <p style = {{fontFamily: "koverwatch", fontSize: "150px", color: "#222222", position:"absolute", marginTop: "30px", marginLeft: "87%"}}>169</p>
        <p style = {{fontFamily: "koverwatch", fontSize: "30px", color: "#656565", position:"absolute", marginTop: "155px", marginLeft: "94%"}}>시간</p>

        <div style = {{ position: "absolute", marginTop: "1%"}}>
        <Tabs tabPosition={tabPosition} size='large'>
          <TabPane tab="포지션 별 분석" key="1">
            <Position/>
          </TabPane>
          <TabPane tab="상황 별 분석" key="2">
            상황 별
          </TabPane>
          <TabPane tab="맵 별 분석" key="3">
            맵 별
          </TabPane>
        </Tabs>
        </div>


    </>
    )
}

export default Quick;