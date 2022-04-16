import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navClass p-3">
            <div class="container">
                <Link to='/' className='fs-4'>Aesthetic travel agency</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/home'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/logout'>Logout</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;