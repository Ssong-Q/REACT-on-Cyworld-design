/*
23.08.02: menuMember4 페이지 내용 작성 
          NavigationItemMember4 수정(인덱스 색깔 변화 딜레이 문제)
23.08.03: 사진 추가 
          노래 제목 및 아티스트 작성 기능 
          수정, 삭제, 확인 버튼 추가
23.08.04: 수정, 확인 버튼 전환 기능 
          버튼 클릭 시 <input>, <div>변환 기능
          체크박스 선택 후 삭제 버튼 클릭 시 제목, 아티스트 텍스트 삭제

<To Do>
-Member4 페이지 사진 넣기 [V]
-플레이리스트 노래 목록 작성 기능 [V]
-플레이리스트 노래 추가 버튼(+버튼 클릭 시 입력 박스) [V]
-플레이리스트 노래 확인 버튼(+버튼 클릭 시 텍스트 박스) [V]
-플레이리스트 노래 삭제 버튼(+체크박스로 삭제) [V]
-플레이리스트 <input>박스 있을 때와 없을 때, 위치 및 높이 변화 문제 해결하기
-?삭제 버튼을 수정 버튼을 눌렀을 때만 사용 가능하게 할 것인가? 
*/

import React, { useState } from 'react';
import styled from "@emotion/styled";
import outerboxImage from "../images/outerbox.png";
import myphotoImage from "../images/youjin.png";
import { useNavigate } from 'react-router-dom';

function Member4() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState([]);
  const [editing, setEditing] = useState(false);
  const [songs, setSongs] = useState([
    { id: 1, songTitle: '', artistName: '' },
    { id: 2, songTitle: '', artistName: '' },
    { id: 3, songTitle: '', artistName: '' },
    { id: 4, songTitle: '', artistName: '' },
    { id: 5, songTitle: '', artistName: '' },
  ]);

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

  const handleConfirmClick = () => {
    setEditing((prevState) => !prevState);
  }

  const handleFirstCheckboxToggle = () => {
    if (checked.length === songs.length) {
      setChecked([]);
    } else {
      const allIds = songs.map((song) => song.id);
      setChecked(allIds);
    }
  };

  const handleCheckboxToggle = (id) => {
    setChecked((prevChecked) =>
      prevChecked.includes(id) ? prevChecked.filter((item) => item !== id) : [...prevChecked, id]
    );
  };

  const handleDeleteClick = () => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        checked.includes(song.id) ? { ...song, songTitle: '', artistName: '' } : song
      )
    );
    setChecked([]);
  };

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
              <ProfileLine>😊   최유진</ProfileLine>
              <ProfileLine>📧   youjin8019@gmail.com</ProfileLine>
              <ProfileLine>📖   u-genie-story.tistory.com/</ProfileLine>
              <ProfileLine>✨   ISFJ</ProfileLine>
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
              <RightBodyTopTitle>커리어 전환 성공하자! 파이팅!</RightBodyTopTitle>
              <GrayLine2></GrayLine2>
              <RightBodyTopContents>
                <RightBodyTopContentsDescription>
                  <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', marginTop: '2px' }}>장점</div>
                  1. 계획적인 편이에요. <br />
                  2. 필요한 상황이라면 E 성향을 얼마든지 끌어낼 수 있어요. <br />
                  3. 취미가 많은 편이에요. 덕분에 스트레스 관리를 잘하는 편인 거 같아요. <br /><br />
                  <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', marginTop: '2px' }}>단점</div>
                  1. 계획을 지키지 못하면 스트레스를 많이 받아요.<br />
                  2. 새로운 일을 시작할 때 너무 많은 시간을 고민하는 데 허비해요.<br /><br />
                  <div style={{ fontSize: '10px', fontWeight: 500, marginBottom: '2px', marginTop: '2px' }}>협업 과정에서 나만의 스타일</div>
                  - 먼저 나서는 편은 아니지만 할 사람이 없을 경우에 팀을 이끄는 걸 부담스러워하지는 않아요.<br />
                  - 의견이 많으면 나중에 거기서부터 뻗어갈 수 있는 또 다른 이야기들이 더 많아진다고 생각해서 조금 주제를 벗어난 의견까지도 일단 전부 다 들어보는 걸 좋아해요. <br />
                </RightBodyTopContentsDescription>
              </RightBodyTopContents>
            </WrapperRightBodyTop>
            <WrapperRightBodyBottom>
              <WrapperRightBodyBottomTitle>
                <TitleTitle>나만의 플레이리스트</TitleTitle>
                <TitleSubtitle>TODAY CHOICE</TitleSubtitle>
                <ButtonContainer>
                  <ButtonSmall onClick={handleConfirmClick}>
                    {editing ? '확인' : '수정'}
                  </ButtonSmall>
                  <ButtonSmall onClick={handleDeleteClick}>삭제</ButtonSmall>
                </ButtonContainer>
              </WrapperRightBodyBottomTitle>
              <WrapperRIghtBodyBottomTable>
                <tbody>
                  <tr style={{ width: '100%', height: '20px' }}>
                    <TableHeader style={{ width: "8%", textAlign: "center" }}>
                      <input type="checkbox" name="" id=""
                        style={{ width: "12px", height: "12px" }}
                        checked={checked.length === songs.length}
                        onChange={handleFirstCheckboxToggle} />
                    </TableHeader>
                    <TableHeader style={{ width: "12%", textAlign: "center" }}>번호</TableHeader>
                    <TableHeader style={{ width: "55%", textAlign: "center" }}>곡명</TableHeader>
                    <TableHeader style={{ width: "25%", textAlign: "center" }}>아티스트</TableHeader>
                  </tr>
                  {songs.map((song) => (
                    <tr key={song.id} style={{ width: '100%', height: '20px' }}>
                      <TableData style={{ width: "8%", textAlign: "center" }}>
                        <input type="checkbox" name="" id=""
                          style={{ width: "12px", height: "12px" }}
                          checked={checked.includes(song.id)}
                          onChange={() => handleCheckboxToggle(song.id)} />
                      </TableData>
                      <TableData style={{ width: "12%", textAlign: "center" }}>{song.id}</TableData>
                      <TableData style={{ width: "55%", textAlign: "left" }}>
                        {editing ? (
                          <input
                            type="text"
                            value={song.songTitle}
                            onChange={(e) => {
                              const updatedSongs = songs.map((s) =>
                                s.id === song.id ? { ...s, songTitle: e.target.value } : s
                              );
                              setSongs(updatedSongs);
                            }}
                            placeholder="Song Title"
                          />
                        ) : (
                          <div>{song.songTitle}</div>
                        )}
                      </TableData>
                      <TableData style={{ width: "25%", textAlign: "left" }}>
                        {editing ? (
                          <input
                            type="text"
                            value={song.artistName}
                            onChange={(e) => {
                              const updatedSongs = songs.map((s) =>
                                s.id === song.id ? { ...s, artistName: e.target.value } : s
                              );
                              setSongs(updatedSongs);
                            }}
                            placeholder="Artist Name"
                          />
                        ) : (
                          <div>{song.artistName}</div>
                        )}
                      </TableData>
                    </tr>
                  ))}
                </tbody>
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
          <NavigationItem id="navMember2" onClick={() => {
            navigate("/Member2");
            menuMember2();
          }}>백채은</NavigationItem>
          <NavigationItem id="navMember3" onClick={() => {
            navigate("/Member3");
            menuMember3();
          }}>김하리</NavigationItem>
          <NavigationItemMember4 id="navMember4" onClick={() => {
            navigate("/Member4");
            menuMember4();
          }}>최유진</NavigationItemMember4>
        </Navigation>
      </Wrapper>
    </Outerbox>
  );
};
export default Member4;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 200px;
`;

const Button = styled.button`
  background-color: #298eb5;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0071a0;
  }
`;

const ButtonSmall = styled(Button)`
  font-size: 10px;
  padding: 2px 5px;
  margin-left: 8px;
`;

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

const NavigationItemMember4 = styled.div`
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