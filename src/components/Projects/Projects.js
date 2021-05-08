import React, { Component } from 'react';
import './gallery.css';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="empty col s12" />
                    {/* PASSWORD GENERATOR */}
                    <div className="card transparent col s12 text">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator img-fluid" src="./images/passGen2.JPG" alt="Password Generator" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator app">Password Generator<i className="material-icons grey-text right more_vert">More
                                Information</i></span>
                            <p><a href="https://mromano84.github.io/password-generator/">Try out the Password Generator!</a></p>
                            <p><a href="https://github.com/MRomano84/password-generator">See the code!</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Password Generator<i className="material-icons right">close</i></span>
                            <p>Using Vanilla JavaScript, this simple app lets you control input parameters to generate a uniqe
                                and random password.</p>
                            <p>Use the slider to select the length of password you would like. Then, make sure at least 1
                            checkbox of the 4 character
                                types are selected.</p>
                            <p>Finally, click the 'GENERATE' button to generate a random password based on the parameters you
                                selected.</p>
                        </div>
                    </div>
                    <div className="empty col s12" />
                </div>
                <br></br>
                <div className="row">
                    <div className="empty col s12" />
                    {/* TRUFFLE SHUFFLE */}
                    <div className="card transparent col s12">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator img-fluid" alt="" src="./images/truffShuff.JPG" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator app">TRUFFLE SHUFFLE<i className="material-icons right grey-text more_vert">More
                                Information</i></span>
                            <p><a href="https://laura-bullek.github.io/Truffle-Shuffle/">Click here to try TRUFFLE SHUFFLE!</a>
                            </p>
                            <p><a href="https://github.com/Laura-Bullek/Truffle-Shuffle">See the code!</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">TRUFFLE SHUFFLE<i className="material-icons right">close</i></span>
                            <p>Truffle Shuffle is an app that was created to help a user select a movie and a cocktail with the
                            use of a random wheel.
                            </p><p>It was GROUP 1's submission for project #1 of the UNH Coding Bootcamp. The group was comprised
                                of 4 members.</p>
                            <ul>
                                <li>Matthew Romano</li>
                                <li>Laura Bullek</li>
                                <li>Edward Huang</li>
                                <li>Brian Jenkins</li>
                            </ul>
                        </div>
                    </div>
                    <div className="empty col s12" />
                </div>
                <br></br>
                <div className="row">
                    <div className="empty col s12" />
                    {/* Art Stack */}
                    <div className="card transparent col s12">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator img-fluid" alt="" src="./images/demo1.png" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator app">Art Stack<i className="material-icons grey-text right more_vert">More
                                Information</i></span>
                            <p><a href="https://art-stack-0.herokuapp.com/">Try out the Art Stack!</a></p>
                            <p><a href="https://github.com/TheTiiiim/art-stack">See the code!</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Art Stack<i className="material-icons right">close</i></span>
                            <p>Art Stack is an online art gallery where artists can make a page and upload their artwork to show up in the
                                gallery. Users
                                can navigate to the gallery and, if they like a piece of artwork, can visit the artist's page where they can
                                connect with the artist.
                            </p>
                        </div>
                    </div>
                    <div className="empty col s12" />
                </div>
            </div>
        );
    }
};
