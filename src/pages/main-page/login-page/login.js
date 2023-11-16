import React from "react";
import './login.css';
import { Carousel } from "react-bootstrap";


class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false,
            errMsg: "",
            dataFilter: [],
            books: [],
            searchVal: ""
        };
    }

    render() {
        return (
            <div className="container">
                <div className="login">
                    <div className="container">
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" /><br />
                        <input type="checkbox" /><span>Remember me</span>
                        <a href="/forgot-password">Forgot password?</a>
                        <button>Sign In</button>
                        <div className="TagClass">
                            <hr /><p>Or Connect With</p><hr />
                        </div>

                        <ul>
                            <li><i className="fab fa-facebook-f fa-2x"></i></li>
                            <li><i className="fab fa-twitter fa-2x"></i></li>
                            <li><i className="fab fa-github fa-2x"></i></li>
                            <li><i className="fab fa-linkedin-in fa-2x"></i></li>
                        </ul>
                        <div className="clearfix"></div>
                        <div className="copyright">&copy;2023</div>
                    </div>
                </div>
                <div className="imgCar">
                    <div className="slider-container">
                        <div className="slide">
                            <img src="1.jpg" />
                        </div>
                        {/* <div className="slide">
                            <img src="2.jpg" />
                        </div>
                        <div className="slide">
                            <img src="3.jpg" />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default login;