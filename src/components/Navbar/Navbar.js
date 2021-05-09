import React, { Component } from 'react';
import './nav.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid row">
                    <div className="col-6">
                        <a className="navbar-brand" href="/">Matt Romano</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse col-6" id="navbarNav">
                        <ul className="navbar-nav nav-links">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="http://MRomano84.github.io/react-portfolio3/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="http://MRomano84.github.io/react-portfolio3/projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="http://MRomano84.github.io/react-portfolio3/contact">Contact Info</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};