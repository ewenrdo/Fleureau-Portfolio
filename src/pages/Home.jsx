import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../assets/components/NavBar';

class Home extends Component {
    state = {
        cursorPos: { x: 0, y: 0 },
        isHovered: false
    };

    componentDidMount() {
        document.title = "Margaux Fleureau - Étudiante et ambassadrice de l'ISCOM Paris";
    }

    handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        this.setState({
            cursorPos: {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        });
    };

    render() {
        const { cursorPos, isHovered } = this.state;

        const maskStyle = isHovered ? {
            maskImage: `radial-gradient(circle 90px at ${cursorPos.x}px ${cursorPos.y}px, black 100%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 90px at ${cursorPos.x}px ${cursorPos.y}px, black 100%, transparent 100%)`
        } : {
            opacity: 0,
            transition: 'opacity 0.2s ease'
        };

        return (
            <div className="home-container">
                {/* Navigation */}
                <NavBar />

                {/* Section Hero */}
                <main className="hero-section">
                    <h1 className="hero-title">
                        <span className="outline">MARGAUX</span> FLEUREAU
                    </h1>

                    {/* Wrapper photo avec effet de survol */}
                    <div
                        className="portrait-wrapper"
                        onMouseMove={this.handleMouseMove}
                        onMouseEnter={() => this.setState({ isHovered: true })}
                        onMouseLeave={() => this.setState({ isHovered: false })}
                    >
                        {/* Image de base en Noir & Blanc */}
                        <img src="margaux.png" alt="Photo de Margaux Fleureau en noir et blanc" className="portrait portrait-bw" />

                        <img
                            src="margaux.png"
                            alt="Photo de Margaux Fleureau en couleur"
                            className="portrait portrait-color"
                            style={maskStyle}
                        />
                    </div>

                    {/* Footer / Info bas de page */}
                    <div className="hero-footer">
                        <div className="bio">
                            <h2>Étudiant en communication</h2>
                            <p>Étudiante et ambassadrice de l'ISCOM Paris, passionnée par la communication et le cinéma.</p>
                            <button className="btn-black">Discutons ↗</button>
                        </div>

                        <div className="socials">
                            <Link to="https://www.linkedin.com/in/margaux-fleureau-480855267/" className="social-pill" target="_blank">LinkedIn</Link>
                            <a href="/cv-margaux-fleureau.pdf" download className="social-pill">Mon CV</a>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;