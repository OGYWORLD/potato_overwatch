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
    {/* 경쟁전 코드 (원래 탭을 여러 개 구성하려 했으나 하지 않음)*/}
        <div style = {{ position: "absolute", marginTop: "20px",}}>
        <Position/>
        </div>

    </>
    )
}

export default Quick;