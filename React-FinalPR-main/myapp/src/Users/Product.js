import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Product.css';
import './Home.css'


const Product = () => {
    const[product,setProduct] = useState([]);
    const[category,setCategory] = useState([]);
    const[status,setStatus] = useState("");
   const [category_price, setCategory_price] = useState([]);
   const [sortData, setSortData] = useState("");
   
    let Price_Range = [
      {
        "price_name": "₹0 - ₹1999",
        "id": 1
      }, {
        "price_name": "₹2000 - ₹5000",
        "id": 2
      }, {
        "price_name": "₹10000 - ₹20000",
        "id": 3
      }, {
        "price_name": "₹30000 - ₹50000",
        "id": 4
      }, {
        "price_name": "₹60000 - ₹100000",
        "id": 5
      }
    ];

    let Marketstatus = [
      {
        "name": "trending",
        "id": 1
      }, {
        "name": "latest",
        "id": 2
      }, {
        "name": "upcomming",
        "id": 3
      }, {
        "name": "best",
        "id": 4
      }
    ]

    const MarketstatusData = (marketstatus) => {
      axios.get(`http://localhost:8000/products?marketstatus=${marketstatus}`)
        .then((res) => {
          setProduct(res.data);
        }).catch((err) => {
          return false;
        })
    }

    const handleSort = async (Sort) => {
      setSortData(Sort);
      if ("Low to High" === Sort) {
        let sort = await axios.get(`http://localhost:8000/products?_sort=price`);
        setProduct(sort.data)
      } else if ("High to Low" === Sort) {
        let sort = await axios.get(`http://localhost:8000/products?_sort=price&_order=desc`);
        setProduct(sort.data)
      } else if ("Reset" === Sort) {
        let sort = await axios.get(`http://localhost:8000/products`);
        setProduct(sort.data)
      }
    }

    const CategoryPriceData = async (price) => {
      let record = await axios.get(`http://localhost:8000/products?price_gte=${price[0]}&price_lte=${price[1]}`)
      setProduct(record.data);
    }
  
    const allProduct = () => {
        axios.get(`http://localhost:8000/products`)
          .then((res) => {
            setProduct(res.data)
          }).catch((err) => {
            console.log(err);
            return false;
          })
      }
    
      const allCategory = () => {
        axios.get(` http://localhost:8000/category`)
        .then((res) => {
           setCategory(res.data)
        }).catch((err) => {
          console.log(err);
          return false;
        })
      }

      const categoryFilter = (category) => {
        if(category === "all"){
           allProduct();
        }else{
           axios.get(`http://localhost:8000/products?category=${category}`).then((res)=>{
             setProduct(res.data);
             }).catch((err)=>{
                 console.log(err);  
                 return false; 
             })
         }
     }
  

     const SearchData = async(e) => {
       let data = await axios.get(`http://localhost:8000/products?q=${e}`);
       setProduct(data.data)
     }
   
     const onpagination = async (ans) => {
      if (ans === "F") {
        let pagination = await axios.get(`http://localhost:8000/products?_page=1&_limit=10`);
        setProduct(pagination.data)
      } else if (ans === "M") {
        let pagination = await axios.get(`http://localhost:8000/products?_page=2&_limit=10`);
        setProduct(pagination.data)
      }
      else if (ans === "L") {
        let pagination = await axios.get(`http://localhost:8000/products?_page=3&_limit=10`);
        setProduct(pagination.data)
      }
    }


     

 
  



     
      useEffect(() => {
          allProduct();
          allCategory();
        setCategory_price(Price_Range);
      }, [])
    
  return (
        <>
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Products</h1>
                </div>
              </div>
              <div className="col-lg-7">
              </div>
            </div>
          </div>
        </div>

        

      <div>
        <div className="product-section">
            <div className="container">
                <div className="row">
                <div className=' col-3 rounded-3' style={{ backgroundColor: "white" }} >
                <div className='border p-3 rounded-3'>
                {/* Start Column 1 */}
                <h5>Featured Products</h5><hr />
      
                   {
                          category.map((val)=>{
                              return (
                                  <>
                                   <input type="radio" name='category' style={{ width: "20px", outline: "none", borderRadius: "0px" }} onClick={ () => categoryFilter(val.category_name) }></input>
                                   <p className='my-0 ps-2 fs-5' style={{ display: "inline" }} onClick={ () => categoryFilter(val.category_name) }>{val.category_name}</p>
                                          <div className='category'>
                                          </div>      
                            </>
                              )
                          })
                    }
                    

                <input type="radio" name='category' style={{ width: "20px", outline: "none" }}  onClick={ () => categoryFilter("all")} ></input>
                <p className='my-0 ps-2 fs-5' style={{ display: "inline" }} onClick={ () => categoryFilter("All")} >All</p>

            
                 </div>
                 <div className='border p-3 mt-4 rounded-3'>
              <h5>Price Range</h5><hr />
              {
                category_price.map((val) => {
                  return (
                    <div className='d-flex py-2' key={val.price_name}>
                      <input type="radio" name='category' style={{ width: "20px", outline: "none", borderRadius: "0px" }} onClick={() => CategoryPriceData(val.price_name.split(" - ").map(price => price.replace("₹", "")))} ></input>
                      <p name='category' className='my-0 ps-2 fs-5' style={{ display: "inline" }} onClick={() => CategoryPriceData(val.price_name.split(" - ").map(price => price.replace("₹", "")))} >{val.price_name}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className='border p-3 mt-4 rounded-3'>
              <h5>Marketstatus</h5><hr />
              {
                Marketstatus.map((val) => {
                  return (
                    <div className='d-flex py-2' key={val.name}>
                      <input type="radio" name='marketstatus' style={{ width: "20px", outline: "none", borderRadius: "0px" }} onClick={() => MarketstatusData(val.name)} ></input>
                      <p name='marketstatus' className='my-0 ps-2 fs-5' style={{ display: "inline" }} onClick={() => MarketstatusData(val.name)} >{val.name}</p>
                    </div>
                  )
                })
              }
            </div>
                
         </div>
                   
          <div className='col-9 row'>
            <div className='col-2'>
                <input type='text' onChange={(e) => SearchData(e.target.value)}  id='search' style={{width:"250px",height:"45px",color:"black",border:"1px solid #3b5d50",borderRadius:"5px"}} placeholder='Search Your Data' class="rounded-pill"/>
               </div>
              
            
            <div className='col-7' style={{marginLeft:"240px"}}>
          
                <input type='text' onClick={() => handleSort("Low to High")} style={{width:"150px",height:"45px",color:"black",border:"1px solid #3b5d50",borderRadius:"5px",margin:"0 10px"}} placeholder='Low to High' class="rounded-pill"/>
                <input type='text' onClick={() => handleSort("High to Low")} style={{width:"150px",height:"45px",color:"black",border:"1px solid #3b5d50",borderRadius:"5px",margin:"0 10px"}} placeholder='Price: High to low' class="rounded-pill"/>
                <input type='text' onClick={() => handleSort("Reset")} style={{width:"150px",height:"45px",color:"black",border:"1px solid #3b5d50",borderRadius:"5px",marginLeft:"10px"}} placeholder='Price: Reset' class="rounded-pill"/>
                
          
            </div>
              {
                 product.map((val)=> {
                    return(
                    <figure class="snip1208 mr-2">
                    <img src={val.image} alt="sample66"/>
                    <figcaption>
                      <h3>{val.name}</h3>
                      <p>
                      {val.price}
                      </p>
                    <Link to={`/product_details/${val.id}`}><button style={{marginTop:"60px"}}>View More</button></Link>
                    </figcaption>
              </figure>
                    )
                 })
               }
                <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" onClick={() => onpagination()}>Previous</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination("F")}>1</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination("M")}>2</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination("L")}>3</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => onpagination()}>Next</a></li>
                </ul>
              </nav>
               </div>
            </div>
        </div>

    </div>

    </div>
          

          
    </>
  
   
  )
 
}

export default Product;
