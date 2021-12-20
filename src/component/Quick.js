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
        <Position/>
        </div>

    </>
    )
}

export default Quick;