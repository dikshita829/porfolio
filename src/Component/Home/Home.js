import React, { useContext, useEffect }  from 'react'
import './Home.css'
import { sender } from '../../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  let {mode,setMode}=useContext(sender)
  
  return (
    <>
    <div className={`container-fluid   text-${mode?'light':'dark'} bg-${mode?'dark':'light'}`}  id='Home'>
        <div className="row align-items-center vh-100">
            <div className="col-md-6">
              <h1 style={{fontSize:'50px',fontFamily:'revert-layer'}}>Dikshita balvir</h1>
              <h4 >FrontEnd devloper</h4><br></br>
              <p>I am doing Java Full Stack developer course from Centum Foundation.  I want to use and enhance my skills by getting placed in a good company. </p>
            </div>
            <div  className="col-md-6">
                <img  data-aos="flip-down" src='Images\Home\output-onlinegiftools.gif' alt='' width="100%" height="400px"></img>

            </div>
        </div>
    </div>
    </>
  )
}

export default Home