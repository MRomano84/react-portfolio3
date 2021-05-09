import React, { Component } from 'react';
import './gallery.css';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <img src="./images/passGen2.JPG" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Password Generator</h5>
                                    <p className="card-text">Using Vanilla JavaScript, this simple app lets you control input parameters to generate a uniqe
                                    and random password. Use the slider to select the length of password you would like. Then, make sure at least 1
                                    checkbox of the 4 character
                                    types are selected. Finally, click the 'GENERATE' button to generate a random password based on the parameters you
                                    selected.</p>
                                    <a href="https://github.com/MRomano84/password-generator" className="btn btn-outline-success btn-sm">See the Code!</a>
                                    <br></br>
                                    <a href="https://mromano84.github.io/password-generator/" className="btn btn-outline-danger btn-sm">Try Password Generator!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <img src="./images/truffShuff.JPG" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">TRUFFLE SHUFFLE</h5>
                                    <p className="card-text">Truffle Shuffle is an app that was created to help a user select a movie and a cocktail with the
                                    use of a random wheel. It was GROUP 1's submission for project #1 of the UNH Coding Bootcamp. The group was comprised
                                    of 4 members.</p>
                                    <ul>
                                        <li>Matthew Romano</li>
                                        <li>Laura Bullek</li>
                                        <li>Edward Huang</li>
                                        <li>Brian Jenkins</li>
                                    </ul>
                                    <a href="https://github.com/Laura-Bullek/Truffle-Shuffle" className="btn btn-outline-success btn-sm">See the Code!</a>
                                    <br></br>
                                    <a href="https://laura-bullek.github.io/Truffle-Shuffle/" className="btn btn-outline-danger btn-sm">Try TRUFFLE SHUFFLE!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <img src="./images/demo1.png" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Art Stack</h5>
                                    <p className="card-text">Art Stack is an online art gallery where artists can make a page and upload their artwork to show up in the
                                    gallery. Users
                                    can navigate to the gallery and, if they like a piece of artwork, can visit the artist's page where they can
                                    connect with the artist.</p>
                                    <ul>
                                        <li>Matthew Romano</li>
                                        <li>Tim Scott</li>
                                        <li>Wanda Gleason</li>
                                        <li>Edward Huang</li>
                                        <li>Brian Jenkins</li>
                                    </ul>
                                    <a href="https://github.com/TheTiiiim/art-stack" className="btn btn-outline-success btn-sm">See the Code!</a>
                                    <br></br>
                                    <a href="https://art-stack-0.herokuapp.com/" className="btn btn-outline-danger btn-sm">Try Art Stack!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                
            </div>
        );
    }
};
