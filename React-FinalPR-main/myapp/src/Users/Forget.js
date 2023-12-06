import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Forget = () => {

    const navigate = useNavigate()

    const[email,setEmail] = useState("");
    
    const handleSubmit = () => {
        let emailData = JSON.parse(localStorage.getItem('checkUserLogin'));
        if(emailData.email === email){
             navigate('/otp')
        } 
    }
       
    return(
        <div>
        <div className="container d-flex" style={{minHeight:"100vh",justifyContent:"center",alignItems:"center"}}>
     <div className="screen mt-5">
       <div className="screen__content">
         <form className="login">
           <div className="login__field">
             <i className="login__icon fas fa-user" />
             <input type="text" className="login__input" placeholder="Email" onChange={ (e) => setEmail(e.target.value) } value={email} />
           </div>
           <button className="button login__submit" type="button" >
             <span className="button__text" onClick={ () => handleSubmit() }>Get OTP</span>
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

export default Forget;
