import React, { useContext } from 'react'

import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { sender } from './Store';
import List from './List';

const Navbar = () => {
  let {mode,setMode}=useContext(sender)
  
  return (
    <>
   <nav className="navbar navbar-expand-lg  fixed-top ">
  <div className={`container-fluid   text-${mode?'light':'dark'} bg-${mode?'dark':'light'} ` }>
    <a className="navbar-brand" href="#"><img src='Logo\Animated-DB-logo-MEDIUM-400px.gif' alt='' style={{width:'70px'}}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-lg-0  " style={{fontSize:'20px'}}>
        <List ID='#Home' name='Home'></List>
        <List ID='#About' name='About'></List>
        <List ID='#Skill' name='Skill'></List>
        <List ID='#Contact' name='Contact'></List>
       </ul>
      <div className="d-flex" role="search">
        <button  className='border-0 bg-light' onClick={()=>setMode(!mode)}>{mode?<BsFillSunFill style={{color:'yellow'}}/>:<BsFillMoonFill style={{color:'aqua'}} />}</button>

          </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar