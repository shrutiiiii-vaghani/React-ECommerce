import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AdminViewproduct = () => {

  const [product, setProduct] = useState([]);
  const [marketstatus, setMarketStatus] = useState(["trending", "latest", "upcomming", "best"])
  const [selectMarketStatus,setSelectMarketStatus] = useState("");
 
  const [status,setStatus] = useState("");

  
  const changeMarketStatus = (upid,value) => {
          axios.patch(`http://localhost:8000/products/${upid}`,{
              marketstatus : value
          }).then((res)=>{
              alert("Status successfully update");
          }).catch((err)=>{
              return false;
          })
      }
     
      const inStock = (upid,value) => {
          axios.patch(`http://localhost:8000/products/${upid}`,{
              status : value
          }).then((res)=>{
              alert("Status successfully update");
              getAllProduct();
          }).catch((err)=>{
              return false;
          })
      }

      const outStock = (upid,value) => {
          axios.patch(`http://localhost:8000/products/${upid}`,{
              status : value
          }).then((res)=>{
             alert("Status successfully update");
              getAllProduct();
          }).catch((err)=>{
              return false;
          })
      }

      const getAllProduct = () => {
          axios.get(`http://localhost:8000/products`)
          .then((res) => {
              setProduct(res.data);
          }).catch((err) => {
              console.log(err);
              return false;
          })
      }

      const deleteData = (id) => {
        axios.delete(`http://localhost:8000/products/${id}`)
        .then((res)=>{
          alert("product succesfully delete");
          getAllProduct();
       }).catch((err)=>{
           console.log(err);
           return false;
       })
      }
      
  useEffect(() => {
      getAllProduct();
  }, [])




  return (
    <div>
      <main id="main" className="main">
    <div className="pagetitle">
      <h1>Data Tables</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item">Tables</li>
          <li className="breadcrumb-item active">Data</li>
        </ol>
      </nav>
    </div>{/* End Page Title */}
    <section className="section">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className='col-12 d-flex'>
                 <div className='col-6'>
                 <p className="card-title">Viewproduct</p>
                 </div>
                 <div className='col-6 d-flex justify-content-end'>
                 <button className='mt-3 mb-3' style={{backgroundColor:"#4154f1",border:"1px solid #4154f1",borderRadius:"5px",color:"white"}}>
                  <Link  to={`/admin/product`} className="text-white" style={{textDecoration:"none"}}>Add Product</Link></button>
                 </div>

              </div>
              {/* Table with stripped rows */}
              <table className="table datatable">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Markrt Status</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                     product.map((val) => {
                      return (
                          <tr>
                              <td>{val.id}</td>
                              <td>{val.name}</td>
                              <td>{val.price}</td>
                              <td width='20%'>
                                  <select  onChange={ (e) => changeMarketStatus(val.id,e.target.value) } className='form-control'>
                                      <option value="">select market status</option>
                                      {
                                          marketstatus.map((item) => {

                                              return (val.marketstatus === item ? <option value={val.marketstatus} selected>{val.marketstatus}</option> : <option>{item}</option>)

                                          })
                                      }
                                  </select>
                              </td>
                              <td>
                                  {
                                    val.status === "instock" ? (<button onClick={ () => inStock(val.id,"outstock") } className='btn btn-success btn-sm'>Instock</button>)  : (<button onClick={ () => outStock(val.id,"instock") } className='btn btn-danger btn-sm'>Outstock</button>)
                                  }
                                  
                              </td>
                              <td>
                              <i class="bi bi-trash3-fill" style={{fontSize:"20px",marginLeft:"10px"}} onClick={() => deleteData(val.id)}></i>
                              </td>
                          </tr>
                      )
                  })
                  }
                </tbody>
              </table>
              {/* End Table with stripped rows */}
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
    </div>
  )
}

export default AdminViewproduct
