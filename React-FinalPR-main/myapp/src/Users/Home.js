import React from 'react';
import Slider from './Slider';
import { useState , useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

  const[product,setProduct] = useState([]);
 const[table,setTable] = useState([]);
 const[sofa,setSofa] = useState([]);

 const getAllProduct = async() => {
    axios.get(`http://localhost:8000/products`)
    .then((res) => {
        setProduct(res.data);
    }).catch((err) => { 
        console.log(err);
        return false;
    })
}

 const getAllTable = () => {
     axios.get(`http://localhost:8000/products?category=Table&&status=instock`)
        .then((res)=>{
            
            setTable(res.data.slice(0,4));
        }).catch((err)=>{
            console.log(err);  
            return false;
        })
 }

 const getAllSofa = () => {
  axios.get(`http://localhost:8000/products?category=Sofa&&status=instock`)
  .then((res)=>{
      setSofa(res.data.slice(0,4));
  }).catch((err)=>{
      console.log(err);  
      return false;
  })
 }

// const getAllltems  = () => { 
//     axios.get(`http://localhost:8000/products`)
//     .then((res)=>{
//         let ans = res.data.filter((val,i)=>{
//             if(i < 5){
//                 return val.category === "Table"
//             }         
//         })
//             setTable(ans)  
//     }).catch((err)=>{
//         console.log(err);  
//         return false;
//     })
// } 

useEffect(() => {
    getAllProduct();
     getAllTable();
     getAllSofa();
},[]);


  return (
    <div>
       <Slider/>
       <div>
        <div className="product-section">
          <div className="container">
            <h3 style={{color:"#3b5d50",fontWeight:"700"}}>Best of Table</h3>
                <div className="row">      
             {
               table.map((val)=>{
                 return(
                        <figure class="snip1208">
                                <img src={val.image} alt="sample66"/>
                                <figcaption>
                                  <h3>{val.name}</h3>
                                  <p>
                                  {val.price}
                                  </p>
                                <Link to={`/product`}><button style={{marginTop:"60px"}}>Read More</button></Link>
                                </figcaption>
                          </figure>
                          )
                        })
                      }
                </div>
            </div>
            <div className="container">
            <h3 style={{color:"#3b5d50",fontWeight:"700",marginTop:"20px"}}>Best of Sofa</h3>
                <div className="row">      
             {
               sofa.map((val)=>{
                 return(
                        <figure class="snip1208">
                                <img src={val.image} alt="sample66"/>
                                <figcaption>
                                  <h3>{val.name}</h3>
                                  <p>
                                  {val.price}
                                  </p>
                                <Link to='/product'><button style={{marginTop:"60px"}}>Read More</button></Link>
                                </figcaption>
                          </figure>
                          )
                        })
                      }
                </div>
            </div>
        </div>
    </div>
   <div className="choose">
        <div className="why-choose-section">
        <div className="container">
            <div className="row justify-content-between">
            <div className="col-lg-6">
                <h2 className="section-title">Why Choose Us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <div className="row my-5">
                <div className="col-6 col-md-6">
                    <div className="feature">
                    <div className="icon">
                        <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-6 col-md-6">
                    <div className="feature">
                    <div className="icon">
                        <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-6 col-md-6">
                    <div className="feature">
                    <div className="icon">
                        <img src="images/support.svg" alt="Image" className="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-6 col-md-6">
                    <div className="feature">
                    <div className="icon">
                        <img src="images/return.svg" alt="Image" className="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="img-wrap">
                <img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
                </div>
            </div>
            </div>
        </div>
        </div>
   </div>


	<div className="we-help-section">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-7 mb-5 mb-lg-0">
        <div className="imgs-grid">
          <div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co" /></div>
          <div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co" /></div>
          <div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co" /></div>
        </div>
      </div>
      <div className="col-lg-5 ps-lg-5">
        <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
        <ul className="list-unstyled custom-list my-4">
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
        </ul>
        <p><a herf="#" className="btn" style={{backgroundColor:"burlywood"}}>Explore</a></p>
      </div>
    </div>
  </div>
</div>

<div className="popular-product">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="product-item-sm d-flex">
          <div className="thumbnail">
            <img src="images/product-1.png" alt="Image" className="img-fluid" />
          </div>
          <div className="pt-3">
            <h3>Nordic Chair</h3>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
            <p><a href="#">Read More</a></p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="product-item-sm d-flex">
          <div className="thumbnail">
            <img src="images/product-2.png" alt="Image" className="img-fluid" />
          </div>
          <div className="pt-3">
            <h3>Kruzo Aero Chair</h3>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
            <p><a href="#">Read More</a></p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="product-item-sm d-flex">
          <div className="thumbnail">
            <img src="images/product-3.png" alt="Image" className="img-fluid" />
          </div>
          <div className="pt-3">
            <h3>Ergonomic Chair</h3>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
            <p><a href="#">Read More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="testimonial-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 mx-auto text-center">
        <h2 className="section-title">Testimonials</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="testimonial-slider-wrap text-center">
          <div id="testimonial-nav">
            <span className="prev" data-controls="prev"><span className="fa fa-chevron-left" /></span>
            <span className="next" data-controls="next"><span className="fa fa-chevron-right" /></span>
          </div>
          <div className="testimonial-slider">
            <div className="item">
              <div className="row justify-content-center">
                <div className="col-lg-8 mx-auto">
                  <div className="testimonial-block text-center">
                    <blockquote className="mb-5">
                      <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                    </blockquote>
                    <div className="author-info">
                      <div className="author-pic">
                        <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                      </div>
                      <h3 className="font-weight-bold">Maria Jones</h3>
                      <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="blog-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-6">
        <h2 className="section-title">Recent Blog</h2>
      </div>
      <div className="col-md-6 text-start text-md-end">
        <a href="#" className="more">View All Posts</a>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
        <div className="post-entry">
          <a href="#" className="post-thumbnail"><img src="images/post-1.jpg" alt="Image" className="img-fluid" /></a>
          <div className="post-content-entry">
            <h3><a href="#">First Time Home Owner Ideas</a></h3>
            <div className="meta">
              <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
        <div className="post-entry">
          <a href="#" className="post-thumbnail"><img src="images/post-2.jpg" alt="Image" className="img-fluid" /></a>
          <div className="post-content-entry">
            <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
            <div className="meta">
              <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
        <div className="post-entry">
          <a href="#" className="post-thumbnail"><img src="images/post-3.jpg" alt="Image" className="img-fluid" /></a>
          <div className="post-content-entry">
            <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
            <div className="meta">
              <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Home;
