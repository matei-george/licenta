import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';
import "../../Components/reset.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

export const Navbar = () => {

    const [menu,setMenu]=useState("shop");

  return (
    <nav className='navbar-container'>
        <div className='navbar__logo'>
            <img src={logo} alt='Shop Logo'/>
            <p className='navbar__title'>Components Shop</p>
        </div>
        <ul className='navbar__menu'>
            <li className='menu__item' onClick={()=>{setMenu("acasa")}}><Link to='/'>Acasa</Link>{menu==="acasa"?<hr/>:<></>}</li>
            <li className='menu__item' onClick={()=>{setMenu("componente")}}><Link to='/componente'>Componente</Link>{menu==="componente"?<hr/>:<></>}</li>
            <li className='menu__item' onClick={()=>{setMenu("pagini")}}><Link to='/pagini'>Pagini</Link>{menu==="pagini"?<hr/>:<></>}</li>
            <li className='menu__item' onClick={()=>{setMenu("despre")}}><Link to='/despre'>Despre</Link>{menu==="despre"?<hr/>:<></>}</li>
            <li className='menu__item' onClick={()=>{setMenu("contact")}}><Link to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
        </ul>
        <div className="navbar__login-card">
          <Link to='/login'><button className='login__button'>Login</button></Link>
           <Link to='/cos'><img src={cart_icon} alt='Cart Icon'/></Link> 
            <div className="navbar__counter">0</div>
        </div>
    </nav>
  )
}
