import React from 'react';
import { Component } from "react";
import logo from './img/Logo@2x.png';

export default class Header extends Component {

    render() {
        return (
            <header className="main-header navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
                <a href="home" className="logo">
                    <span className="logo-lg">
                        <img src={logo} />
                    </span>
                </a>
                    <nav className="navbar">
                        <a className="pull-right head-back" href="javascript:logout()">Logout</a>
                        <a className="pull-right head-back" href="https://app.mieru-ca.com/faber-extract/">Mieruca</a>
                    </nav>
            </header>
        )
    }
}