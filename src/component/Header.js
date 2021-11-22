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
        <div style = {{backgroundColor: '#222222', width: '100%', height: '430px'}}>
        <img src = {bg} style = {{marginLeft: "36%", position:"absolute", opacity: "0.2"}}/>


        <a style={{marginLeft: "17%"}}>
        <b style = {{fontSize: "65px", color: "white", marginLeft:"360px", marginTop:"160px", position:"absolute", float: "left", zIndex: "1"}} className = "title">OverWatch</b>
        <b style = {{fontSize: "65px", color: "white", marginLeft:"360px", marginTop:"240px", position:"absolute", float: "left", zIndex: "1"}} className = "title">전적 분석 사이트</b>
            <img src = {logo} style = {{width: '350px', height: '280px', marginTop: "98px", float: "left", position:"absolute"}}/>

            <Space direction="vertical">
            <Search placeholder="닉네임#배틀태그" onSearch={onSearch} style={{ width: "360px", position:"absolute", marginLeft:"10px", marginTop:"5px", }} />
            </Space>

            <Button icon={<img src={battlent} style = {{width: "30px", height: "30px", marginLeft: "140px", position:"absolute", }} />} href="https://kr.battle.net/login/ko/?ref=https://kr.battle.net/support/ko/&app=support"
            style = {{width: "200px", position:"absolute", marginLeft:"10px", marginTop:"365px", background: "#017aff"}}>
            <b style = {{marginRight: "25px", color: "white",}}>내 배틀태그 확인하기</b>
            </Button>

            <Button icon={<img src={ov} style = {{width: "25px", height: "25px", marginLeft: "152px", marginTop: "3px",position:"absolute", }} />} href="https://playoverwatch.com/ko-kr/"
            style = {{width: "200px", position:"absolute", marginLeft:"250px", marginTop:"365px", background: "white"}}>
            <b style = {{marginRight: "25px", color: "#222222"}}>오버워치 홈페이지 접속</b>
            </Button>
            </a>

            <a style={{marginLeft: "35%"}}>

            <b style = {{fontSize: "40px", color: "#D18515", marginLeft:"0px", marginTop:"350px", float: "left", position:"absolute", fontFamily: "koverwatch"}} className = "text-color">Best Hero</b>
                <Popover content={zarya_content} title="자리야(Zarya) / 돌격(Tanker)">
                <img src = {zarya_icon} style = {{position:"absolute", marginLeft:"140px", marginTop:"340px", float: "left", height: "70px"}} />
                </Popover>
    
                <Popover content={mercy_content} title="메르시(Mercy) / 지원(Healer)">
                <img src = {mercy_icon} style = {{position:"absolute", marginLeft:"220px", marginTop:"340px", float: "left", height: "70px"}} />
                </Popover>
    
                <Popover content={reaper_content} title="리퍼(reaper) / 공격(Dealer)">
                <img src = {reaper_icon} style = {{position:"absolute", marginLeft:"300px", marginTop:"340px", float: "left", height: "75px"}} />
                </Popover>
                
                <b style = {{fontSize: "20px", color: "#D18515", marginLeft:"130px", marginTop:"170px", position:"absolute", float: "left"}} className = "title">닉네임 #배틀태그</b>
                <b style = {{fontSize: "60px", color: "white", marginLeft:"130px", marginTop:"200px", position:"absolute", float: "left"}} className = "text-stroke">누룽지#12345
                <hr style = {{height: "4px", width: "250px", marginLeft: "0px", marginTop: "0px", backgroundColor: "#666A7B", position:"absolute"}}/>
                </b>
                <img src = {mercy} style = {{marginLeft:"400px", marginTop:"180px", position:"absolute", width: "170px"}}/>

            </a>



             </div>

        <div style = {{backgroundColor: '#F8E064', width: '100%', height: '20px'}}></div>
        <div style = {{backgroundColor: '#D18515', width: '100%', height: '30px'}}></div>
        <br/>
        </>
    )
  }
  
  export default Header;