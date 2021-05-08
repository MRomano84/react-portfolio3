import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid row">
                    <div className="col-6">
                        <a className="navbar-brand" href="#top">Matt Romano</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse col-6" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="./index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="./portfolio.html">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="./contact.html">Contact Info</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};