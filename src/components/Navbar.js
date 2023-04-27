import React, { Component } from 'react';
import logo from '../images/logo.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Refael David Hotel" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Rooms">Suites & Rooms</Link>
                        </li>
                    </ul>
                    <div className="login-signup">
                    <a href="/login">
                        <button className="reg login-btn">Login</button>
                    </a>
                    <a href="/signup">
                        <button className="regi signup-btn">Signup</button>
                    </a>                        
                    </div>
                </div>
                
            </nav>
        )
    }
}
