import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';
const AdminCateory = () => {

  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [isedit, setIsEdit] = useState("");
  const handleSubmit = () => {
      if (isedit) {
          axios.put(`http://localhost:8000/category/${isedit}`, {
              category_name : category
          })
              .then((res) => {
                  alert("Category successfully Update");
                  setCategory("");
                  setIsEdit("");
                  getUser();
              }).catch((err) => {
                  console.log(err);
                  return false;
              })
      } else {
          axios.post(`http://localhost:8000/category`, {
              category_name : category
          }).then((res) => {
                  alert("Category successfully add");
                  setCategory("");
                  getUser();
              }).catch((err) => {
                  console.log(err);
                  return false;
              })
      }
  }

  const getUser = () => {
      axios.get(` http://localhost:8000/category`)
          .then((res) => {
              setCategoryData(res.data);
          }).catch((err) => {
              console.log(err);
              return false;
          })
  }

  const deleteData = (id) => {
      axios.delete(` http://localhost:8000/category/${id}`)
          .then((res) => {
              alert("Category delete");
               setCategory("");
              getUser();
          }).catch((err) => {
              console.log(err);
              return false;
          })
  }

  const editData = (id) => {
    console.log("Editing data for ID:", id); 
      axios.get(`http://localhost:8000/category/${id}`)
          .then((res) => {
              setCategory(res.data.category);
              setIsEdit(id)
          }).catch((err) => {
              console.log(err);
              return false;
          })
  }

  useEffect(() => {
      getUser();
  }, [])
  
  return (
    <div>
        <main id="main" class="main">
          
            <div class="pagetitle">
                    <nav>
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NavLink to={`admin/dashboard`}>Home</NavLink></li>
                        <li class="breadcrumb-item">Category</li>
                        </ol>
                    </nav>
             </div>
            <div class="card col-3">
            <div class="card-body">
            <td>Category :-</td>
                        <td><input type="category" onChange={(e) => setCategory(e.target.value)} value={category} name="category" placeholder="Enter category" /></td>
                        <tr>
                        <td></td>
                        <td>
                            {
                                isedit ? (<input type="button" onClick={() => handleSubmit()} value="Edit" style={{marginRight:"50px",marginTop:"10px",backgroundColor:"#4154f1",border:"1px solid #4154f1",borderRadius:"5px",color:"white"}} />) : (<input type="button" onClick={() => handleSubmit()} value="submit" style={{marginRight:"50px",marginTop:"10px",backgroundColor:"#4154f1",border:"1px solid #4154f1",borderRadius:"5px",color:"white"}}/>)
                            }
                        </td>
                    </tr>
            </div>
          </div>
          

          <table border={1} class="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Category</td>
                        <td>Action</td>
                    </tr>
                    {
                        categoryData.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.category_name}</td>
                                    <td>


                                        <button onClick={() => deleteData(val.id)} style={{marginRight:"10px"}}><i class="bi bi-trash3"></i></button>
                                        <button onClick={() => editData(val.id)}><i class="bi bi-pencil-square"></i></button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
       

    
        </main>
    </div>
  )
}

export default AdminCateory
