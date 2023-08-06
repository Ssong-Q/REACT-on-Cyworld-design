import { useEffect, useState } from 'react'; 
import styled from "@emotion/styled";
import teamprofileImage from "../images/teamprofile.png";
import langImage from "../images/lang.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home() {
  const [weather, setWeather] = useState({
    temp: 0,
    icon: '',
    location: '',
  });

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=40c4bb62df9d0b4891135b64068b1517`;
    axios.get(url)
      .then((responseData) => {
        const data = responseData.data;
        setWeather({ 
          temp: data.main.temp,
          icon: data.weather[0].icon,
          location: data.name,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  
  const navigate = useNavigate();
  const savedData = localStorage.getItem("savedComment");
  const initialComArray = savedData ? JSON.parse(savedData) : [];

  const [comment, setComment] = useState("");
  const [nickname, setNickname] = useState("");
  const [comArray, setComArray] = useState(initialComArray);
  
  const onChangeComment = function (event) {
    setComment(event.target.value);
  };

  const onChangeNickname = function (event) {
    setNickname(event.target.value);
  }

  const onClickAddComment = function () {
    if(window.confirm("일촌평을 남기시겠습니까?")) {
      if (comment === "") {
        alert("내용을 입력해주세요.")
      } else {
        if(comArray.length === 5) {
          comArray.shift();
        }
        setComArray([...comArray, [nickname, comment]]);
        setComment("");
        setNickname("");

        localStorage.setItem("savedComment", JSON.stringify([...comArray, [nickname, comment]]));
      }
    }
  };

  const onClickClearComment = function () {
    if(window.confirm("모든 일촌평을 지우시겠습니까?")) {
      setComArray([]);
      localStorage.removeItem("savedComment");
    }
  }

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
    <Wrapper>
      <WrapperLeft>
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
              <WeatherContentsLocation>{weather.location}</WeatherContentsLocation>
              <WeatherContentsIcon>
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon" />
              </WeatherContentsIcon>
              <WeatherContentsTemp>{Math.round(weather.temp)}℃</WeatherContentsTemp>
            </WeatherContents>
          </WrapperLeftBodyFooter>
        </WrapperLeftBody>
      </WrapperLeft>
      <WrapperRight>
        <WrapperRightBody>
          <WrapperRightBodyTop>
            <RightBodyTopTitle>프론트엔드 개발자를 꿈꾸다</RightBodyTopTitle>
            <GrayLine2></GrayLine2>
            <RightBodyTopSubtitle>
              우리, 힘들어도 포기하지말아요 <br />
                꾸준하면 끝까지 갈 수 있어요
            </RightBodyTopSubtitle>
            <FrontEndLanguageIcon></FrontEndLanguageIcon>
          </WrapperRightBodyTop>            
          <WrapperRightBodyBottom>
            <VisitorsCommentsTitle>What friends say</VisitorsCommentsTitle>
            <GrayLine3></GrayLine3>
            <VisitorsComments>
              <ul style={{marginLeft: "10px", minHeight: "130px"}}>
              {comArray.filter((item,index) => {
                return index < 5;
              }).map((item) => {
                return (
                  <FriendsComments id="comments">{item[1]}      ({item[0]})</FriendsComments>
                )
              })}
              </ul>
              <CommentsCreate>
                <CommentNicknameInput value={nickname} onChange={onChangeNickname} placeholder='닉네임'></CommentNicknameInput>
                <CommentsInput value={comment} onChange={onChangeComment} placeholder='내용을 입력해 주세요' />
                <CommentsButton onClick={onClickAddComment}>남기기</CommentsButton>
                <CommentsButton onClick={onClickClearComment}>Clear</CommentsButton>
              </CommentsCreate>
            </VisitorsComments>
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
  )
}

export default Home;

const Wrapper = styled.div`
  width: 808px;
  height: 100%;
  display:flex;
  flex-direction: row;
  padding: 0px 0px 0px 32px;
`

const WrapperLeft = styled.div`
  width: 208px;
  height: 442px;
  display: flex;
  flex-direction: column;
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
  margin: 0px 0px 33px 0px;
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
font-weight: 500;
`

const WeatherContents = styled.div`
  width: 100%;
  height: 25px;
  display: flex; 
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #55B2E4;
  border-radius: 3px;
  color: #55B2E4;
`

const WeatherContentsIcon = styled.div`
  position: relative;
  top: 2.5px;
`

const WeatherContentsLocation = styled.div`
  font-size: 12px;
  margin-left: 3px;
  font-weight: 600;
`

const WeatherContentsTemp = styled.div`
  width: 30px;
  margin-right: 3px;
  font-size: 12px;
  font-weight: 600;
`

const WrapperRight = styled.div`
  width: 524px;
  height: 442px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 5px;
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
  align-items: center;
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
  margin: 4px 0 10px 0;
` 

const RightBodyTopSubtitle = styled.div`
  width: 92%;
  font-size: 12px;
  font-weight: 450;
  text-align: left;
  margin-bottom: 3px;
`

const FrontEndLanguageIcon = styled.div`
  width: 94%;
  height: 80%;
  background-image: url(${langImage});
  background-size: 455px 120px;
`

const WrapperRightBodyBottom = styled.div`
  width: 95%;
  height: 210px;
  padding: 5px 0;
`

const VisitorsCommentsTitle = styled.div`
  color: #55B2E4;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 6px;
`

const GrayLine3 = styled.div`
  border-top: 0.9px dashed gray;
  margin: 4px 0 4px 0;
` 

const VisitorsComments = styled.div`
  display: flex;
  flex-direction: column;
`

const FriendsComments = styled.li`
  font-size: 10px;
  margin: 5px 0;
  border-bottom: 0.9px dotted gray;
  padding: 2px 0;
  &::marker {
    color: gray;
  }
`

const CommentsCreate = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
  margin-top: 5px;
`

const CommentNicknameInput = styled.input`
  padding: 1px 2px;
  width: 20%;
  margin-right: 5px;

  &::placeholder{
    color: gray;
    font-size: 8px;
  }
`

const CommentsInput = styled.input`
  padding: 1px 4px;
  width: 62%;

  &::placeholder{
    color: gray;
    font-size: 8px;
  }
`

const CommentsButton = styled.button`
  margin-left: 5px;
  font-size: 10px;
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
  margin-bottom: 5px;
`
