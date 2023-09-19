import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Header'
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import './Skill.css'
import { sender } from '../../Store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
    useEffect(() => {
        AOS.init();
      }, [])
   
    let Data=[
        {
            id:1,
            icon:< AiFillHtml5 />,
            title:"HTML",
            colour:"blue"

        },
        {
            id:2,
            icon:<SiCss3/>,
            title:"CSS",
            colour:"orange"

        },
        {
            id:3,
            icon:<FaBootstrap/>,
            title:"BOOTSTRAP",
            colour:"violet"

        },
        {
            id:4,
            icon:<BiLogoJavascript/>,
            title:"JAVASCRIPT",
            colour:"yellow"

        },
        {
            id:3,
            icon:<BiLogoReact/>,
            title:"REACT",
            colour:"indigo"

        },
    ]
    let [picker,setPicker]=useState(Data[0])
    let {mode,setMode}=useContext(sender)
  return (
    <>
    <div className={`container-fluid  text-${mode?'light':'dark'} bg-${mode?'dark':'light'}` }id='Skill'>
        <br></br><br></br><br></br>
        <Header title="My Skills"/>
        <div data-aos="fade-up-right" className="row  justify-content-center align-item-center ">
            <div className=" col-md-2">
            {
                Data.map((e)=>{
                    return(
                        <div className=" border border-dark text-center mb-2  rounded  shadow" >
                            <span className='icon_card' onMouseEnter={()=>setPicker(e)} style={{fontSize:'60px',color:e.colour}}> {e.icon}</span>
                        </div>
                    )
                })
            }
            </div>
            <div  className="col-5  col-md-6 border border-dark text-center  shadow rounded" >
            
                <span style={{fontSize:'200px',color:picker.colour}}> {picker.icon} </span>
                <h1 >{picker.title}</h1>
            
            </div>
            

        </div>
    </div>
    </>
  )
}

export default Skill