import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import Userauth from './Userauth';  
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const[totalPrice,setTotalPrice] = useState(0);


  const calculaterTotalPrice = () => {
    let total = 0;
    cart.forEach((item)=>{
       total += item.qty * item.price;
    });
    setTotalPrice(total);
  }

   const productDelete = (id) => {
     axios.delete(`http://localhost:8000/carts/${id}`)
     .then((res)=>{
        alert("product succesfully delete");
        getAllCart();
     }).catch((err)=>{
         console.log(err);
         return false;
     })
   }
  
    const qtyChange = (id,qty) => {
      const updateCart = cart.map(item => {
        if(item.id === id){
          if(qty >= 0){
            return{...item,qty:parseInt(qty)}
          }
        }
        return item;
      }) 
    

     let data = updateCart.map((item)=>{
      if(item.id === id){
        axios.patch(`http://localhost:8000/carts/${item.id}`,{
          qty : item.qty,
        }).then((res)=>{
           getAllCart();
        }).catch((err)=>{
           return false;
        })
      }
      return item;
     })
     setCart(data)
    }

  //cart in show product
  const getAllCart = () => {
      if(!Userauth()){
          alert("Please Login")
          navigate('/product');
      }else{
          axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`) 
          .then((res) => {
              setCart(res.data)
          }).catch((err) => {
              console.log(err);
              return false;
          })  
      }
     
  }

  useEffect(() => {
      getAllCart();
  }, [])

  useEffect(()=>{
    calculaterTotalPrice();
  },[cart])


  return (
    <div>
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Cart</h1>
                </div>
              </div>
              <div className="col-lg-7">
              </div>
            </div>
          </div>
        </div>

            <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {
                      cart.map((val)=>{
                       
                        return(
                          <tr>
                          <td className="product-thumbnail">
                            <img src={val.image} alt="Image" className="img-fluid" />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{val.name}</h2>
                          </td>
                          <td>{val.price}</td>
                          <td>
                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: 120}}>
                              {/* <div className="input-group-prepend">
                                <button className="btn btn-outline-black decrease" type="button" >−</button>
                              </div> */}
                              {/* <input type="number" className="form-control text-center quantity-amount"  value={val.qty} 
                              placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" /> */}
                              <input  type="number" onChange={(e) => qtyChange(val.id,e.target.value)} value={val.qty} className="form-control text-center quantity-amount"></input>
                              {/* <div className="input-group-append">
                                <button className="btn btn-outline-black increase" type="button" onClick={(e) => qtyChange(val.id,e.target.value)} value={val.qty}>+</button>
                              </div> */}
                            </div>
                          </td>
                          <td>{val.qty * val.price}</td>
                          <td><a href="#" className="btn btn-black btn-sm" type='button' onClick={() => productDelete(val.id)} >X</a></td>
                        </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-black">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Final Total:</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">{totalPrice}</strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-black btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                    </div>
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

export default Cart
