import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  let {register,handleSubmit,formState:{errors},reset}=useForm()
 

  const getData=(data)=>{
    axios.post("https://portfolio-4d51f-default-rtdb.firebaseio.com/",data)
    console.log(data);
    reset();
  }
  return (
    <>
    <h1>Contact us</h1>

    <form action='' onSubmit={handleSubmit((data)=>getData(data))}> 
      <input {...register("fullname",{required:"name is required"})} name='fullname' className='form-control ' type='text' placeholder='Enter name'/>
      <p  className='text-danger'>{errors.fullname?.message}</p>

      <input  {...register("mail",{required:"mail is required"})} name='mail' className='form-control my-3' type='text' placeholder='Enter email'/>
      <p  className='text-danger'>{errors.mail?.mail}</p>
      <textarea {...register("query",{required:"massage  is required"})} name='query' className='form-control'  id='' cols='30' rows='3' placeholder='Any query'/><br></br>
      <p  className='text-danger'>{errors.query?.message}</p>
      <input  className='btn btn-success'  type='submit'/><br></br><br></br>


    </form>
    </>
  )
}

export default Form