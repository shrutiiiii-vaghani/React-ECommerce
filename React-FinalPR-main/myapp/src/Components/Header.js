import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
         <nav className="custom-navbar navbar navbar navbar-expand-md" style={{backgroundColor:"#3b5d50"}} arial-label="Furni navigation bar">
            <div className="container">
                <a className="navbar-brand" href="index.html" style={{color:"white"}}>Furni<span>.</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsFurni">
                <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    <li>
                    <NavLink className="nav-link" to={`/`}>Home</NavLink>
                    </li>
                    <li><NavLink className="nav-link" to={`/product`}>Product</NavLink></li>
                    <li><NavLink className="nav-link" to={`/register`}>Register</NavLink></li>

                </ul>
                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li><NavLink className="nav-link" to={`/login`}><img src="images/user.svg" /></NavLink></li>
                    <li><NavLink className="nav-link" to={`/cart`}><img src="images/cart.svg" /></NavLink></li>
                </ul>
                </div>
              </div>
           </nav>


        </>
    )
}

export default Header;