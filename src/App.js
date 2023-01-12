import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./components/Contact";
import {
  Coc,
  Error,
  Gallery,
  Home,
  SingleHob,
} from './pages'

import {
  Navbar,
  Footer
} from './components';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
        <Route exact path='/coc' element={<Coc />} />
        <Route exact path='/gallery/:id' element={<SingleHob/>}/>
        <Route exact path='*' element={<Error/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App; 