import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar w-100">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Marketplace</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100">
                        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link text-white" to="/register">Sign up</Link>
                        <Link className="nav-link text-white" to="/login">Log in</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
