import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LivesPageComponents from '../pages/Lives'
import HeaderMain from '../components/Header'
import LiveStream from '../pages/LiveOn'
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
export default function AppRoutes() {
  return (
    <BrowserRouter>
    <HeaderMain/>
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/login' element={<Login/>}/> 
            <Route path='/register' element={<Register/>}/> 
            <Route path='/lives' element={<LivesPageComponents/>}/> 
            <Route path='/livestream' element={<LiveStream/>}/> 
        </Routes>
    </BrowserRouter>
  )
}
