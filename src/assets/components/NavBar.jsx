import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { EXPERIENCE } from '../../pages/Experience';

class NavBar extends React.Component {
    render() {
        return (
            <>
                <header className="navbar">
                    <div className="badge">
                        <span className="dot"></span> À votre service
                    </div>
                    <nav className="nav-links">
                        <Link to="/experience">Expérience <span>[{EXPERIENCE.length}]</span></Link>
                        <Link to="/projects">Projets <span>[4+]</span></Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <button className="btn-black">Prenons contact ↗</button>
                </header>
            </>
        );
    }
}

// eslint-disable-next-line
export default (props) => <NavBar {...props} navigate={useNavigate()} />;