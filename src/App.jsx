import reset from './style/reset';
import { Global } from '@emotion/react';
import styled from "@emotion/styled"
import Router from "./shared/Router";
import backgroundImage from "./images/background.png";
// import { useState } from 'react';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Background>
        <Router />
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
`