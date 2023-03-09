import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {ImgEmbed} from "../../components/Embed";

import ConjoonImg from "./img/conjoon.png";
import CoonjsImg from "./img/coonjs.png";
import l8jsImg from "./img/l8js.png";

const projects = [{
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
        <img src="https://img.shields.io/npm/l/@coon-js/extjs-lib-core" />,
        <img src="https://badge.fury.io/js/@coon-js%2Fextjs-lib-core.svg" />
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
        <img src="https://img.shields.io/npm/l/@l8js/l8" />,
        <img src="https://badge.fury.io/js/@l8js%2Fl8.svg" />,
        <img src="https://github.com/l8js/l8/actions/workflows/run.tests.yml/badge.svg" />

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
                        Public projects are always visible on my <a href={"https://github.com/ThorstenSuckow"} target={"blank"}>Github-Profile</a>.
                    </p>
                </div>

                <div className={"row projectRow"}>

                {projects.map(project => {

                    return (

                        <div className={"col projectCol"}>
                            <div className={"tile"}>
                                <div className={"header"}>
                                    <div></div>
                                    <div className={"logo"}><img src={project.img} /></div>
                                    <div></div>
                                </div>
                                <div className={"body"}>
                                    <div className={"titleWrap"}>
                                        <div className={"title"}>
                                            <h4>{project.name}</h4>
                                            <div className={"badgeWrap"}>{project.badges?.map(badge => badge)}</div>
                                        </div>
                                        <p>{project.description}</p>
                                        <ul className={"resources"}>
                                            <li>
                                                <a target="_blank" href={project.repository.url}>{project.repository.title}</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href={project.home.url}>{project.home.title}</a>
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
