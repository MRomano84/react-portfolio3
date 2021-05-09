import React, { Component } from 'react';
import './c_info.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="container card mb-3">
                <img src="../../../images/multnomah-falls.jpg" className="card-img-top" alt="Multnomah Falls" />
                <div className="card-body">
                    <h3 className="card-title">Contact Info</h3>
                    <p className="card-text">"You can't untell a tale, you can't out slow a snail."</p>
                    <h6 className="card-tittle">~Bobby Bird</h6>
                </div>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><img src="./images/icons/github.png" alt="github" /><span></span><a href="https://github.com/MRomano84">Github</a></li>
                        <li className="list-group-item"><img src="./images/icons/linkedin-logo.png" alt="LinkedIn" /><span></span><a href="https://www.linkedin.com/in/matt-romano-443432a0/">LinkedIn</a></li>
                        <li className="list-group-item"><img src="./images/icons/resume.png" alt="resume" /><span></span><a href="https://drive.google.com/file/d/1RlIWA_RWLRtkMLoe8rMlegonQuzN1hFV/view?usp=sharing">My Resume</a></li>
                    </ul>
                    <h6>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></h6>
                </div>
            </div>
        );
    }
};
