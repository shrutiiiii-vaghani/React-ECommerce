import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './Users/Home';
import AdminLogin from './Admin/pages/AdminLogin';
import AdminRegister from './Admin/pages/AdminRegister';
import AdminLayout from './Admin/Component/AdminLayout';
import AdminDashboard from './Admin/pages/AdminDashboard';
import AdminHeader from './Admin/Component/AdminHeader';
import AdminProduct from './Admin/pages/AdminProduct';
import AdminCateory from './Admin/pages/AdminCateory';
import AdminViewproduct from './Admin/pages/AdminViewproduct';
import Layout from './Components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from './Users/Product';
import ProductDetails from './Users/ProductDetails';
import Cart from './Users/Cart';
import Login from './Users/Login';
import Register from './Users/Register';
import UserDetails from './Admin/pages/UserDetails';
import AdminProfile from './Admin/pages/AdminProfile';
import User from './Admin/pages/User';
import AdminSlider from './Admin/pages/AdminSlider';
import Forget from './Users/Forget';
import Otp from './Users/Otp';
import Newpassword from './Users/Newpassword';
import Contact from './Admin/pages/AdminContact';


function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/product' element={<Product/>}></Route>
                    <Route path='/product_details/:productId' element={<ProductDetails/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/forget' element={<Forget/>}></Route>
                    <Route path='/otp' element={<Otp/>}></Route>
                    <Route path='/newpassword' element={<Newpassword/>}></Route>
            </Route>
            <Route  element={<AdminLayout/>}>
                <Route path='/admin/header' element={<AdminHeader/>}></Route>
                <Route path='/admin/slider' element={<AdminSlider/>}></Route>
                <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
                <Route path='/admin/category' element={<AdminCateory/>}></Route>
                <Route path='/admin/product' element={<AdminProduct/>}></Route>
                <Route path='/admin/viewproduct' element={<AdminViewproduct/>}></Route>
                <Route path='/admin/userdetails/:userid' element={<UserDetails/>}></Route>
                <Route path='/admin/adminprofile' element={<AdminProfile/>}></Route>
                <Route path='/admin/user' element={<User/>}></Route>
                <Route path='/admin/contact' element={<Contact/>}></Route>
            </Route>
                <Route path='/admin' element={<AdminLogin/>}></Route>
                <Route path='/admin/register' element={<AdminRegister/>}></Route>

        </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
