import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <div className="container nav-container">
                    <ul>
                        <li><a href="index.html"><img className="logo" src="img/webdxd.png" alt="webdxd" /></a></li>
                        <li><a href="index.html">Home</a></li>
                    </ul>
                    <div>
                        <a href="profile.html"><img className="avatar-sm" src="img/avatar.jpg" alt="avatar" /></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;