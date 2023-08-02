import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Member1 from '../pages/Member1'
import Member2 from '../pages/Member2'
import Member3 from '../pages/Member3'
import Member4 from '../pages/Member4'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='Member1' element={<Member1 />}/>
        <Route path='Member2' element={<Member2 />}/>
        <Route path='Member3' element={<Member3 />}/>
        <Route path='Member4' element={<Member4 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;