import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import checkUserLogin from './Userauth';


const ProductDetails = () => {

    const navigate = useNavigate();

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const getSingleProductRecord = async () => {
        try {
            let single = await axios.get(`http://localhost:8000/products/${productId}`);
            if (single) {
                setProduct(single.data)
            } else {
                console.log("record not fetch");
                return false;
            }

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const Addtocart = (productId) => {
        if (!checkUserLogin()) {
            alert("Please Login");
            navigate('/login');
        } else {
            axios.get(`http://localhost:8000/carts?productId=${productId}&userId=${checkUserLogin().id}`)
                .then((res) => {
                    if (res.data.length > 0) {
                        alert("Product already add in cart")
                        navigate('/product')
                        return false
                    } else {
                        axios.get(`http://localhost:8000/products/${productId}`)
                            .then((res) => {
                                console.log(res.data);
                                axios.post(`http://localhost:8000/carts`, {
                                    name: res.data.name,
                                    price: res.data.price,
                                    qty: res.data.qty,
                                    image: res.data.image,
                                    category: res.data.category,
                                    productId: productId,
                                    userId: checkUserLogin().id
                                }).then((res) => {
                                    alert("Product successfully add");
                                     navigate('/cart');
                                }).catch((err) => {
                                    console.log(err);
                                    return false;
                                })
                            }).catch((err) => {
                                console.log(err);
                                return false;
                            })
                    }
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        }
    }

    useEffect(() => {
        getSingleProductRecord();
    }, []);

    return (
        <>

      <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Product Details</h1>
                </div>
              </div>
              <div className="col-lg-7">
              </div>
            </div>
          </div>
        </div>
        
           
           
        <div className='container'>       
           <div className='pd d-flex' style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",margin:"50px 0"}}>
            <div className="col-12 row bg-white" style={{borderRadius:"15px",border:"1px solid #3b5d50"}}>
                <div className="col-6">
                <img src={product.image} className="img-fluid rounded-start ms-5" alt="..." style={{width:"380px"
                }} />
                </div>
                <div className="col-6 p-5 ps-0">
                               <h2 className="card-title pb-2" style={{color:"#3b5d50",fontWeight:"600"}}>{product.name}</h2>
                                    
                                        <h4 className="card-title pb-2" style={{marginTop:"8px"}}> {product.price}</h4>
                                       
                                        <p className="card-text pb-2" style={{marginTop:"15px"}}>Worrying is like a rocking chair, it gives you something to <br/>do, but it gets you nowhere.</p>
                  <button type="button" onClick={ () => Addtocart(product.id) } className='btn btn-success w-50'style={{backgroundColor:"#3b5d50"}}>Add To Cart</button>
                                       
                </div>
            </div>
        </div>

            </div>
        </>
    )
}

export default ProductDetails