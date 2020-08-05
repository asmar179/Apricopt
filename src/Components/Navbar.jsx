import React from 'react';
 import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
   <>
<header class="header">
<a href="" className="logo"><img className="img" src={require('../images/minalog.png')}></img></a>
 <input class="menu-btn" type="checkbox" id="menu-btn" />
 <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
 <ul class="menu">
   <li  className="list-items"><button btn-por><NavLink exact activeClassName="active-link" id="port" className="items" to="/Portfolio">Portfolio</NavLink></button></li>
   <li  className="list-items"><button btn-cont><NavLink exact activeClassName="active-link" id="contact" className="items" to="/Contactus">Contact Us</NavLink></button></li>
   
 </ul>
</header>



   </>
    )
}
export default Navbar;