import React from 'react';
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function NavLayout() {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
            <a className='navbar-brand' href='/'>CRC-Training</a>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportContent" aria-controls='navbarSupportedContent' aria-expanded="false" aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link className="nav-link" aria-current="page" to="/product">
                            Product
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" aria-current="page" to="/java">
                            Java
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <Outlet />
    </>
  );
}