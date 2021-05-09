import React, { Component } from 'react';
import './about_me.css';

export default class Home extends Component {
    render() {
        return (
            <div className="container card mb-3">
                <div className="row g-0">
                    <div className="col">
                        <img className="image-fluid" src="../../../images/193x273.JPG" alt="Me Fishing" />
                        <p className="card-text"><small className="text-muted">Merrimack River, Hooksett, NH</small></p>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">About Me</h5>
                            <p className="card-text">I'm 36 years old and live in Manchester, NH. I'm originally from Tacoma, WA and moved to New England in May 2014.
                            I am a veteran of Operation Iraqi Freedom and served 6 years in the Army.
                            I am currently attending the UNH Coding Bootcamp in hopes of becoming a full-stack web developer.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
