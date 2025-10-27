import React from 'react';
import NavBar from '../assets/components/NavBar';

class Experience extends React.Component {

    componentDidMount() {
        document.title = "Mon expérience - Margaux Fleureau";
    }

    render() {
        return (
            <>
                <section className="Header">
                    <NavBar background="bg-background" />
                </section>
                <div className="container">

                    <section className="experience mt-lg-5" ref={this.expRef}>

                        <div className="row">
                            <div className="col-xs-12 col-lg-5 col-xxl-4 d-none d-lg-block">
                                <div className="diplomas d-lg-flex d-none mt-5 mb-5">

                                    <div className="diploma-badge">
                                        <div className="tooltiptext">Programme Grande Ecole</div>
                                        <div className="content">
                                            <img src={process.env.PUBLIC_URL + "/images/iscom.jpeg"} alt="Logo de l'ISCOM" />
                                            ISCOM, Bachelor en communication <i className="far fa-hourglass iconTooltip" />
                                        </div>
                                    </div>
                                    <div className="diploma-badge">
                                        <div className="tooltiptext">Mention Assez Bien</div>
                                        <div className="content">
                                            <img src={process.env.PUBLIC_URL + "/images/monod.jpeg"} alt="Baccalauréat" />
                                            Baccaulauréat
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-xs-12 col-lg-5 ml5">
                                <h2 className="ps-lg-5">Mon parcours</h2>

                                <div className="timeline ps-lg-5">
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/figaro.png"} alt="Figaro" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Stagiaire au Figaro</h3>
                                            <span className="date">Octobre 2025 - Aujourd'hui</span>
                                            <p>
                                                <i>Pas encore rédigé</i>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/iscom.jpeg"} alt="Les petits doudous" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Assistante communication commerciale</h3>
                                            <span className="date">Mars 2025 - Aujourd'hui</span>
                                            <p>
                                                À la suite de mon stage, j'ai l'honneur de poursuivre mes activités mais en tant qu'intérimaires. <br />
                                                J'ai donc les mêmes missions que pendant mon stage :<br /><br />

                                                - Prospection et création de relations,<br />
                                                - Préparation et organisation d'événements,<br />
                                                - Aménagement et rangements des espaces de travails,<br />
                                                - Assistance à mes supérieurs dans la coordination des pré-événements.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/iscom.jpeg"} alt="Les petits doudous" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Stagiaire au service communication ISCOM</h3>
                                            <span className="date">Janvier 2025 - Mars 2025</span>
                                            <p>
                                                J'ai pu co-organiser des moments de promotion de l'école, notamment lors de journées et soirées portes ouvertes, le tout en travail d'équipe. En plus, j'ai eu l'occasion de faire de la prospection auprès de profils intéressés par l'école.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/lpd.webp"} alt="Les petits doudous" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Chargée de communication chez Les Petits Doudous</h3>
                                            <span className="date">Novembre 2024 - Aujourd'hui</span>
                                            <p>
                                                Je participe comme bénévole à l'association Les Petits Doudous de l'Hopital Simone Veil d'Eaubonne en tant que chargée de communication : je m'occupe de la communication en ligne et de la réalisation d'affiches pour l'hopital.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/ulc.jpeg"} alt="ULC" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Bénévole Unissons les Coeurs</h3>
                                            <span className="date">Novembre 2023 - Décembre 2024</span>
                                            <p>
                                                Nous avons pu ensemble venir en aide aux adolescents hopsitalisés en leur donnant le sourire !
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/lpe.jpg"} alt="PEL" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Parlement Européen des Lycéens</h3>
                                            <span className="date">Mai 2024</span>
                                            <p>
                                                Nous avons simulé, en équipe, une session plénière du Parlement Européen et participé à des débats sur des sujets d'actualité européenne.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/csn.jpeg"} alt="CSN" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Déléguée à la vie associative du CSN</h3>
                                            <span className="date">Février 2023 - Août 2024</span>
                                            <p>
                                                J'ai pu participé à l'organisation de projets solidaires dans mon lycée et ait généré la communication de ceux-ci.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <img src={process.env.PUBLIC_URL + "/images/mdl.jpg"} alt="MDL" className="timeline-image" />
                                        <div className="timeline-content">
                                            <h3>Reponsable événementiel de la MDL</h3>
                                            <span className="date">Novembre 2022 - Août 2024</span>
                                            <p>
                                                J'ai organisé de nombreux projets dans la maison des lycéens du Lycée Gustave Monod !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-lg-5 col-xxl-4 d-flex d-lg-none ml5" style={{ maxWidth: "95%" }}>


                                <div className="diplomas mb-5 mt-5">

                                    <div className="diploma-badge">
                                        <div className="tooltiptext">Programme Grande Ecole</div>
                                        <div className="content">
                                            <img src={process.env.PUBLIC_URL + "/images/iscom.jpeg"} alt="Logo de l'ISCOM" />
                                            ISCOM, Bachelor en communication <i className="far fa-hourglass iconTooltip" />
                                        </div>
                                    </div>
                                    <div className="diploma-badge">
                                        <div className="tooltiptext">Mention Assez Bien</div>
                                        <div className="content">
                                            <img src={process.env.PUBLIC_URL + "/images/monod.jpeg"} alt="Baccalauréat" />
                                            Baccaulauréat
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section >
                </div >
            </>
        );

    }

}

export default Experience;