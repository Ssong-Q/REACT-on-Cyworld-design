import reset from './style/reset';
import { Global } from '@emotion/react';
import styled from "@emotion/styled";
import Router from "./shared/Router";
import backgroundImage from "./images/background.png";
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

  return (
    <>
      <Global styles={reset}/>
      <Background>
        <Router />
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
