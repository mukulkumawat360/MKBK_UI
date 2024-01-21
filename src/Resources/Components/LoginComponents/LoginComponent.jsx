 import { useState } from "react"
import {retriveUserExistance} from "./LoginApiService"





  export default function  Loginpage(){
    
 
    const [checkUser,UpdateUser] = useState(" Lets Check You Are Existing Of Not ")
    
    const[requestdata,UpdatedRequest]=useState({
      srno:"",
      username:"",
      password:""
    })

    function handle(event){
      const newData={...requestdata}
      newData[event.target.id]=event.target.value
      UpdatedRequest(newData)
      
    }

    function onSubmitClick(event){


      event.preventDefault();
    console.log(requestdata)
      retriveUserExistance(requestdata)
      .then((response)=>UpdateUser(response.data))
      .catch((error)=>console.log(error))
      .finally(()=>console.log("cleanup"))

    }

return(

    <>
    <div>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid  justify-content-center align-items-center">
    <span className="navbar-brand mb-40 h1 ">Welcome To  MKBK</span>
  </div>
</nav>
    <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center" style={{marginTop:"100px"}}>
        <div class="col-10 col-md-8 col-lg-6">

 <form  >
  
  <div className="mb-3 w-80 align-items-center">
    <label for="exampleInputEmail1" classname="form-label">Email address</label>
    <input type="email" className="form-control" name='username' id="username" onChange={(event)=>handle(event)} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 w-80 ">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="password" onChange={(event)=>handle(event)}/>
  </div>
<div  className="mb-3" style={{marginTop:"12px"}}>
<button  type='button' className="btn btn-primary" onClick={onSubmitClick}>Login</button>
  <button type="button" className="btn btn-primary" style={{marginLeft: "10px"}}>Sign up</button>
</div>


</form>
<div  className="userExistingPrompt">
  {checkUser}
</div>
</div>
</div>
</div>


    </div>
    
    </>

)
};
