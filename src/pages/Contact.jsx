import React from 'react';
import NavBar from '../assets/components/NavBar';

class Contact extends React.Component {
    state = {
        copied: false
    };

    email = "margaux.fleureau@iscom.fr";

    componentDidMount() {
        document.title = "Prenons contact - Margaux Fleureau";
    }

    handleCopy = () => {
        navigator.clipboard.writeText(this.email);
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000);
    };

    render() {
        const { copied } = this.state;

        return (
            <div className="contact-container">
                <NavBar />

                <main className="hero-section">
                    <h1 className="page-title"><span className="outline">/</span>CONTACT</h1>
                </main>

                <section className="contact-content">
                    <div className="business-card-vertical">
                        <div className="card-avatar">
                            <img 
                                src={process.env.PUBLIC_URL + "/images/margaux.jpeg"} 
                                alt="Margaux Fleureau" 
                                draggable="false"
                            />
                        </div>

                        <div className="card-info">
                            <h2 className="card-name">Margaux Fleureau</h2>
                            <p className="card-role">Étudiante en communication • ISCOM Paris</p>
                            
                            <p className="card-location">Paris & Île-de-France</p>

                            <div className="card-actions">
                                <a href={`mailto:${this.email}`} className="btn-black">
                                    Envoyer un email ↗
                                </a>
                                <button onClick={this.handleCopy} className="btn-copy">
                                    {copied ? 'Email copié' : 'Copier l\'email'}
                                </button>
                            </div>

                            <div className="card-links">
                                <a href="https://www.linkedin.com/in/margaux-fleureau-480855267/" target="_blank" rel="noreferrer">
                                    LinkedIn ↗
                                </a>
                                <a href="/cv-margaux-fleureau.pdf" download>
                                    Mon CV ↓
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;