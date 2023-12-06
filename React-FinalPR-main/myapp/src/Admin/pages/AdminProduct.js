import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const [category,setCategory] = useState([]);

  const [categoryname,setCategoryName] = useState("");
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [qty,setQty] = useState("");
  const [image,setImage] = useState("");
  const [description,setDescription] = useState("");
  const [marketstatus,setMarketStatus] = useState("");
  const [status,setStatus] = useState("");

  const handleSubmit = () => {
    axios.post(`http://localhost:8000/products`,{
        name : name,
        price : price,
        qty : qty,
        desc : description,
        image : image,
        category : categoryname,
        marketstatus : marketstatus,
        status : status
    })
    .then((res)=>{
        alert("Product successfully Add");
        setCategoryName("");
        setName("");
        setPrice("");
        setQty("");
        setDescription("");
        setImage("");
        setMarketStatus("");
        setStatus("");
    }).catch((err)=>{
        console.log(err);
        return false;
    })
    

}

useEffect(()=>{
  axios.get(`http://localhost:8000/category`)
  .then((res)=>{
      setCategory(res.data);
  }).catch((err)=>{
      console.log(err);
      return false;
  })
},[])





  return (
    <div>
       <main id="main" className="main">
  <div className="pagetitle">
    <h1>Form Layouts</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item">Forms</li>
        <li className="breadcrumb-item active">Layouts</li>
      </ol>
    </nav>
  </div>{/* End Page Title */}
  <section className="section">
    <div className="row">
      <div className="col-lg-6">
       
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add Product</h4>
            {/* Multi Columns Form */}
            <form className="row g-3">
              <div className="col-md-12">
                <label htmlFor="inputName5" className="form-label">Product Name</label>
                <input type="text" name="name" onChange={ (e) => setName(e.target.value) }  className="form-control" id="inputName5" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail5" className="form-label">Product Price</label>
                <input type="number" name="price" onChange={ (e) => setPrice(e.target.value) } className="form-control" id="inputEmail5" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword5" className="form-label">Qty</label>
                <input type="number" name="qty" onChange={ (e) => setQty(e.target.value) } className="form-control" id="inputPassword5" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress5" className="form-label">Product Image Url</label>
                <input type="text" name="image" onChange={ (e) => setImage(e.target.value) }  className="form-control" id="inputAddres5s" />
              </div>
              <div className="col-6">
                <label htmlFor="inputAddress2" className="form-label">Product Description</label>
                <input  type="text" name="description" onChange={ (e) => setDescription(e.target.value) } className="form-control" id="inputAddress2" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Category</label>
                <select name="category" onChange={ (e) => setCategoryName(e.target.value) } className="form-control">
                                        <option value="">Choose...</option>
                                        {
                                            category.map((item)=>{
                                                return (
                                                    <option value={item.category_name}>{item.category_name}</option>
                                                )
                                            })
                                        }
                                    </select>
      
              </div>
              <div className="col-md-6">
                <label htmlFor="inputZip" className="form-label">Select Market Status</label>
                <select name="marketstatus" onChange={ (e) => setMarketStatus(e.target.value) } className="form-control">
                                        <option value="">Chooce...</option>
                                        <option value="trending">Trending</option>
                                        <option value="latest">Latest</option>
                                        <option value="upcomming">Upcomming</option>
                                        <option value="best">Best</option>
                                    </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">Status</label>
                <select  onChange={ (e) => setStatus(e.target.value) } className="form-control">
                                        <option value="">Chooce...</option>
                                        <option value="instock">Instock</option>
                                        <option value="outstock">Outstock</option>
                                    </select>
              </div>
            
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={ () => handleSubmit() } >Submit</button>
                <p className='pt-3'>View all product? <Link to={`/admin/viewproduct`}>Viewproduct</Link></p>
              </div>
            </form>{/* End Multi Columns Form */}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

    </div>
  )
}

export default AdminProduct
