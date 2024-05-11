import React, { memo, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/NavMenu.css';
import RoutePath from '../routes/RoutePath';

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 " container light>
        <NavbarBrand tag={Link} to="/"><img src='/imgs/logo.png' width={40} alt='logo'/> REVIBECO</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row justify-content-between" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow align-items-center">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to={RoutePath.HOME}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to={RoutePath.ABOUT}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to={RoutePath.SHOP}>Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to={RoutePath.BLOG}>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to={RoutePath.CONTACT}>Contact</NavLink>
            </NavItem>
          </ul>
          <ul className="navbar-nav flex-row flex-sm-row justify-content-center gap-3">
            <NavItem>
              <NavLink tag={Link} className="text-dark btn btn-light header-btn" to="/login"><i className="bi bi-cart-check-fill"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark btn bt btn-light header-btn" to="/login"><i className="bi bi-bag-heart-fill"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark btn px-3 header-btn-login" to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark btn px-3 header-btn-register" to="/register">Register</NavLink>
            </NavItem>
            <NavItem >
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret className="text-dark pt-2 header-dropdown bg-light border-0"> 
                  <img src='/imgs/logo.png' alt='' width={25}/> Hello Nhon
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/action1"> <Link tag={Link} className="text-dark text-decoration-none" to="/register">Register</Link></DropdownItem>
                  <DropdownItem tag={Link} to="/action2">Action 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/action3">Log out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>

          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default memo(NavMenu);
