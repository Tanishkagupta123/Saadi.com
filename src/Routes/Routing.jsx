import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from "../Pages/Login"
import Help from "../Pages/Help"
import Home from "../Pages/Home"
import Signup from '../Pages/Signup'
import DOB from '../Pages/DOB'
import Religion from '../Pages/Religion'
import Email from '../Pages/Email'


const Routing = () => {
  return (
    <>

    <Routes>

        <Route path="/" element={<Layout/>}>
        
          <Route index element={<Home/>} />

        

        <Route path="/login" element={<Login/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dob" element={<DOB/>}/>
        <Route path="/religion" element={<Religion/>}/>
        <Route path="/email" element={<Email/>}/>





      <Route path='*' element={<h1>This page is not available</h1>}/>

      hlooo

    
        </Route>

    </Routes>



    </>
  )
}

export default Routing