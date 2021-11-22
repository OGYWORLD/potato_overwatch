import React from 'react';
import "../stylesheet/Header.css"
import logo from "../image/logo.png"
import mercy from "../image/mercy.png"
import bg from "../image/bg.gif"

import mercy_icon from "../image/mercy_icon.png"
import reaper_icon from "../image/reaper_icon.png"
import zarya_icon from "../image/zarya_icon.png"
import battlent from "../image/battlenet.png"
import ov from "../image/overwatch.png"

import { Tag, Popover, Input, Space, Button } from 'antd';

const { Search } = Input;
  
const onSearch = value => console.log(value);


const zarya_content = (
    <div>
      <p>총 플레이 시간: 20시간</p>
      <p>메달 개수: </p>
    </div>
);

  const mercy_content = (
    <div>
      <p>총 플레이 시간: 20시간</p>
      <p>메달 개수: </p>
    </div>
);

  const reaper_content = (
    <div>
      <p>총 플레이 시간: 20시간</p>
      <p>메달 개수: </p>
    </div>
);

function Header() {
    return (
        <>
        <div style = {{backgroundColor: '#222222', width: '100vw', height: '35vh'}}>
        <b style = {{fontSize: "6em", color: "white", marginLeft:"23vw", marginTop:"5%", position:"absolute", float: "left", zIndex: "1"}} className = "title">OverWatch</b>
        <b style = {{fontSize: "6em", color: "white", marginLeft:"23vw", marginTop:"9%", position:"absolute", float: "left", zIndex: "1"}} className = "title">전적 분석 사이트</b>
            <img src = {logo} style = {{width: '21.5%', height: '30%', paddingLeft: "3.5%", paddingTop: "2%", float: "left", position:"absolute"}}/>
            <img src = {bg} style = {{marginLeft: "37%", position:"absolute", opacity: "0.2"}}/>
            <b style = {{fontSize: "5em", color: "#D18515", marginLeft:"61%", marginTop:"12.5%", float: "left", position:"absolute", fontFamily: "koverwatch"}} className = "text-color">Best Hero</b>

            <Space direction="vertical">
            <Search placeholder="닉네임#배틀태그" onSearch={onSearch} style={{ width: "16.7%", position:"absolute", marginLeft:"4%", marginTop:"13.6%", }} />
            </Space>

            <Button icon={<img src={battlent} style = {{width: "16%", height: "100%", marginLeft: "70%", position:"absolute", }} />} href="https://kr.battle.net/login/ko/?ref=https://kr.battle.net/support/ko/&app=support"
            style = {{width: "8%", position:"absolute", marginLeft:"23.2%", marginTop:"14.3%", background: "#017aff"}}>
            <b style = {{marginRight: "17%", color: "white",}}>내 배틀태그 확인하기</b>
            </Button>

            <Button icon={<img src={ov} style = {{width: "13%", height: "80%", marginLeft: "77%", marginTop: "1%",position:"absolute", }} />} href="https://playoverwatch.com/ko-kr/"
            style = {{width: "8%", position:"absolute", marginLeft:"32%", marginTop:"14.3%", background: "white"}}>
            <b style = {{marginRight: "16%", color: "#222222"}}>오버워치 홈페이지 접속</b>
            </Button>

            <Popover content={zarya_content} title="자리야(Zarya) / 돌격(Tanker)">
            <img src = {zarya_icon} style = {{position:"absolute", marginLeft:"70.7%", marginTop:"12.5%", float: "left", height: "8%"}} />
            </Popover>

            <Popover content={mercy_content} title="메르시(Mercy) / 지원(Healer)">
            <img src = {mercy_icon} style = {{position:"absolute", marginLeft:"75.7%", marginTop:"12.5%", float: "left", height: "8%"}} />
            </Popover>

            <Popover content={reaper_content} title="리퍼(reaper) / 공격(Dealer)">
            <img src = {reaper_icon} style = {{position:"absolute", marginLeft:"80.7%", marginTop:"12.5%", float: "left", height: "8.3%"}} />
            </Popover>
            
            <b style = {{fontSize: "2.3em", color: "#D18515", marginLeft:"71.2%", marginTop:"5%", position:"absolute", float: "left"}} className = "title">닉네임 #배틀태그</b>
            <b style = {{fontSize: "5.6em", color: "white", marginLeft:"71.2%", marginTop:"6.5%", position:"absolute", float: "left"}} className = "text-stroke">누룽지#12345
            </b>
            <hr style = {{height: "0.2s%", width: "15.5%", marginLeft: "68.5%", marginTop: "10.5%", backgroundColor: "#666A7B", position:"absolute"}}/>
            <img src = {mercy} style = {{marginLeft:"85%", marginTop:"5%", position:"absolute", width: "9%", height: "21%"}}/>
        </div>
        <div style = {{backgroundColor: '#F8E064', width: '100%', height: '1.5vh'}}></div>
        <div style = {{backgroundColor: '#D18515', width: '100%', height: '2.5vh'}}></div>
        <br/>
        </>
    )
  }
  
  export default Header;