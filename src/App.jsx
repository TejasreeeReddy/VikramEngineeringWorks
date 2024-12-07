import react from 'react';
import Navbar from './Navbar';
import Contact from './Contact';
import Services from './Services';
import Location from './Location';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About';
const App=()=>{

  return(
    <div>
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Navbar/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/location' element={<Location/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;