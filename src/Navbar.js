import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';


function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10  mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              <NavLink  to='/' className="navbar-brand" >
                  Navbar
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink to='/'  className="nav-link" >
                  Home
                </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink  to='/about' className="nav-link">
                About
                </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink   to='/service' className="nav-link">
                 service
                </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/contact'  className="nav-link" >
             contact
                </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    <Outlet />
    
    </>
    
  );
  
}

export default Navbar;
