

import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Header.css'


const Header = () => {
  const {user} = useContext(AuthContext)
   return(
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand >
    <img
      src="https://seeklogo.com/images/H/health-care-and-fitness-logo-E7D64C603C-seeklogo.com.png"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Health & Fitness
    </span>
  </Navbar.Brand>
  {
    user?.uid?

    <img
    src= {user?.photoURL}
    className=" flex md:order-2 mr-3 h-6 sm:h-9"
    alt=''
  />
  :
  < FaUserAlt/>
    
  }
  <Navbar.Toggle />
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
    <NavLink >
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