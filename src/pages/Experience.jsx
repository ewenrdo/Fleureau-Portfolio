import React from 'react';
import NavBar from '../assets/components/NavBar';

export const EXPERIENCE = [
    {
        "label": "Intitulé à venir",
        "compagny": "Open2Europe",
        "from": "Sept. 2026",
        "to": "Aujourd'hui",
        "description": "Description à venir."
    },
    {
        "label": "Assistante communication commerciale",
        "compagny": "ISCOM Paris",
        "from": "Mars 2025",
        "to": "Août 2026",
        "description": "Prospection et création de relations, organisation d'événements, aménagement des espaces et coordination."
    },
    {
        "label": "Stagiaire chargée de communication marketing",
        "compagny": "Media Figaro",
        "from": "Oct. 2025",
        "to": "Fév. 2026",
        "description": "Conception d'événements (Bicentenaire), plan de communication, analyse d'audience/CA et supports de communication."
    },
    {
        "label": "Stagiaire au service communication",
        "compagny": "ISCOM Paris",
        "from": "Janv. 2025",
        "to": "Mars 2025",
        "description": "Co-organisation de journées portes ouvertes et prospection de futurs étudiants."
    },
    {
        "label": "Chargée de communication bénévole",
        "compagny": "Les Petits Doudous",
        "from": "Nov. 2024",
        "to": "Aujourd'hui",
        "description": "Gestion de la communication en ligne et réalisation d'affiches pour l'hôpital Simone Veil."
    },
    {
        "label": "Bénévole",
        "compagny": "Unissons les Coeurs",
        "from": "Nov. 2023",
        "to": "Déc. 2024",
        "description": "Actions de soutien et animations auprès d'adolescents hospitalisés."
    },
    {
        "label": "Parlement Européen des Lycéens",
        "compagny": "PEL",
        "from": "Mai 2024",
        "to": "Mai 2024",
        "description": "Simulation d'une session plénière et débats sur des thématiques européennes."
    },
    {
        "label": "Déléguée à la vie associative",
        "compagny": "CSN",
        "from": "Fév. 2023",
        "to": "Août 2024",
        "description": "Organisation et communication autour de projets solidaires."
    },
    {
        "label": "Responsable événementiel",
        "compagny": "MDL Lycée Gustave Monod",
        "from": "Nov. 2022",
        "to": "Août 2024",
        "description": "Pilotage des projets et événements de la Maison des Lycéens."
    }
];

export const DIPLOMAS = [
    {
        "name": "ISCOM Paris",
        "degree": "Bachelor en communication",
        "cursus": "Programme Grande École",
        "year": "En cours"
    },
    {
        "name": "TOEIC",
        "degree": "Test of English for International Communication",
        "cursus": "",
        "year": "2025-2027"
    },
    {
        "name": "Lycée Gustave Monod",
        "degree": "Baccalauréat Général",
        "cursus": "Mention Assez Bien",
        "year": "2024"
    }
];

class Experience extends React.Component {

    componentDidMount() {
        document.title = "Mes expériences - Margaux Fleureau";
    }

    render() {
        return (
            <div className="experience-container">
                {/* Navigation */}
                <NavBar />

                {/* Section Hero EXPÉRIENCE */}
                <main className="hero-section">
                    <h1 className="page-title"><span className="outline">/</span>EXPERIENCE</h1>
                </main>

                <section className="list-container">
                    {EXPERIENCE.map((exp, index) => (
                        <div key={index} className="list-row">
                            <div className="row-left">
                                <h2 className="row-company">{exp.compagny}</h2>
                                <p className="row-role">{exp.label}</p>
                                <p className="row-description">{exp.description}</p>
                            </div>
                            <div className="row-right">
                                <span className="row-date">{exp.from} — {exp.to || "Aujourd'hui"}</span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section Hero FORMATION */}
                <main className="hero-section spacing-top">
                    <h1 className="page-title"><span className="outline">/</span>FORMATION</h1>
                </main>

                <section className="list-container">
                    {DIPLOMAS.map((diploma, index) => (
                        <div key={index} className="list-row">
                            <div className="row-left">
                                <h2 className="row-company">{diploma.name}</h2>
                                <p className="row-role">{diploma.degree} {diploma.cursus && `• ${diploma.cursus}`}</p>
                            </div>
                            <div className="row-right">
                                <span className="row-date">{diploma.year}</span>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}

export default Experience;