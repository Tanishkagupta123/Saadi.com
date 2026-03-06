import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from "../Pages/Login"
import Help from "../Pages/Help"
import Home from "../Pages/Home"
import Signup from '../Pages/Signup'


const Routing = () => {
  return (
    <>

    <Routes>

        <Route path="/" element={<Layout/>}>
        
          <Route index element={<Home/>} />

        

        <Route path="/login" element={<Login/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/signup" element={<Signup/>}/>


      <Route path='*' element={<h1>This page is not available</h1>}/>

      hlooo

    
        </Route>

    </Routes>



    </>
  )
}

export default Routing