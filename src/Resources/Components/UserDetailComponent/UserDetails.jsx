import { useState } from "react"


export default function UserDetails(){

  const [formdata,setUpdatedFormData]= useState({
    emailId:'',
    fullName:'',
    contactNumber:'',
    address:'',
    nationality:'',
    idType:'',
    idNumber:'',
    gender:''
  })
const defaultData={
  emailId:'',
  fullName:'',
  contactNumber:'',
  address:'',
  nationality:'',
  idType:'',
  idNumber:'',
  gender:''
}
  function handle(event){
    const newData={...formdata}
    newData[event.target.id]=event.target.value
    setUpdatedFormData(newData)
    console.log(formdata)
  }

  
    function onSubmitHandling(event){
      event.preventDefault();

        }
        
        function onClearHandling(){
          
            setUpdatedFormData(defaultData)
        }


    return(
        <>
        
        <div className="ConsolidateUserdetails">
          <h2>Customer Details</h2>
        <div className="form-floating mb-3">
          
  <input type="email" className="form-control" name="emailId" id="emailId" placeholder="name@example.com"  onChange={(event=>handle(event))}/>
  <label htmlFor="floatingInputDisabled" >Email address</label>
</div>
<div className="form-floating mb-3">
  <textarea  className="form-control" placeholder="shivansh T" id="fullName" onChange={(event=>handle(event))} ></textarea>
  <label htmlFor="floatingTextareaDisabled">Full Name</label>
</div>
<div className="form-floating mb-3">
  <textarea className="form-control" onChange={(event=>handle(event))} placeholder="9782983249" id="contactNumber" height={100} ></textarea>
  <label htmlFor="floatingTextarea2Disabled">Contact Number</label>
</div>
<div className="form-floating mb-3">
  <textarea className="form-control" placeholder="9782983249" id="address" height={100} onChange={(event=>handle(event))}></textarea>
  <label htmlFor="floatingTextarea2Disabled">Address</label>
</div>
<div className="form-floating mb-3">
  <textarea  className="form-control" placeholder="Indian" id="nationality" onChange={(event=>handle(event))}></textarea>
  <label htmlFor="floatingTextareaDisabled">Nationality </label>
</div>
<div className="form-floating">
  <select className="form-select" id="idType" aria-label="Floating label disabled select example" onChange={(event=>handle(event))}>
    <option value="PAN" >PAN</option>
    <option value="AADHAAR">AADHAAR</option>
    <option value="Driving">Driving License</option>
    <option value="OTH">Other</option>
  </select>
  <label htmlFor="floatingSelectDisabled">ID Type</label>
</div>
<div className="form-floating mb-3">
  <textarea  className="form-control" placeholder="123213-12321-12321-12321" id="idNumber" onChange={(event=>handle(event))}></textarea>
  <label htmlFor="floatingTextareaDisabled">ID</label>
</div>
<div className="form-floating">
  <select className="form-select" id="gender" aria-label="Floating label disabled select example" onChange={(event=>handle(event))}>
    <option value="M" >Male</option>
    <option value="F">Female</option>
    <option value="O">Others</option>
  </select>
  <label htmlFor="floatingSelectDisabled">Gender</label>
</div>

</div>
<div >
<button type="button" className="btn btn-primary" onClick={onSubmitHandling}>Submit</button>
<button type="button" className="btn btn-secondary" onClick={onClearHandling}>clear</button>
</div>
        </>
    )
}