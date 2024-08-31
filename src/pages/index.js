import React, { useState } from 'react';
import { Github, Linkedin, Mail, BookOpen, Briefcase, GraduationCap, Globe } from 'lucide-react';


const Index = () => {
    const [language, setLanguage] = useState('en');
    const [lightMode, setLightMode] = useState(false);

    const [aboutSection, setAboutSection] = useState(true);
    const [expSection, setExpSection] = useState(false);
    const [eduSection, setEduSection] = useState(false);
    const [skillsSection, setSkillsSection] = useState(false);
    const [projectSection, setProjectSection] = useState(false);
    const [researchSection, setResearchSection] = useState(false);


    const translations = {
        fr: {
            about: "À propos",
            experience: "Expérience",
            education: "Formation",
            skills: "Compétences",
            research: "Recherche",
            projects: "Projects",
            downloadCV: "Télécharger CV",
            aboutMe: "À propos de moi",
            professionalExperiences: "Expériences Professionnelles",
            technologies: "Technologies",
            languages: "Langues",
            nativeSpeaker: "langue maternelle",
            fairlyGood: "assez bien",
            personalInfo: {
                title: "Développeur Full Stack",
                born: "Né le",
                nationality: "Nationalité",
            },
            aboutText: "Jeune, ambitieux et passionné par l'informatique, doté d'un esprit d'équipe et capable d'apprendre constamment de nouvelles choses. Diplômé d'un Master en Informatique Décisionnelle. Rigoureux, très motivé et disponible pour travailler en équipe.",
            frameworksAndTools: "Frameworks, outils et langages de programmation",
            businessIntelligence: "Outils Business Intelligence",
            databaseManagement: "Gestion des bases de données",
            otherSkills: "Autres compétences",
        },
        en: {
            about: "About",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            projects: "Projects",
            research: "Research",
            downloadCV: "Download CV",
            aboutMe: "About Me",
            professionalExperiences: "Professional Experiences",
            technologies: "Technologies",
            languages: "Languages",
            nativeSpeaker: "native speaker",
            fairlyGood: "fairly good",
            personalInfo: {
                title: "Full Stack Developer",
                born: "Born on",
                nationality: "Nationality",
            },
            aboutText: "Young, ambitious and passionate about computer science, with a team spirit and ability to constantly learn new things. Graduated with a Master's degree in Business Intelligence. Rigorous, highly motivated and available to work in a team.",
            frameworksAndTools: "Frameworks, tools and programming languages",
            businessIntelligence: "Business Intelligence Tools",
            databaseManagement: "Database Management",
            otherSkills: "Other Skills",
        }
    };

    const t = translations[language];

    const experiences = [
        {
            title: language === 'fr' ? "Développement WEB chez AtlasWeb Solution" : "Web Development at AtlasWeb Solution",
            date: language === 'fr' ? "De 11/2023 à 01/2024" : "From 11/2023 to 01/2024",
            description: language === 'fr'
                ? "Développé un SaaS pour la manipulation d'arrière-plan des images, fonctionnant sur un modèle d'abonnement mensuel, avec système d'authentification."
                : "Developed a SaaS for image background manipulation, operating on a monthly subscription model, with an authentication system.",
            tech: "React, TailwindCSS, Node.js, Express, passport.js, Rest API, Stripe API, Google reCAPTCHA, Replicate, Git/GitHub"
        },
        {
            title: language === 'fr' ? "Création d'un site web de gestion de stock chez SITA" : "Creation of a stock management website at SITA",
            date: "2021",
            description: language === 'fr'
                ? "Développé une application de gestion de stock avec importation/exportation de données (CSV, PDF), notifications par e-mail, et système d'authentification et de gestion des utilisateurs."
                : "Developed a stock management application with data import/export (CSV, PDF), email notifications, and a complete user authentication and management system.",
            tech: "Bootstrap, Laravel, Git/GitHub"
        },

    ];

    const education = [
        {
            degree: language === 'fr' ? "Master en Informatique décisionnelle (Business intelligence)" : "Master's in Business Intelligence",
            school: language === 'fr' ? "Faculté des Sciences et Techniques Béni Mellal" : "Faculty of Sciences and Techniques Béni Mellal",
            date: language === 'fr' ? "De 2018 à 2020" : "From 2018 to 2020"
        },
    ];


    const projects = [
        {
            title: language === 'fr' ? "Gestion de stockage" : "stock management",
            url: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            date: language === 'fr' ? "De 2018 à 2020" : "From 2018 to 2020",
            image: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            description: language === 'fr' ? "C'est mon project de fin d'etude" : "Its my first project",
        },
        {
            title: language === 'fr' ? "Gestion de stockage" : "stock management",
            url: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            date: language === 'fr' ? "De 2018 à 2020" : "From 2018 to 2020",
            image: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            description: language === 'fr' ? "C'est mon deuxieme project de fin d'etude" : "Its my second first project",

        },
        {
            title: language === 'fr' ? "Gestion de stockage" : "stock management",
            url: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            date: language === 'fr' ? "De 2018 à 2020" : "From 2018 to 2020",
            image: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            description: language === 'fr' ? "C'est mon project de fin d'etude" : "Its my first project",
        },
        {
            title: language === 'fr' ? "Gestion de stockage" : "stock management",
            url: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            date: language === 'fr' ? "De 2018 à 2020" : "From 2018 to 2020",
            image: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            description: language === 'fr' ? "C'est mon deuxieme project de fin d'etude" : "Its my second first project",

        },
    ];

    const research = [
        {
            title: language === 'fr' ? "Gestion de stockage" : "stock management",
            url: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            date: language === 'fr' ? "De 2018 à 2020" : "From 2018 to 2020",
            image: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            description: language === 'fr' ? "C'est mon project de fin d'etude" : "Its my first project",
        },
        {
            title: language === 'fr' ? "Gestion de stockage" : "stock management",
            url: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            date: language === 'fr' ? "De 2018 à 2020" : "From 2018 to 2020",
            image: "https://th.bing.com/th/id/OIP.VmjrzHGeb3fqroLkvWtoAQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
            description: language === 'fr' ? "C'est mon deuxieme project de fin d'etude" : "Its my second first project",

        },
    ];


    return (
        <div className={`min-h-screen   ${lightMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-gray-300'} `} >
            <div className="container mx-auto px-4 py-8">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-yellow-500">Portfolio || Soufiane El Aamrani</h1>
                    </div>
                    <nav className="flex items-center">
                        <ul className={`${lightMode ? 'text-gray-800' : 'text-gray-300'} flex space-x-4 mr-4`} >
                            <li><a className={`${aboutSection ? 'text-yellow-500 hover:text-gray-300 font-bold' : ' hover:text-yellow-500'} cursor-pointer`}
                                onClick={() => {
                                    setAboutSection(true);
                                    setEduSection(false);
                                    setExpSection(false);
                                    setSkillsSection(false);
                                    setProjectSection(false);
                                    setResearchSection(false);
                                }}
                            >{t.about}</a></li>
                            <li><a className={`${expSection ? 'text-yellow-500 hover:text-gray-300 font-bold' : ' hover:text-yellow-500'} cursor-pointer`}
                                onClick={() => {
                                    setAboutSection(false);
                                    setEduSection(false);
                                    setExpSection(true);
                                    setSkillsSection(false);
                                    setProjectSection(false);
                                    setResearchSection(false);
                                }}
                            >{t.experience}</a></li>
                            <li><a className={`${eduSection ? 'text-yellow-500 hover:text-gray-300 font-bold' : ' hover:text-yellow-500'} cursor-pointer`}
                                onClick={() => {
                                    setAboutSection(false);
                                    setEduSection(true);
                                    setSkillsSection(false);
                                    setExpSection(false);
                                    setProjectSection(false);
                                    setResearchSection(false);
                                }}
                            >{t.education}</a></li>
                            <li><a className={`${skillsSection ? 'text-yellow-500 hover:text-gray-300 font-bold' : 'hover:text-yellow-500'} cursor-pointer`}
                                onClick={() => {
                                    setAboutSection(false);
                                    setEduSection(false);
                                    setExpSection(false);
                                    setSkillsSection(true);
                                    setProjectSection(false);
                                    setResearchSection(false);
                                }}
                            >{t.skills}</a></li>
                            <li><a className={`${projectSection ? 'text-yellow-500 hover:text-gray-300 font-bold' : ' hover:text-yellow-500'} cursor-pointer`}
                                onClick={() => {
                                    setAboutSection(false);
                                    setEduSection(false);
                                    setExpSection(false);
                                    setSkillsSection(false);
                                    setProjectSection(true);
                                    setResearchSection(false);
                                }}
                            >{t.projects}</a></li>
                            <li><a className={`${researchSection ? 'text-yellow-500 hover:text-gray-300 font-bold' : ' hover:text-yellow-500'} cursor-pointer`}
                                onClick={() => {
                                    setAboutSection(false);
                                    setEduSection(false);
                                    setExpSection(false);
                                    setSkillsSection(false);
                                    setProjectSection(false);
                                    setResearchSection(true);
                                }}
                            >{t.research}</a></li>

                        </ul>

                        <div className="flex items-center space-x-2 mx-4">
                            <span className={`${language === 'fr' ? 'text-yellow-600' : 'text-gray-300'}`}>FR</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={language === 'en'}
                                    onChange={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
                            </label>
                            <span className={`${language === 'en' ? 'text-yellow-600' : 'text-gray-300'}`}>EN</span>
                        </div>



                        <div className="flex items-center space-x-2">
                            <span className={`${lightMode ? 'text-gray-800' : 'text-gray-300'}`}>🌞</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={lightMode}
                                    onChange={() => setLightMode(!lightMode)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
                            </label>
                            <span className={`${lightMode ? 'text-gray-800' : 'text-gray-300'}`}>🌜</span>
                        </div>

                    </nav>
                </header>

                <div className="grid grid-cols-12 gap-6">
                    <aside className="col-span-3">
                        <div className={` rounded-lg p-6 ${lightMode ? 'bg-gray-300' : 'bg-gray-800'} `}>
                            <img src="https://avatars.githubusercontent.com/u/63312672?v=4" alt="Soufiane El Aamrani" className="rounded-full w-32 h-32 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-center mb-2">Soufiane El Aamrani</h2>
                            <p className="text-sm text-center mb-4">{t.personalInfo.title}</p>
                            <div className="flex justify-center space-x-3 mb-6">
                                <a href="#" className={` ${lightMode ? 'text-gray-400 hover:text-yellow-500' : 'text-gray-900 hover:text-yellow-900'} `}><Github size={20} /></a>
                                <a href="#" className={` ${lightMode ? 'text-gray-400 hover:text-yellow-500' : 'text-gray-900 hover:text-yellow-900'} `}><Linkedin size={20} /></a>
                                <a href="mailto:elaamranisoufiane@gmail.com" className={` ${lightMode ? 'text-gray-400 hover:text-yellow-500' : 'text-gray-900 hover:text-yellow-900'} `}><Mail size={20} /></a>
                            </div>
                            <div className="text-sm text-center mb-4">
                                <p>{t.personalInfo.born} 20/11/1997</p>
                                <p>{t.personalInfo.nationality}: Marocain</p>
                                <p>+212656992981</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-semibold mb-2">{t.languages}</h3>
                                <ul className="text-sm">
                                    <li>Arabe - {t.nativeSpeaker}</li>
                                    <li>Français - {t.fairlyGood}</li>
                                    <li>Anglais - {t.fairlyGood}</li>
                                </ul>
                            </div>
                            <button className={`w-full  transition duration-300 rounded-lg ${lightMode ? 'bg-yellow-600 text-gray-900 py-2 hover:bg-yellow-400' : 'bg-yellow-500 text-gray-900 py-2 hover:bg-yellow-600'} `} >
                                {t.downloadCV}
                            </button>
                        </div>
                    </aside>

                    <main className="col-span-9">
                        {aboutSection && (
                            <section id="about" className="mb-12">
                                <h2 className="text-2xl font-bold mb-4 flex items-center"><BookOpen className="mr-2" /> {t.aboutMe}</h2>
                                <p className="text-gray-400">{t.aboutText}</p>
                            </section>
                        )}

                        {expSection && (
                            <section id="experience" className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 flex items-center"><Briefcase className="mr-2" /> {t.professionalExperiences}</h2>
                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className={`${lightMode ? 'bg-gray-300' : 'bg-gray-800'} rounded-lg p-6`}>
                                            <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                                            <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                                            <p className="mb-2">{exp.description}</p>
                                            {exp.tech && <p className="text-sm text-gray-400">{t.technologies}: {exp.tech}</p>}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {eduSection && (
                            <section id="education" className={`mb-12 ${lightMode ? 'bg-gray-300' : 'bg-gray-800'} rounded-lg p-6`}>
                                <h2 className="text-2xl font-bold mb-6 flex items-center"><GraduationCap className="mr-2" /> {t.education}</h2>
                                <div className="space-y-4">
                                    {education.map((edu, index) => (
                                        <div key={index} className={`rounded - lg p-4 ${lightMode ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg p-6`}>
                                            <h3 className="text-lg font-semibold">{edu.degree}</h3>
                                            <p className="text-sm text-gray-400">{edu.school}</p>
                                            <p className="text-sm text-gray-400">{edu.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {skillsSection && (
                            <section id="skills">
                                <h2 className="text-2xl font-bold mb-6 flex items-center"><Globe className="mr-2" /> {t.skills}</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className={`rounded-lg p-4 ${lightMode ? 'bg-gray-300' : 'bg-gray-800'} rounded-lg p-6`}>
                                        <h3 className="text-lg font-semibold mb-2">{t.frameworksAndTools}</h3>
                                        <p className="text-sm text-gray-400">NodeJs, Express.js, Passport.js, React, TailwindCss, Bootstrap, RESTful API Integration, Laravel, Git/GitHub, JAVA, C, Shell sous Linux, HTML5, CSS3, Matlab, Python, Hibernate, Spring MVC.</p>
                                    </div>
                                    <div className={`rounded-lg p-4 ${lightMode ? 'bg-gray-300' : 'bg-gray-800'} rounded-lg p-6`}>
                                        <h3 className="text-lg font-semibold mb-2">{t.businessIntelligence}</h3>
                                        <p className="text-sm text-gray-400">MS Power BI, MS Access, Data Mining, Data Warehouse (SQLserver, Visual Studio).</p>
                                    </div>
                                    <div className={`rounded-lg p-4 ${lightMode ? 'bg-gray-300' : 'bg-gray-800'} rounded-lg p-6`}>
                                        <h3 className="text-lg font-semibold mb-2">{t.databaseManagement}</h3>
                                        <p className="text-sm text-gray-400">Oracle, SQL Server, MySQL, Access.</p>
                                    </div>
                                    <div className={`rounded-lg p-4 ${lightMode ? 'bg-gray-300' : 'bg-gray-800'} rounded-lg p-6`}>
                                        <h3 className="text-lg font-semibold mb-2">{t.otherSkills}</h3>
                                        <p className="text-sm text-gray-400">Node.js server setup.</p>
                                    </div>
                                </div>
                            </section>
                        )}




                        {projectSection && (
                            <section id="skills">
                                <h2 className="text-2xl font-bold mb-6 flex items-center"><Globe className="mr-2" /> {t.projects}</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    {projects.map((pr, index) => (
                                        <div key={index} className={`rounded - lg p-4 ${lightMode ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg p-6`}>
                                            <a href={pr.url}>
                                                <h3 className="text-lg font-semibold mb-3">{pr.title}</h3>
                                                <p className="text-sm text-gray-400">{pr.description}</p>
                                                <img src={pr.image} className='w-auto h-auto mb-2'></img>
                                                <p className="text-sm text-gray-400">{pr.date}</p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {researchSection && (
                            <section id="skills">
                                <h2 className="text-2xl font-bold mb-6 flex items-center"><Globe className="mr-2" /> {t.research}</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    {research.map((pr, index) => (
                                        <div key={index} className={`rounded - lg p-4 ${lightMode ? 'bg-gray-200' : 'bg-gray-800'} rounded-lg p-6`}>
                                            <a href={pr.url}>
                                                <h3 className="text-lg font-semibold mb-3">{pr.title}</h3>
                                                <p className="text-sm text-gray-400">{pr.description}</p>
                                                <img src={pr.image} className='w-auto h-auto mb-2'></img>
                                                <p className="text-sm text-gray-400">{pr.date}</p>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}



                    </main>
                </div>
            </div>
        </div >
    );
};

export default Index;
