import axios from 'axios';
import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Newpassword = () => {
  const navigate = useNavigate();
  const[password,Setpassword] = useState("");
  const[confirmpassword,SetConfirmpassword] = useState("");

  const handleSubmit =()=>{
     let admindata = JSON.parse(localStorage.getItem('checkUserLogin'));
     if(password == confirmpassword){
      axios.patch(`http://localhost:8000/users/${admindata.id}`,{
        password : password,
        cpassword: confirmpassword
      }).then((res)=>{
         localStorage.setItem('checkUserLogin',JSON.stringify(res.data));
         navigate('/login')
      }).catch((err)=>{
        console.log(err);
        return false;
      })
     }else{
      alert("Password do not match");
      return false;
     }
  }
  return (
    <div>
    <div className="container d-flex" style={{minHeight:"100vh",justifyContent:"center",alignItems:"center"}}>
 <div className="screen mt-5">
   <div className="screen__content">
     <form className="login">
       <div className="login__field">
         <i className="login__icon fas fa-user" />
         <input  type='password' value={password} onChange={(e)=>Setpassword(e.target.value)} name='password' className="login__input" placeholder="New password"/>
       </div>
       <div className="login__field">
         <i className="login__icon fas fa-lock" />
         <input  type='password' value={confirmpassword} onChange={(e)=>SetConfirmpassword(e.target.value)} name='confirmpassword' className="login__input" placeholder="Confirm Password"/>
       </div>
       <button className="button login__submit">
         <span className="button__text" type='button' onClick={()=>handleSubmit()}>Submit</span>
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

export default Newpassword;
