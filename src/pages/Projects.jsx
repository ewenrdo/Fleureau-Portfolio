import React from 'react';
import NavBar from '../assets/components/NavBar';

export const projectsData = [
    {
        "id": "projet-1",
        "title": "Refonte de Marque & DA",
        "client": "Projet ISCOM • Client Fictif",
        "category": "Identité visuelle",
        "year": "2024",
        "coverImage": "/images/margaux.jpeg",
        "role": "Direction Artistique, Stratégie de marque",
        "context": "Travail d\"équipe de 4 personnes dans le cadre du module Brand Strategy.",
        "brief": "Repenser l\"identité globale d\"une marque pour toucher une cible plus jeune tout en conservant son héritage.",
        "canvaEmbedUrl": "https://www.canva.com/design/DAHSErj-S8w/IPvpzupINjIyKWl0eQUsCA/view?embed"
    },
    {
        "id": "projet-2",
        "title": "Campagne de Communication 360°",
        "client": "Projet ISCOM • Compétition",
        "category": "Stratégie 360",
        "year": "2024",
        "coverImage": "/images/margaux.jpeg",
        "role": "Conception-Rédaction, Stratégie Média",
        "context": "Projet mené lors d'un challenge de 5 jours.",
        "brief": "Élaborer un plan de communication complet incluant activation physique, réseaux sociaux et PR.",
        "canvaEmbedUrl": "https://www.canva.com/design/DAHSErj-S8w/IPvpzupINjIyKWl0eQUsCA/view?embed"
    }
]

class Projects extends React.Component {
    state = {
        selectedCategory: 'Tous',
        activeProject: null
    };

    componentDidMount() {
        document.title = "Projets — Margaux Fleureau";
    }

    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category });
    };

    openProject = (project) => {
        this.setState({ activeProject: project });
        document.body.style.overflow = 'hidden'; // Bloque le scroll arrière
    };

    closeProject = () => {
        this.setState({ activeProject: null });
        document.body.style.overflow = 'auto';
    };

    render() {
        const { selectedCategory, activeProject } = this.state;
        const categories = ['Tous', 'Identité visuelle', 'Stratégie 360', 'Événementiel'];

        const data = projectsData || [];

        const filteredProjects = selectedCategory === 'Tous'
            ? data
            : data.filter(p => p.category === selectedCategory);

        return (
            <div className="projects-container">
                <NavBar />

                <main className="hero-section">
                    <h1 className="page-title"><span className="outline">/</span>PROJETS</h1>
                </main>

                <section className="projects-content">
                    {/* Filtres par catégorie */}
                    <div className="category-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => this.handleCategoryChange(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grille de projets */}
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id || project.slug}
                                className="project-card"
                                onClick={() => this.openProject(project)}
                            >
                                <div className="project-image-wrapper">
                                    <img
                                        src={process.env.PUBLIC_URL + project.coverImage}
                                        alt={project.title}
                                        draggable="false"
                                    />
                                    <span className="project-badge">{project.category}</span>
                                </div>
                                <div className="project-info">
                                    <div className="project-header-row">
                                        <h3 className="project-title">{project.title}</h3>
                                        <span className="project-year">{project.year}</span>
                                    </div>
                                    <p className="project-client">{project.client}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Drawer du projet sélectionné */}
                {activeProject && (
                    <div className="modal-overlay" onClick={this.closeProject}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={this.closeProject}>✕</button>

                            <header className="modal-header">
                                <span className="modal-category">{activeProject.category} • {activeProject.year}</span>
                                <h2 className="modal-title">{activeProject.title}</h2>
                                <p className="modal-client">{activeProject.client}</p>
                            </header>

                            <div className="modal-meta-grid">
                                <div className="meta-item">
                                    <span className="meta-label">Mon Rôle</span>
                                    <span className="meta-value">{activeProject.role}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Cadre</span>
                                    <span className="meta-value">{activeProject.context}</span>
                                </div>
                            </div>

                            <div className="modal-section">
                                <h4 className="section-subtitle">Le Brief</h4>
                                <p className="section-text">{activeProject.brief}</p>
                            </div>

                            {/* Section Canva Embed */}
                            <div className="modal-section">
                                <h4 className="section-subtitle">Présentation du Projet</h4>
                                <div className="canva-wrapper">
                                    <iframe
                                        src={activeProject.canvaEmbedUrl}
                                        title={activeProject.title}
                                        allowFullScreen
                                        allow="fullscreen"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Projects;