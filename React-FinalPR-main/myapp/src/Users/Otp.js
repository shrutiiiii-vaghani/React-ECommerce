import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const navigate = useNavigate();

  const[otp,SetOtp] = useState("");

  const Otp1 = ()=>{
    let emailData = JSON.parse(localStorage.getItem('checkUserLogin'))
    let otp = Math.floor(Math.random() * 100000);
    let obj = {
        otp: otp,
        email : emailData.email
    }
    localStorage.setItem("userOtp",JSON.stringify(obj));
    alert("Your OTP:-"+otp);
}

const handleSubmit =()=>{
    let storedOtp = JSON.parse(localStorage.getItem("userOtp"));
    if(otp == storedOtp.otp){
        navigate('/newpassword')
    }
    else{
        alert("Otp is not correct")
    }
}

useEffect(()=>{
    Otp1()
},[])

  return (
    <div>
    <div className="container d-flex" style={{minHeight:"100vh",justifyContent:"center",alignItems:"center"}}>
 <div className="screen mt-5">
   <div className="screen__content">
     <form className="login">
       <div className="login__field">
         <i className="login__icon fas fa-user" />
         <input  type='text' value={otp} onChange={(e) => SetOtp(e.target.value)} name="otp" className="login__input" placeholder="Enter Otp"/>
       </div>
       <button className="button login__submit" type="button">
         <span className="button__text" type='button' onClick={() => handleSubmit()} >Submit</span>
         <i className="button__icon fas fa-chevron-right" />
       </button>			
     </form>
     <div className="social-login">

   
     </div>
   </div>
   <div className="screen__background">
     <span className="screen__background__shape screen__background__shape4" />
     <span className="screen__background__shape screen__background__shape3" />		
     <span className="screen__background__shape screen__background__shape2" />
     <span className="screen__background__shape screen__background__shape1" />
   </div>		
 </div>
</div>

   </div>
  )
}

export default Otp
