import React, { useState, useEffect } from 'react'
import styled from "@emotion/styled"
import myphotoImage from "../images/20220829_184704697.jpg";
import { useNavigate } from 'react-router-dom';

function Member3() {
  const navigate = useNavigate();
  const [mood, setMood] = useState("기쁨 😁");

  const [checked, setChecked] = useState([]);
  const [editing, setEditing] = useState(false);

  const loadSongsFromLocalStorage = () => {
    const storedSongs = localStorage.getItem('songs3');
    return storedSongs ? JSON.parse(storedSongs) : [
      { id: 1, songTitle: 'Bottom of the Deep Blue Sea', artistName: 'MISSO' },
      { id: 2, songTitle: 'Faded', artistName: 'Alan Walker' },
      { id: 3, songTitle: 'Eyes Open', artistName: 'Taylor Swift' },
      { id: 4, songTitle: '', artistName: '' },
      { id: 5, songTitle: '', artistName: '' },
    ];
  };

  const [songs, setSongs] = useState(loadSongsFromLocalStorage);

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

  const saveSongsToLocalStorage = (songs) => {
    localStorage.setItem('songs3', JSON.stringify(songs));
  };

  useEffect(() => {
    saveSongsToLocalStorage(songs);
  }, [songs]);

  const onChangeMood = function (event) {
    const selectedMood = event.target.value;
    setMood(selectedMood);
    localStorage.setItem("moodStateM3", selectedMood);
  }

  useEffect( () => {
    const savedMood = localStorage.getItem("moodStateM3");
    if (savedMood) {
      setMood(savedMood);
    }
  }, []);

  return (
      <Wrapper>
        <WrapperLeft>
          <WrapperLeftBody>
            <WrapperLeftBodyHeader>
              <GrayBox></GrayBox>
              <GrayLine1></GrayLine1>
            </WrapperLeftBodyHeader>
            <WrapperLeftBodyProfile>
              <ProfileLine>😊   김하리</ProfileLine>
              <ProfileLine>📧   haqieueen98@gmail.com</ProfileLine>
              <ProfileLine>📖   medium.com/@hariqueen98/</ProfileLine>
              <ProfileLine>✨   ESTP / ESTJ</ProfileLine>
            </WrapperLeftBodyProfile>
            <WrapperLeftBodyFooter>
              <MoodTitle>오늘의 기분</MoodTitle>
                <MoodContents onChange={onChangeMood} value={mood}>
                  <MoodContentsValue value="기쁨 😁">기쁨 😁</MoodContentsValue>
                  <MoodContentsValue value="슬픔 😢">슬픔 😢</MoodContentsValue>
                  <MoodContentsValue value="화남 😡">화남 😡</MoodContentsValue>
                  <MoodContentsValue value="생각 🤔">생각 🤔</MoodContentsValue>
                </MoodContents>
            </WrapperLeftBodyFooter>
          </WrapperLeftBody>
        </WrapperLeft>
        <WrapperRight>
          <WrapperRightBody>
            <WrapperRightBodyTop>
              <RightBodyTopTitle>커리어 전환 성공하자! 파이팅!!
              </RightBodyTopTitle>
              <GrayLine2></GrayLine2>
              <RightBodyTopContents>
                <RightBodyTopContentsDescription>
                <div style={{fontSize: '15px', fontWeight: 600, marginBottom: '20px', marginTop: '0px'}}>협업 스타일 및 장단점</div>
                <li>효율적인걸 중요시 해요.</li>
                <li>과정보다는 결과를 보는 타입이에요.</li>
                <li>행동파에요. 일단 하고봐요.</li>
                <li>먼저 실행하고, 그 과정에서 개선사항을 보완해 가며 배우는 타입이에요.</li>
                <li>유연한 대처를 좋아하고, 잘하는 편이에요.</li>

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
                      <TableData style={{ width: "55%", textAlign: "left", padding: "0px 0px 0px 15px" }}>
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
                      <TableData style={{ width: "30%", textAlign: "left", padding: "0px 0px 0px 10px"  }}>
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
          <NavigationItemMember3 id="navMember3" onClick={() => {
            navigate("/Member3");
            menuMember3();
          }}>김하리</NavigationItemMember3>
          <NavigationItem id="navMember4" onClick={() => {
            navigate("/Member4");
            menuMember4();
          }}>최유진</NavigationItem>
        </Navigation>
      </Wrapper>
  )
}

export default Member3;

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
  padding: 0 3px;
`

const MoodContentsValue = styled.option`
  width: inherit;
  padding: 2px 10px 2px 5px;
  border: 0 none;
  font: gray;
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
  height: 442px;
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
  margin-bottom: 62px;
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
  font-size: 12px;
  padding: 0 5px;
`

const RightBodyTopContentsDescription = styled.div`
  line-height: 1.6;
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

const NavigationItemMember3 = styled.div`
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