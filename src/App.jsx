import reset from './style/reset';
import { Global } from '@emotion/react';
import styled from "@emotion/styled";
import Router from "./shared/Router";
import backgroundImage from "./images/background.png";
import outerboxImage from "./images/outerbox.png";
import infoImage from "./images/etcImage.png";
import { useState } from 'react';
import musicOnAndOn from "./audio/OnAndOn.mp3";
import musicEarlySummer from "./audio/EarlySummer.mp3";
import musicBachPrelude from "./audio/BachPrelude.mp3";

function App() {

  const [audioplay, setAudioPlay] = useState(musicEarlySummer);

  const onChangePlayList = function (event) {
    if (event.target.value === "EarlySummer") {
      setAudioPlay(musicEarlySummer);
    } else if (event.target.value === "BachPrelude") {
      setAudioPlay(musicBachPrelude);
    } else if (event.target.value === "OnAndOn") {
      setAudioPlay(musicOnAndOn);
    }

  }

  const getRandomToday = function() {
    const randomToday = Math.floor((Math.random() + 1) * 10);
    return randomToday;
  }

  const getRandomTotal = function(min, max) {
    const randomTotal = Math.floor(Math.random() * (max - min) + min);
    return randomTotal;
  }

  return (
    <>
      <Global styles={reset}/>
      <Background>
        <Outerbox>
          <HeaderWrapper>
            <HeaderWrapperLeft>
              <Today>
                <TodayContents>TODAY </TodayContents>
                <TodayContents>{getRandomToday()} </TodayContents>
                <TodayContents>| TOTAL </TodayContents>
                <TodayContents>{getRandomTotal(1000, 5000)}</TodayContents>
              </Today>
            </HeaderWrapperLeft>
            <HeaderWrapperRight>
              <WrapperRightHeaderTitle>we are team FIVE welcome GUYS</WrapperRightHeaderTitle>
              <WrapperRightHeaderSetting>SpartaCodingClub</WrapperRightHeaderSetting>
            </HeaderWrapperRight>
          </HeaderWrapper>
          <Router />
        </Outerbox>
        <SideContents>
          <HomeBanner><a href="https://namu.wiki/w/%EC%8B%B8%EC%9D%B4%EC%9B%94%EB%93%9C" style={{
            textDecoration: "none", color: "inherit"
          }}>싸이월드 홈</a></HomeBanner>
          <InfoImg></InfoImg>
          <AudioPlayer controls loop src={audioplay} type="audio/mpeg"></AudioPlayer>
          <Playlist onChange={onChangePlayList}>
            <PlaylistValue value="EarlySummer">Early Summer  🎵</PlaylistValue>
            <PlaylistValue value="OnAndOn">On And On  🎵</PlaylistValue>
            <PlaylistValue value="BachPrelude">Bach Prelude  🎵</PlaylistValue>
          </Playlist>
        </SideContents>
      </Background>
    </>
  )
}
export default App;


const Background = styled.div`
  width: 1024px;
  height: 600px;
  background-image: url(${backgroundImage});
  padding: 20px 0px 0px 20px;
  display: flex;
`

const Outerbox = styled.div`
  width: 808px;
  height: 544px;
  background-image: url(${outerboxImage});
  display: flex;
  flex-direction: column;
`

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px 0px 0px 32px;
  margin-bottom: 5px;
`

const HeaderWrapperLeft = styled.div`
  width: 208px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0 0 0;
  margin-right: 11px;
`

const Today = styled.div`
  font-size: 9px;
`

const TodayContents = styled.span`
`

const HeaderWrapperRight = styled.div`
  width: 510px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 14px 0px 14px;
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

const SideContents = styled.div`
  width: 160px;
  height: 80%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

const HomeBanner = styled.div`
  width: 100%;
  height: 30px;
  background-color: #bd5c5c;
  color: #ebe6e6;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  font-weight: 650;
  border-radius: 7px;
  margin-bottom: 5px;
`

const InfoImg = styled.div`
  background-image: url(${infoImage});
  background-size: 160px 90px;
  width: 100%;
  height: 90px;
  margin-bottom: 5px;
`

const AudioPlayer = styled.audio`
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
`

const Playlist = styled.select`
  width: 100%;
  border: 1px solid gray;
`

const PlaylistValue = styled.option`
  width: inherit;
  padding: 2px 10px 2px 5px;
  border: 0 none;
  color: black;
` 
