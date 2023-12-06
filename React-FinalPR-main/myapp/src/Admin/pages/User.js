import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/users`)
            .then((res) => {
                setUsers(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }, [])

  return (
    <div>
        <main id="main" className="main">
        <div className="pagetitle">
           
            <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item">Users</li>
            </ol>
            </nav>
        </div>{/* End Page Title */}
        <section className="section">
            <div className="row">
            <div className="col-lg-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">All Users</h5>
                    {/* Table with stripped rows */}
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            users.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>

                                            <Link to={`/admin/userdetails/${val.id}`}>
                                                <button className='btn btn-primary btn-sm'>View</button>
                                            </Link>


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

export default User
