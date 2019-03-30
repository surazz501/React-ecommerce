import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
          <Link to='/'>
          <img src={logo} alt="store" />
          </Link> 
          <ul class="navbar-nav align-items-center">
          <li className="nav-item ml-5"></li>
          <Link to='/' className="nav-link">products</Link>
          </ul>
          <Link to='/cart' className="ml-auto">
          <button>
              <i class="fa fa-cart-plus">Cart</i></button></Link>
           
           </nav>
        );
    }
}

export default Navbar;
