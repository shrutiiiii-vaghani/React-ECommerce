import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Slider = () => {

    const [slider,setSlider] = useState([]);


    useEffect(()=>{
        axios.get(`http://localhost:8000/slider`)
        .then((res)=>{  
            setSlider(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    },[])

    return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
               {
                slider.map((item)=> {
                    return(
                      <div classname="carousel-item active">
                        <div className="hero" style={{backgroundColor:"#3b5d50"}}>
                            <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-5">
                                <div className="intro-excerpt">
                                    <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                                    <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                    <p><NavLink to={`/cart`} className="btn btn-secondary me-2">Shop Now</NavLink><a href="#" className="btn btn-white-outline">Explore</a></p>
                                </div>
                                </div>
                                <div className="col-lg-7">
                                <div className="hero-img-wrap">
                                    <img src={item.image} className="img-fluid" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> 
                        </div>
                    )
                })
               }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>

    )
}
export default Slider;