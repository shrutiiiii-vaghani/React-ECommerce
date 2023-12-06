import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[cpassword,setCPassword]= useState("");
    const handleSubmit = () => {
        
        let users = axios.post(`http://localhost:8000/users`,{
            name : name,
            email : email,
            password : password,
            cpassword :cpassword
        });

        if(users){
            console.log("User successfully register");
            setName("");
            setEmail("");
            setPassword("");
            setCPassword("");
            navigate('/login');
        }else{
            console.log("User not Register");
            return false;
        }
    }
   

  return (
    <div>
       <div>
     <div className="container d-flex" style={{minHeight:"100vh",justifyContent:"center",alignItems:"center"}}>
  <div className="screen mt-5">
    <div className="screen__content">
      <form className="login" style={{paddingTop:"67px"}}>
        <div className="login__field">
          <i className="login__icon fas fa-user" />
          <input type="text" className="login__input" placeholder="User name" name='name' onChange={ (e) => setName(e.target.value) } value={name}/>
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-user" />
          <input type="text" className="login__input" placeholder="Email" name='email' onChange={ (e) => setEmail(e.target.value) } value={email}  />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock" />
          <input type="password" className="login__input" placeholder="Password"  name='password' onChange={ (e) => setPassword(e.target.value) } value={password}/>
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock" />
          <input type="password" className="login__input" placeholder="Confirm Password"  name='cpassword' onChange={ (e) => setCPassword(e.target.value) } value={cpassword}/>
        </div>
        <button className="button login__submit" type="button" onClick={ () => handleSubmit() }>
          <span className="button__text">Register Now</span>
          <i className="button__icon fas fa-chevron-right" />
        </button>	
        <div className='col-12 d-flex'>
          
            
             <div className='col-6 m-auto'>
                <Link to={`/login`} style={{color:"rgb(110 154 138)",fontWeight:"600",marginLeft:"50px",marginTop:"10px"}}>LogIn ?</Link>			
             </div>
             </div>	
        {/* <div className='d-flex' >
          <a style={{color:"white",marginTop:"5px"}} href='/login'> LogIn</a>		
        </div> */}
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
    </div>
  )
}

export default Register
