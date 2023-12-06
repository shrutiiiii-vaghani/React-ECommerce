import React ,{ useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async() => {

       try{
        let users = await axios.get(`http://localhost:8000/users?email=${email}&password=${password}`)

       if(users.data.length === 0){
                alert("Email and Password not valid");
                return false;   
       }
       localStorage.setItem('checkUserLogin',JSON.stringify(users.data[0]));
       setEmail("");
       setPassword("");
        navigate('/product');

       }catch(err){
        console.log(err);
        return false;
       }
    }

    // let users = await axios.get(`http://localhost:8000/users?email=${email}&password=${password}`);
    // if(users.data.length === 0){
    //                console.log("Email and Password not valid");
    //                return false;
    //                navigate('/')
                  
    //       }
    //       localStorage.setItem('checkUserLogin',JSON.stringify(users.data[0]));
    //        setEmail("");
    //        setPassword("");
    //        navigate('/');
    //     }

  return (
    <div>
     <div className="container d-flex" style={{minHeight:"100vh",justifyContent:"center",alignItems:"center"}}>
        <div className="screen mt-5">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input type="text" className="login__input" placeholder="User name / Email" name='email' onChange={ (e) => setEmail(e.target.value) } value={email} />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input type="password" className="login__input" placeholder="Password" name='password' onChange={ (e) => setPassword(e.target.value) } value={password}/>
              </div>
              <button className="button login__submit" type="button" onClick={ () => handleSubmit() }>
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>	
              <div className='col-12 d-flex'>
              <div className='col-4'>
                  <Link to={`/register`} style={{color:"rgb(110 154 138)",textDecoration:"none",fontWeight:"700",marginLeft:"10px",}}>Sign In?</Link>
              </div>
             <div className='col-8'>
                <Link to={`/forget`} style={{color:"rgb(110 154 138)",textDecoration:"none",fontWeight:"600",marginLeft:"26px"}}>Forget Password?</Link>			
             </div>
             </div>
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

export default Login;
