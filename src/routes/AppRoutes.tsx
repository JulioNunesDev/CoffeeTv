import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LivesPageComponents from '../pages/Lives'
import HeaderMain from '../components/Header'
import LiveStream from '../pages/LiveOn'
import Home from '../pages/Home'
export default function AppRoutes() {
  return (
    <BrowserRouter>
    <HeaderMain/>
        <Routes>
            <Route path='/home' element={<Home/>}/> 
            <Route path='/lives' element={<LivesPageComponents/>}/> 
            <Route path='/livestream' element={<LiveStream/>}/> 
        </Routes>
    </BrowserRouter>
  )
}
