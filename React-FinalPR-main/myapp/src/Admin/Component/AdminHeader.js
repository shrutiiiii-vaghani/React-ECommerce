import React, { useEffect, useState }  from 'react'
import { NavLink , useNavigate} from 'react-router-dom';


const AdminHeader = () => {
  const navigate = useNavigate();
  const [admin,setAdmin] = useState({}); 
  
  const logout = () => {
      localStorage.removeItem('adminUser');
      navigate('/admin');
  }

  useEffect(()=>{
      let data = JSON.parse(localStorage.getItem('adminUser'));
      if(!data){
          navigate('/admin')
      }
      setAdmin(data)    
  },[])

  return (
    <div>
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <img src="../assets/img/logo.png" alt />
        <span className="d-none d-lg-block">NiceAdmin</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>
    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i className="bi bi-search" /></button>
      </form>
    </div>
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search" />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell" />
            <span className="badge bg-primary badge-number">4</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning" />
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-x-circle text-danger" />
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-check-circle text-success" />
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-info-circle text-primary" />
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text" />
            <span className="badge bg-success badge-number">3</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="../assets/img/messages-1.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="../assets/img/messages-2.jpg" alt className="rounded-circle" />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img src="../assets/img/messages-3.jpg" alt className="rounded-circle" />
                <div>
                  <h4>David Muldon</h4>
                  <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>
          </ul>{/* End Messages Dropdown Items */}
        </li>{/* End Messages Nav */}
        <li className="nav-item dropdown pe-3">
          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="../assets/img/7863.jpg" alt="Profile"/>
            <span className="d-none d-md-block dropdown-toggle ps-2">Shruti Vaghani</span>
          </a>{/* End Profile Iamge Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Shruti Vaghani</h6>
              <span>React Developer</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-person" />
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-gear" />
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i className="bi bi-question-circle" />
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right" />
                <span onClick={ () => logout() }>Log Out</span>
              </a>
            </li>
          </ul>{/* End Profile Dropdown Items */}
        </li>{/* End Profile Nav */}
      </ul>
    </nav>{/* End Icons Navigation */}
  </header>

  <div>
 <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <NavLink className="nav-link collapsed" to={`/admin/dashboard`}>
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </NavLink>
    </li>{/* End Dashboard Nav */}
   {/* End Components Nav */}
    <li className="nav-item">
      <NavLink className="nav-link collapsed"  to={`/admin/user`}>
        <i className="bi bi-journal-text" /><span>User</span>
      </NavLink>
    </li>{/* End Forms Nav */}
    <li className="nav-item">
      <NavLink className="nav-link collapsed"  to={`/admin/product`}>
        <i className="bi bi-layout-text-window-reverse" /><span>Product</span>
      </NavLink>
   
    </li>
    <li className="nav-item">
      <NavLink className="nav-link collapsed" to={`/admin/viewproduct`}>
        <i className="bi bi-grid" />
        <span>View Product</span>
      </NavLink>
    </li>
   {/* End Tables Nav */}
    <li className="nav-item">
      <NavLink className="nav-link collapsed"  to={`/admin/category`}>
        <i className="bi bi-bar-chart" />
        <span>Category</span>
      </NavLink>
    </li>{/* End Charts Nav */}
    <li className="nav-item">
      <NavLink className="nav-link collapsed"  to={`/admin/slider`}>
        <i className="bi bi-gem" /><span>Slider</span>
      </NavLink>
  
    </li>{/* End Icons Nav */}
    <li className="nav-heading">Pages</li>
    <li className="nav-item">
      <NavLink className="nav-link collapsed" to={`/admin/adminprofile`}>
        <i className="bi bi-person" />
        <span>Profile</span>
      </NavLink>
    </li>{/* End Profile Page Nav */}
    {/* End F.A.Q Page Nav */}
    <li className="nav-item">
      <NavLink className="nav-link collapsed" to={`/admin/contact`}>
        <i className="bi bi-envelope" />
        <span>Contact</span>
      </NavLink>
    </li>{/* End Contact Page Nav */}
    <li className="nav-item">
      <NavLink className="nav-link collapsed" to={`/admin/register`}>
        <i className="bi bi-card-list" />
        <span>Register</span>
      </NavLink>
    </li>{/* End Register Page Nav */}
    <li className="nav-item">
      <NavLink className="nav-link collapsed" to={`/admin`}>
        <i className="bi bi-box-arrow-in-right" />
        <span>Login</span>
      </NavLink>
    </li>{/* End Login Page Nav */}
  
  
  </ul>
</aside>

        </div>
</div>



  )
}

export default AdminHeader;
