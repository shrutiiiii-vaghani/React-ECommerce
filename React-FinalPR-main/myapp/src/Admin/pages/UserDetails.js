import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const { userid } = useParams();

    const [cart, setCart] = useState([])
    const [user,setUser] = useState("");
  
    const getUserDetails = () => {
      axios.get(`http://localhost:8000/users/${userid}`)
        .then((res) => {
          setUser(res.data)
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
  
    const getUserCartDetails = () => {
      axios.get(`http://localhost:8000/carts?userId=${userid}`)
        .then((res) => {
          setCart(res.data);
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
  
    useEffect(() => {
      getUserCartDetails();
      getUserDetails();
    }, [])

    
  return (
    <div>
  <main id="main" class="main">

<div class="pagetitle">
  <h1>Blank Page</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item">Users</li>
      <li class="breadcrumb-item active">UserDetails</li>
    </ol>
  </nav>
</div>
      <section className="section">
      <h4 className='p-2'>User Name : {user.name}</h4>
          <h4 className='p-2'>User Email : {user.email}</h4>
  <div className="row">
    {
        cart.map((val)=>{
            return(
              <div className="card p-4 mb-3" style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={val.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body ps-4">
                    <h4 className="card-title">{val.name}</h4>
                    <hr />
                    <h4 className="card-title">Price :- {val.price}</h4>

                  </div>
                </div>
              </div>
            </div>
              //   <div className="col-lg-6">
              //   <div className="card">
              //     <div className="card-body">
              //       <h5 className="card-title">{val.name}</h5>
              //       <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
              //     </div>
              //   </div>
              // </div>
            )
        })
    }
 
  </div>
</section>
    </main>

    </div>
  )
}

export default UserDetails
