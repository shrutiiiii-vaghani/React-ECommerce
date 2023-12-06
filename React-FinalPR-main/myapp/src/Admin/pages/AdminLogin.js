import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [admin,setAdmin] = useState({});

  const handleSubmit = () => {
    axios.get(`http://localhost:8000/users?email=${email}&password=${password}&role=admin`).then((res)=>{
        if(res.data){
            localStorage.setItem('adminUser',JSON.stringify(res.data[0]));
            navigate('/admin/dashboard');
        }else{
            alert("Email and Password not valid")
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('adminUser'));
        if(data){
            navigate('/admin/dashboard')
        }
        setAdmin(data)    
    },[])




  return (
    <div>
       <div className="card mb-3 container col-3" style={{marginTop:"150px"}}>
  <div className="card-body">
    <div className="pt-4 pb-2">
      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
      <p className="text-center small">Enter your username &amp; password to login</p>
    </div>
    <form className="row g-3 needs-validation" noValidate>
      <div className="col-12">
        <label htmlFor="yourUsername" className="form-label">Username</label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
          <input type="text"  value={email} onChange={ (e) => setEmail(e.target.value) } name="email"className="form-control" id="yourUsername" required />
          <div className="invalid-feedback">Please enter your username.</div>
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="yourPassword" className="form-label">Password</label>
        <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }  name="password"className="form-control" id="yourPassword" required />
        <div className="invalid-feedback">Please enter your password!</div>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary w-100"onClick={ () => handleSubmit() } type="button" value="submit">Login</button>
      </div>
      <div className="col-12">
        <p className="small mb-0">Don't have account? <Link to='/admin/register'>Create an account</Link></p>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default AdminLogin;
