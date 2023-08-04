import React from 'react'
import styled from "@emotion/styled"
import outerboxImage from "../images/outerbox.png";
import myphotoImage from "../images/chaeeun.jpg";
import { useNavigate } from 'react-router-dom';

function Member2() {
  const navigate = useNavigate();

  const menuHome = () => {
    document.getElementById("navHome").style = "color: black; background-color: white;"
    document.getElementById("navMember1").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember2").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember3").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember4").style = "color: white; background-color: #298eb5;"
  }

  const menuMember1 = () => {
    document.getElementById("navHome").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember1").style = "color: black; background-color: white;"
    document.getElementById("navMember2").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember3").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember4").style = "color: white; background-color: #298eb5;"
  }

  const menuMember2 = () => {
    document.getElementById("navHome").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember1").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember2").style = "color: black; background-color: white;"
    document.getElementById("navMember3").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember4").style = "color: white; background-color: #298eb5;"
  }

  const menuMember3 = () => {
    document.getElementById("navHome").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember1").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember2").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember3").style = "color: black; background-color: white;"
    document.getElementById("navMember4").style = "color: white; background-color: #298eb5;"
  }
  const menuMember4 = () => {
    document.getElementById("navHome").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember1").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember2").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember3").style = "color: white; background-color: #298eb5;"
    document.getElementById("navMember4").style = "color: black; background-color: white;"
  }

  const savedRandomToday = localStorage.getItem("randomToday");
  const initialRandomToday = JSON.parse(savedRandomToday);
  const savedRandomTotal = localStorage.getItem("randomTotal");
  const initialRandomTotal = JSON.parse(savedRandomTotal);

  return (
    <Outerbox>
      <Wrapper>
        <WrapperLeft>
          <WrapperLeftHeader>
            <Today>
              <TodayContents>TODAY </TodayContents>
              <TodayContents>{initialRandomToday} </TodayContents>
              <TodayContents>| TOTAL </TodayContents>
              <TodayContents>{initialRandomTotal}</TodayContents>
            </Today>
          </WrapperLeftHeader>
          <WrapperLeftBody>
            <WrapperLeftBodyHeader>
              <GrayBox></GrayBox>
              <GrayLine1></GrayLine1>
            </WrapperLeftBodyHeader>
            <WrapperLeftBodyProfile>
              <ProfileLine>😊   백채은</ProfileLine>
              <ProfileLine>📧   codms8234@gmail.com</ProfileLine>
              <ProfileLine>📖   instagram.com/100_c_rlo/</ProfileLine>
              <ProfileLine>✨   ISFP</ProfileLine>
            </WrapperLeftBodyProfile>
            <WrapperLeftBodyFooter>
              <MoodTitle>오늘의 기분</MoodTitle>
              <MoodContents>
                <MoodContentsValue>기쁨 😁</MoodContentsValue>
                <MoodContentsValue>슬픔 😢</MoodContentsValue>
                <MoodContentsValue>화남 😡</MoodContentsValue>
                <MoodContentsValue>생각 🤔</MoodContentsValue>
              </MoodContents>
            </WrapperLeftBodyFooter>
          </WrapperLeftBody>
        </WrapperLeft>
        <WrapperRight>
          <WrapperRightHeader>
            <WrapperRightHeaderTitle>we are team FIVE welcome GUYS</WrapperRightHeaderTitle>
            <WrapperRightHeaderSetting>SpartaCodingClub</WrapperRightHeaderSetting>
          </WrapperRightHeader>
          <WrapperRightBody>
            <WrapperRightBodyTop>
              <RightBodyTopTitle>백채은 님의 미니홈피</RightBodyTopTitle>
              <GrayLine2></GrayLine2>
              <RightBodyTopContents>
                <RightBodyTopContentsDescription>
                <div style={{fontSize: '13px', fontWeight: 500, marginBottom: '5px', marginTop: '2px'}}>장점</div>
                  1. 타인의 이야기를 귀 기울여 들어줘요.<br />
                  2. 새로운 도전에 대해 두려움을 못 느끼는 편이에요.<br />
                  3. 단순한 편이라 나쁜 일도 쉽게 잊어요.<br />
                  4. 하고자 하는 일에 있어서는 책임감을 가지고 해결해내려 해요.<br />
                <div style={{fontSize: '13px', fontWeight: 500, marginBottom: '5px', marginTop: '5px'}}>단점</div>
                  1. 어려운 일에 대한 부담을 쉽게 느껴요.<br />
                  2. 타인에게 도움을 구하는 것이 아닌 혼자 해결하려고 해요.<br />
                  3. 인간관계에 있어 적극적이지 못해요.<br />
                  4. 계획적이지 못해요. <br />
                <div style={{fontSize: '13px', fontWeight: 500, marginBottom: '5px', marginTop: '5px'}}>협업 과정에서 나만의 스타일</div>
                  - 먼저 제안하는 것이 아닌 타인의 의견을 듣고 제 의견을 덧붙이는 편이에요.<br />
                  - 문제를 오래 끌어가는 것이 아닌 부딪혀가며 해결하고자 하는 편이에요.<br />
                </RightBodyTopContentsDescription>
              </RightBodyTopContents>
            </WrapperRightBodyTop>            
            <WrapperRightBodyBottom>
              <WrapperRightBodyBottomTitle>
                <TitleTitle>나만의 플레이리스트</TitleTitle>
                <TitleSubtitle>TODAY CHOICE</TitleSubtitle>
              </WrapperRightBodyBottomTitle>
              <WrapperRIghtBodyBottomTable>
                <tr style={{width: '100%', height: '20px'}}>
                  <TableHeader style={{width: "8%", textAlign: "center"}}><input type="checkbox" name="" id="" style={{width: "12px", height: "12px"}}/></TableHeader>
                  <TableHeader style={{width: "12%", textAlign: "center"}}>번호</TableHeader>
                  <TableHeader style={{width: "55%", textAlign: "center"}}>곡명</TableHeader>
                  <TableHeader style={{width: "25%", textAlign: "center"}}>아티스트</TableHeader>
                </tr>
                <tr style={{width: '100%', height: '20px'}}>
                  <TableData style={{width: "8%", textAlign: "center"}}><input type="checkbox" name="" id="" style={{width: "12px", height: "12px"}}/></TableData>
                  <TableData style={{width: "12%", textAlign: "center"}}>1</TableData>
                  <TableData style={{width: "55%", textAlign: "left"}}></TableData>
                  <TableData style={{width: "25%", textAlign: "left"}}></TableData>
                </tr>
                <tr style={{width: '100%', height: '20px'}}>
                  <TableData style={{width: "8%", textAlign: "center"}}><input type="checkbox" name="" id="" style={{width: "12px", height: "12px"}}/></TableData>
                  <TableData style={{width: "12%", textAlign: "center"}}>2</TableData>
                  <TableData style={{width: "55%", textAlign: "left"}}></TableData>
                  <TableData style={{width: "25%", textAlign: "left"}}></TableData>
                </tr>
                <tr style={{width: '100%', height: '20px'}}>
                  <TableData style={{width: "8%", textAlign: "center"}}><input type="checkbox" name="" id="" style={{width: "12px", height: "12px"}}/></TableData>
                  <TableData style={{width: "12%", textAlign: "center"}}>3</TableData>
                  <TableData style={{width: "55%", textAlign: "left"}}></TableData>
                  <TableData style={{width: "25%", textAlign: "left"}}></TableData>
                </tr>
                <tr style={{width: '100%', height: '20px'}}>
                  <TableData style={{width: "8%", textAlign: "center"}}><input type="checkbox" name="" id="" style={{width: "12px", height: "12px"}}/></TableData>
                  <TableData style={{width: "12%", textAlign: "center"}}>4</TableData>
                  <TableData style={{width: "55%", textAlign: "left"}}></TableData>
                  <TableData style={{width: "25%", textAlign: "left"}}></TableData>
                </tr>
                <tr style={{width: '100%', height: '20px'}}>
                  <TableData style={{width: "8%", textAlign: "center"}}><input type="checkbox" name="" id="" style={{width: "12px", height: "12px"}}/></TableData>
                  <TableData style={{width: "12%", textAlign: "center"}}>5</TableData>
                  <TableData style={{width: "55%", textAlign: "left"}}></TableData>
                  <TableData style={{width: "25%", textAlign: "left"}}></TableData>
                </tr>
              </WrapperRIghtBodyBottomTable>
            </WrapperRightBodyBottom>
          </WrapperRightBody>
        </WrapperRight>
        <Navigation>
          <NavigationItem id="navHome" onClick={() => {
            navigate("/");
            menuHome();
          }}>홈</NavigationItem>
          <NavigationItem id="navMember1" onClick={() => {
            navigate("/Member1");
            menuMember1();
          }}>송규경</NavigationItem>
          <NavigationItemMember2 id="navMember2" onClick={() => {
            navigate("/Member2");
            menuMember2();
          }}>백채은</NavigationItemMember2>
          <NavigationItem id="navMember3" onClick={() => {
            navigate("/Member3");
            menuMember3();
          }}>김하리</NavigationItem>
          <NavigationItem id="navMember4" onClick={() => {
            navigate("/Member4");
            menuMember4();
          }}>최유진</NavigationItem>
        </Navigation>
      </Wrapper>
    </Outerbox>
  )
}

export default Member2;

const Outerbox = styled.div`
  width: 808px;
  height: 544px;
  background-image: url(${outerboxImage});
`

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  padding: 32px 0px 0px 32px;
`

const WrapperLeft = styled.div`
  width: 208px;
  height: 472px;
  display: flex;
  flex-direction: column;
`

const WrapperLeftHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Today = styled.div`
  font-size: 9px;
`

const TodayContents = styled.span`
`

const WrapperLeftBody = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
`

const WrapperLeftBodyHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const GrayBox = styled.div`
  background-image: url(${myphotoImage});
  background-size: 148px 133px;
  width: 148px;
  height: 133px;
`

const GrayLine1 = styled.div`
  border-top: 1px dotted black;
  margin: 12px 0px;
` 

const WrapperLeftBodyProfile = styled.div`
  width: 148px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 30px 0px;
`

const ProfileLine = styled.div`
  font-size: 5px;
  font-weight: 400;
  margin: 4px 0;
`

const WrapperLeftBodyFooter = styled.div`
  width: 148px; 
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 12px;
  color: gray;
`

const MoodTitle = styled.div`
`

const MoodContents = styled.select`
  width: 100%;
  border: 1px solid gray;
`

const MoodContentsValue = styled.option`
  width: inherit;
  padding: 2px 10px 2px 5px;
  border: 0 none;
  font: gray;
`

const WrapperRight = styled.div`
  width: 524px;
  height: 472px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 5px;
`

const WrapperRightHeader = styled.div`
  width: 510px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 14px;
  margin: 0 0 5px 0;
`

const WrapperRightHeaderTitle = styled.div`
  color: #55B2E4;
  font-size: 16px;
  font-weight: 600;
`

const WrapperRightHeaderSetting = styled.div`
  color: #55B2E4;
  font-size: 9px;
`

const WrapperRightBody = styled.div`
  width: 510px;
  height: 445px;
  border: 1px solid gray;
  border-radius: 15px;
  background-color: white;  
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  padding: 10px 10px;
`

const WrapperRightBodyTop = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px 0;
  margin-bottom: 40px;
`

const RightBodyTopTitle = styled.div`
  width: 93%;
  font-size: 11px;
  font-weight: 600;
  padding: 0 0 3px 0;
`

const GrayLine2 = styled.div`
  border-top: 0.9px solid gray;
  width: 93%;
  margin: 2px 0 6px 0;
` 

const RightBodyTopContents = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  flex-direction: column;
  font-size: 8px;
  padding: 0 5px;
`

const RightBodyTopContentsDescription = styled.div`
  line-height: 1.3;
`

const WrapperRightBodyBottom = styled.div`
  width: 100%;
  height: 190px;
`

const WrapperRightBodyBottomTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px 10px;
`

const TitleTitle = styled.div`
  color: #55B2E4;
  font-size: 12px;
  font-weight: 700;
`

const TitleSubtitle = styled.div`
  font-size: 7px;
  font-weight: 500;
  padding-left: 5px;
`

const WrapperRIghtBodyBottomTable = styled.table`
  width: 100%;
  margin-top: 5px;
  border-spacing: 0;
`

const TableHeader = styled.th`
  background-color: #eeeeee;
  font-size: 10px;
  font-weight: 700;
  color: #999999;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
  padding-top: 3px;
`

const TableData = styled.td`
  border-bottom: 1px dotted #cbcbcc;
  font-size: 10px;
  font-weight: 400;
  color: #0F465E;
  padding-top: 4px;
`

const Navigation = styled.div`
  width: 62px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 774px;
  top: 110px;
`

const NavigationItem = styled.div`
  width: 60px;
  height: 30px;
  background-color: #298eb5;
  border: 1px solid black;
  color: white;
  border-radius: 0 10px 10px 0;
  font-size: 10px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-bottom: 5px;
`

const NavigationItemMember2 = styled.div`
  background-color: white;
  color: black;
  width: 60px;
  height: 30px;
  border: 1px solid black;
  border-radius: 0 10px 10px 0;
  font-size: 10px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-bottom: 5px;
`