import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Header'
import './About.css'
import { AiFillSetting } from "react-icons/ai";
import { sender } from '../../Store';




const About = () => {
  let [show, setShow] = useState(false)
  let Data = [
    {
      id: 1,
      title: "Name",
      info: "Dikshita balvir"
    },
    {
      id: 2,
      title: "Email",
      info: "dikshitabalvir123@gmail.com",
    },
    {
      id: 3,
      title: "DOB",
      info: "08/09/2000",

    },
    {
      id: 4,
      title: "From",
      info: "Nagpur"
    }
  ]
  let [Colorpick, setColorpick] = useState("primary")
  let {mode,setMode}=useContext(sender)
  
  return (
    <>
      <div className={`container-fluid   text-${mode?'light':'dark'} bg-${mode?'dark':'light'} position-relative` } id='About'>
        <br></br><br></br><br></br>
        <Header   title=" About Me" />
        <div className="row align-item-center">
          <div className="col-md-6">
            <img src='Images\About\output-onlinegiftools (2).gif' height="400px" width="100%" alt='' ></img>
          </div>
          <div className="col-md-6" >
            <p>I am doing Java Full Stack developer course from Centum Foundation. Here I learnt so many technologies apart from core java like "Hibernate", "JPA", "Spring", "Spring boot rest Api" "MySQL", "JDBC" and many more. Besides this course I am doing Data science course from simplilearn. Now, I want to use and enhance my skills by getting placed in a good company. </p>
          </div>
        </div>
        <div className="row align-item-center  mt-4"style={{marginLeft:'70px'}}>
          {
            Data.map((e) => {
              return (
                <div className="col-sm-6 col-md-3 align-item-center  ">
                  <div className={`card text-bg-${Colorpick} mb-3`} style={{ maxWidth: '18rem' }}>
                    <div className="card-header">{e.title}</div>
                    <div className="card-body">

                      <p className="card-text">{e.info}</p>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>

        <div className='mx-auto text-center p-2  shadow border border-1  position-absolute top-0 end-0' style={{width:'75px'}} >
          <AiFillSetting className='spinner-border border-0'onClick={()=>setShow(!show)} style={{fontSize:'25px'}} />
          {
            show &&

            < div >
        <button onClick={()=>setColorpick("danger")} className='rounded-circle  mt-2 bg-danger text-danger'>A</button>
        <button onClick={()=>setColorpick("success")} className='rounded-circle bg-success  text-success mx-2'>A</button>
        <button onClick={()=>setColorpick("warning")} className='rounded-circle bg-warning text-warning'>A</button>

        </div>
      }
      </div>

    </div >
    </>
  )
}

export default About