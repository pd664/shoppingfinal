import React, { useState, useEffect } from 'react'
import '../../static/components/header/header.css';
import { useSelector, useDispatch } from "react-redux";
import { PiShoppingBagOpenFill, PiShoppingCartSimpleFill } from 'react-icons/pi'

import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { setCategory } from '../../reduxComponents/action/index'
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch()
  let navigate = useNavigate(); 
  const getAllCategories = useSelector((state) => state.allProducts.data[0])
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    if (getAllCategories.products.length) {
      getAllCategories.products.map((item, key) => {
        if (!allCategories.includes(item.category)) {
          // console.log("item.category", item.category)
          setAllCategories([item.category, ...allCategories]);
        }
      });
    }
  }, [allCategories]);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"><Link to="/"><PiShoppingBagOpenFill size={50} /></Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
      {allCategories.map((item, key) => {
            return (
              <li className="nav-item">
          <a className="nav-link" aria-current="page"><Link to={`products/${item}`}>{item.toUpperCase()}</Link></a>
        </li>
            );
          })}
      </ul>
      {/* <div className='header_search_cont'>
      <form className="d-flex header_form container-fluid">
        <input className="form-control header_search" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="resultBox"></div>
      </div> */}
      <div className='d-flex'>
      <Link to="cart">
            <button className="sign_up_btn btn"><PiShoppingCartSimpleFill
              className="cart_logo"
              size={30}
            />Cart</button>
          </Link>
          {/* <div className='header_cred_btn'>
             <button className='login header_btn'>Login</button>
           </div>
           <div className='header_cred_btn'>
             <button className='sign_up header_btn'>SignUp</button>
           </div> */}
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header
