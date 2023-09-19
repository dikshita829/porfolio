import React, { useContext } from 'react'
import Form from './Form'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import Header from '../../Header';
import { sender } from '../../Store';



const Contact = () => {
  let {mode,setMode}=useContext(sender)
  return (
    <>
    <div className={`container-fluid  text-${mode?'light':'dark'} bg-${mode?'dark':'light'}`} id='Contact'>
      <Header title='Contact me'/>
        <div className="row">
            <div className="col-12 col-md-6">
                <h3 >Lets get in touch </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem ipsa distinctio. Aliquid, soluta voluptatem? Voluptas recusandae rerum, voluptatem quis illum nihil deleniti eligendi eveniet, atque vero, eum repudiandae sit.</p>
                <h5>Living In:</h5>
                <p>Nagpur</p>
                <h5>Call:</h5>
                <p>7775935657</p>
                <a href='https://github.com/dikshita829'><AiFillGithub style={{fontSize:'30px'}}/></a>
                <a href='https://instagram.com/dikshitasanjaybalvir?igshid=MzNlNGNkZWQ4Mg=='><AiFillInstagram style={{fontSize:'30px'}}/></a>

            </div>
            <div className="col-12 col-md-6">
                <Form/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact