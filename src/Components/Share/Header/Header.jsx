

import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
   return(
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse >
    
    <NavLink className='nav-color'
      to='/home' 
      active={true}
    >
      Home
    </NavLink>
    <NavLink className='nav-color' to='/about'>
      About
    </NavLink>
    <NavLink to='/'>
      Services
    </NavLink>
    <NavLink to='/'>
      Pricing
    </NavLink>

    <div className="flex md:order-2">
    <Button>
     <NavLink to='/login'>Login</NavLink>
    </Button>
    </div>
    <Navbar.Toggle />
  </Navbar.Collapse>
</Navbar>
   );
};

export default Header;