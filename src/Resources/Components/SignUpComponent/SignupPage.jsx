import React from 'react';
import loginbg from '../Images/loginbg.svg';
import  "../../../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { retriveUserSignUp } from './SignUpPageApi';

export default function SignupPageTemp() {
  const [ResponseMessage,SetResponseMessage]=useState("New user");
    const navigate = useNavigate();
const [formInput,setformInput]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:"",
    success:""
});



const [formError,setformError]=useState({
    firstName:"",
    email:"",
    password:"",
    confirmpassword:""
});

const handleUserInput =(name,value)=>{
    console.log("inside handle input");
    setformInput({
        ...formInput,
        [name]:value
    });

    
};
    const ValidateFormInput=(event)=>{ 

        event.preventDefault();


        let inputError={
            firstName:"",
            email:"",
            password:""
        }

        if(!formInput.firstName && !formInput.email && !formInput.password){
            setformError({
                ...inputError,
                firstName:"!Name can not be empty ",
                email:"!Email can not be empty",
                password:"!Password can not be empty"
            });
            return;
        }
        if(!formInput.firstName ){
            setformError({
                ...inputError,
                firstName:"!Name can not be empty "
            });
            return;
        }
        if( !formInput.email ){
            setformError({
                ...inputError,

                email:"!Email can not be empty"
            
            });
            return;
        }
        if(!formInput.password){
            setformError({
                ...inputError,
 
                password:"!Password can not be empty"
            });
            return;
        }

        if( formInput.password !=formInput.confirmpassword){
            setformError({
                ...inputError,

                confirmpassword:"Password and confirm password should be the same"
            });
            return;
        }

        setformError(inputError);
        onSignUpSubmit(event);

        if(ResponseMessage=="Exists"){
          console.log("inside exists");
          setformInput((prevState)=>({
            ...prevState,
            success:"User Already Exists"
            
            }));
         
          navigate("/signup");
        }else{
          setformInput((prevState)=>({
            ...prevState,
            success:"Successfully registered!"
            
            }));
          
        }


            
            
           
            
     }


function onSignUpSubmit(event){

  event.preventDefault();
  retriveUserSignUp(formInput)
  .then((response)=>{
    SetResponseMessage(response.data);
    console.log("data from request"+response.data);
  })
  .catch((error)=>console.log(error))
  .finally(()=>console.log("cleanup"))



  
}


    return (
      <div>
       
        <div className="container-fluid vh-100 overflow-auto">
          <div className="row vh-100 ">
            <div className="col-lg-6 bg-gray p-5 text-center">
              <h4 className="text-center fw-bolder fs-2">Login</h4>
              <p className="mb-3 fs-7">Already gave an account ?</p>
             <button className="btn fw-bold mb-5 btn-outline-success px-4 rounded-pill" onClick={()=>{navigate("/login")}}>log In</button>
              <div className="img-cover p-4">
                <img src={loginbg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 p  vh-100">
              <div className="row d-flex vh-100">
                <div className="col-md-8 p-4 ikigui m-auto text-center align-items-center">
                  <p>{ResponseMessage}</p>
                  <h4 className="text-center fw-bolder mb-4 fs-2">Login</h4>
                  <div className="input-group mb-4">
                    <span className="input-group-text border-end-0 inbg" id="basic-addon1"><i className="bi bi-person" /></span>
                    <input type="text"  value={formInput.firstName} name="firstName" onChange={({target})=>{handleUserInput(target.name,target.value)}} className="form-control ps-2 border-start-0 fs-7 inbg form-control-lg mb-0" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <p className='error-message' >{formError.firstName}</p>
                  <div className="input-group mb-4">
                    <span className="input-group-text border-end-0 inbg" id="basic-addon1"><i className="bi bi-person" /></span>
                    <input type="text" value={formInput.lastName} name="lastName" onChange={({target})=>{handleUserInput(target.name,target.value)}} className="form-control ps-2 border-start-0 fs-7 inbg form-control-lg mb-0" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-text border-end-0 inbg" id="basic-addon1"><i className="bi bi-envelope" /></span>
                    <input type="email" value={formInput.email} name="email" onChange={({target})=>{handleUserInput(target.name,target.value)}} className="form-control ps-2 border-start-0 fs-7 inbg form-control-lg mb-0" placeholder="Enter Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <p className='error-message' >{formError.email}</p>
                  <div className="input-group mb-4">
                    <span className="input-group-text border-end-0 inbg" id="basic-addon1"><i className="bi bi-lock" /></span>
                    <input type="password" value={formInput.password} onChange={({target})=>{handleUserInput(target.name,target.value)}} name="password" className="form-control ps-2 fs-7 border-start-0 form-control-lg inbg mb-0" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <p className='error-message' >{formError.password}</p>
                  <div className="input-group mb-4">
                    <span className="input-group-text border-end-0 inbg" id="basic-addon1"><i className="bi bi-lock" /></span>
                    <input type="password" value={formInput.confirmpassword} onChange={({target})=>{handleUserInput(target.name,target.value)}} name="confirmpassword" className="form-control ps-2 fs-7 border-start-0 form-control-lg inbg mb-0" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <p className='error-message' >{formError.confirmpassword}</p>
                  <p className='success-message'>{formInput.success}</p>
                  <button className="btn btn-lg fw-bold fs-7 btn-success  w-100" onClick={ValidateFormInput}>Register</button>
                  
                  <p className="text-center py-4 fw-bold fs-8">Or Sign in with social platforms</p>
                  <ul className="d-inline-block mx-auto">
                    <li className="float-start px-3"><a href><i className="bi bi-facebook" /></a></li>
                    <li className="float-start px-3"><a href><i className="bi bi-twitter" /></a></li>
                    <li className="float-start px-3"><a href><i className="bi bi-linkedin" /></a></li>
                    <li className="float-start px-3"><a href><i className="bi bi-google" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }