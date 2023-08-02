import React from 'react';
import styled from "@emotion/styled"
import teamprofileImage from "../images/teamprofile.png";
import outerboxImage from "../images/outerbox.png";
import langImage from "../images/lang.png";
import { useNavigate } from 'react-router-dom';

function Home() {
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

  return (
    <Outerbox>
      <Wrapper>
        <WrapperLeft>
          <WrapperLeftHeader>
            <Today>
              <TodayContents>TODAY </TodayContents>
              <TodayContents>0 </TodayContents>
              <TodayContents>| TOTAL </TodayContents>
              <TodayContents>12345</TodayContents>
            </Today>
          </WrapperLeftHeader>
          <WrapperLeftBody>
            <WrapperLeftBodyHeader>
              <GrayBox></GrayBox>
              <GrayLine1></GrayLine1>
            </WrapperLeftBodyHeader>
            <WrapperLeftBodyProfile>
              <ProfileLine>🙋🏻‍♂️   송규경</ProfileLine>
              <ProfileLine>🙋🏻‍♀️   백채은</ProfileLine>
              <ProfileLine>🙋🏻‍♀️   김하리</ProfileLine>
              <ProfileLine>🙋🏻‍♀️   최유진</ProfileLine>
            </WrapperLeftBodyProfile>
            <WrapperLeftBodyFooter>
              <WeatherTitle>오늘의 날씨</WeatherTitle>
              <WeatherContents>
                <WeatherContentsIcon>☀️</WeatherContentsIcon>
                <WeatherContentsTemp>33℃</WeatherContentsTemp>
              </WeatherContents>
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
              <RightBodyTopTitle>프론트엔드 개발자를 꿈꾸다</RightBodyTopTitle>
              <GrayLine2></GrayLine2>
              <FrontEndLanguageIcon></FrontEndLanguageIcon>
            </WrapperRightBodyTop>            
            <WrapperRightBodyBottom>
              <VisitorsComments></VisitorsComments>
            </WrapperRightBodyBottom>
          </WrapperRightBody>
        </WrapperRight>
        <Navigation>
          <NavigationItemHome id="navHome" onClick={() => {
            navigate("/");
            menuHome();
          }}>홈</NavigationItemHome>
          <NavigationItem id="navMember1" onClick={() => {
            navigate("/Member1");
            menuMember1();
          }}>송규경</NavigationItem>
          <NavigationItem id="navMember2" onClick={() => {
            navigate("/Member2");
            menuMember2();
          }}>백채은</NavigationItem>
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

export default Home;

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
  background-image: url(${teamprofileImage});
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
  justify-content: space-evenly;
  font-size: 13px;
  margin: 0px 0px 30px 0px;
`

const ProfileLine = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`

const WrapperLeftBodyFooter = styled.div`
  width: 148px; height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 12px;
`

const WeatherTitle = styled.div`
`

const WeatherContents = styled.div`
  width: 100%;
  height: 20px;
  display: flex; 
  justify-content: space-between;
  border: 1px solid black;
`

const WeatherContentsIcon = styled.div`
  width: 20px;
  height: 100%;
  margin-left: 5px;
  border: 1px solid black;
`

const WeatherContentsTemp = styled.div`
  width: 20px;
  height: 100%;
  margin-right: 15px;
  font-size: 12px;
  border: 1px solid black;
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
  padding: 12px 0;
`

const RightBodyTopTitle = styled.div`
  width: 92%;
  font-size: 16px;
  font-weight: 600;
  padding: 0 0 3px 0;
`

const GrayLine2 = styled.div`
  border-top: 0.9px solid gray;
  width: 92%;
  margin: 4px 0 15px 0;
` 

const FrontEndLanguageIcon = styled.div`
  width: 94%;
  height: 80%;
  background-image: url(${langImage});
  background-size: contain;
`

const WrapperRightBodyBottom = styled.div`
  width: 100%;
  height: 210px;
  border: 1px solid black;
`

const VisitorsComments = styled.div`
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
`

const NavigationItemHome = styled.div`
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
`