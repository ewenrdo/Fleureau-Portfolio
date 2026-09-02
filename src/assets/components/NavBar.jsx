import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EXPERIENCE } from '../../pages/Experience';
import { projectsData } from '../../pages/Projects';

class NavBar extends React.Component {
    render() {
        return (
            <>
                <header className="navbar">
                    <Link to="/" className="badge">
                        <span className="dot"></span> À votre service
                    </Link>
                    <nav className="nav-links">
                        <Link to="/experience">Expérience <span>[{EXPERIENCE.length}]</span></Link>
                        <Link to="/projects">Projets <span>[{projectsData.length}]</span></Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <Link to="/contact" className="btn-black">Prenons contact ↗</Link>
                </header>
            </>
        );
    }
}

// eslint-disable-next-line
export default (props) => <NavBar {...props} navigate={useNavigate()} />;