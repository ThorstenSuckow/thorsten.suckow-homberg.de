import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {ImgEmbed} from "../../components/Embed";

import ConjoonImg from "./img/conjoon.png";
import CoonjsImg from "./img/coonjs.png";
import l8jsImg from "./img/l8js.png";

const projects = [{
    name: "helios",
    description: "A 2D/3D game engine and rendering framework using modern C++, OpenGL and GLSL.",
    img: "https://raw.githubusercontent.com/ThorstenSuckow/helios/main/docs/logo.png",
    repository: {
        url: "https://github.com/ThorstenSuckow/helios",
        title: "@ThorstenSuckow/helios"
    },
    home: {
        url: "https://helios.garagecraft.games",
        title: "helios.garagecraft.games"
    },
    badges: [
        <img src="https://github.com/thorstensuckow/helios/actions/workflows/tests.yml/badge.svg" alt="Tests" />
    ]
}, {
    name: "GarageCraft Games",
    description: "Indie game development studio focused on creating immersive gaming experiences.",
    img: "https://garagecraft.games/img/logo-full.png",
    repository: {
        url: "https://github.com/garagecraft-games",
        title: "@garagecraft-games"
    },
    home: {
        url: "https://garagecraft.games",
        title: "garagecraft.games"
    }
}, {
    name: "AI Manifesto",
    description: "Manifesto for AI-Augmented Software Craftsmanship: Value-Driven Software Development in the Age of AI Assistance.",
    img: "https://avatars.githubusercontent.com/u/244329094?s=200&v=4",
    repository: {
        url: "https://github.com/software-craftsmanship-dev",
        title: "@software-craftsmanship-dev"
    },
    home: {
        url: "https://ai-manifesto.software-craftsmanship.dev",
        title: "ai-manifesto.software-craftsmanship.dev"
    },
    badges: [
        <img src="https://img.shields.io/badge/software%20craft-value--driven%20%C2%B7%20ai--augmented-4c1d95?style=flat-square&labelColor=111827" alt="value driven, ai augmented" />
    ]
},{
    name: "conjoon",
    description: "JavaScript Email-Client for the Web.",
    img: ConjoonImg,
    repository: {
        url: "https://github.com/conjoon/conjoon",
        title: "@conjoon/conjoon"
    },
    home: {
        url: "https://conjoon.org",
        title: "conjoon.org"
    },
    badges: [
        <img src="https://img.shields.io/npm/l/@conjoon/conjoon" alt="NPM" />,
        <img src="https://badge.fury.io/js/@conjoon%2Fconjoon.svg" alt="MIT" />
    ]
}, {
    name: "coon.js",
    description: "Toolset for rapid Sencha ExtJS application building.",
    img: CoonjsImg,
    badges: [
        <img src="https://img.shields.io/npm/l/@coon-js/extjs-lib-core" alt="License" />,
        <img src="https://badge.fury.io/js/@coon-js%2Fextjs-lib-core.svg" alt="npm version" />
    ],
    repository: {
        url: "https://github.com/coon-js",
        title: "@coon-js"
    },
    home: {
        url: "/docs/articles/creating-extjs-applications-with-coon-js",
        title: "Introduction to application-building with coon.js"
    },
}, {
    name: "l8js",
    description: "Lightweight ES6 JavaScript utility library.",
    img: l8jsImg,
    badges: [
        <img src="https://img.shields.io/npm/l/@l8js/l8" alt="License" />,
        <img src="https://badge.fury.io/js/@l8js%2Fl8.svg" alt="npm version" />,
        <img src="https://github.com/l8js/l8/actions/workflows/run.tests.yml/badge.svg" alt="Tests" />

    ],
    repository: {
        url: "https://github.com/l8js/l8",
        title: "@l8js/l8"
    },
    home: {
        url: "https://github.com/l8js/l8",
        title: "l8js @Github"
    },
}, {
    name: "JSON:API ",
    description: "Extension for sparse fieldsets to exclude fields",
    repository: {
        url: "https://github.com/ThorstenSuckow/relfield",
        title: "@ThorstenSuckow/relfield"
    },
    home: {
        url: "https://github.com/json-api/json-api/issues/1632",
        title: "RFC @JSON:API"
    },
    img: "https://avatars.githubusercontent.com/u/4341694?s=200&v=4"
}]


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <main>

                <div className={"projectHeader"}>
                    <h1>Projects</h1>
                    <p>
                        Here's a list of some of the projects I'm involved in.
                        Public projects are always visible on my <a href={"https://github.com/ThorstenSuckow"} target={"_blank"} rel="noopener noreferrer">Github-Profile</a>.
                    </p>
                </div>

                <div className={"row projectRow"}>

                {projects.map((project, index) => {

                    return (

                        <div key={index} className={"col projectCol"}>
                            <div className={"tile"}>
                                <div className={"header"}>
                                    <div></div>
                                    <div className={"logo"}><img src={project.img} alt={`${project.name} logo`} /></div>
                                    <div></div>
                                </div>
                                <div className={"body"}>
                                    <div className={"titleWrap"}>
                                        <div className={"title"}>
                                            <h4>{project.name}</h4>
                                            <div className={"badgeWrap"}>{project.badges?.map((badge, i) => <span key={i}>{badge}</span>)}</div>
                                        </div>
                                        <p>{project.description}</p>
                                        <ul className={"resources"}>
                                            <li>
                                                <a target="_blank" rel="noopener noreferrer" href={project.repository.url}>{project.repository.title}</a>
                                            </li>
                                            <li>
                                                <a target="_blank" rel="noopener noreferrer" href={project.home.url}>{project.home.title}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                            </div>



                    </div>)


                })}

                </div>

            </main>
        </Layout>
    );
}
