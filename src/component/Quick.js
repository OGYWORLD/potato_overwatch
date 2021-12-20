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

        <div style = {{ position: "absolute", marginTop: "20px",}}>
        <Tabs tabPosition={tabPosition} size='large'>
          <TabPane tab="포지션 별 분석" key="1">
            <Position/>
          </TabPane>
          <TabPane tab="맵 별 분석" key="2">
            맵 별
          </TabPane>
        </Tabs>
        </div>

    </>
    )
}

export default Quick;