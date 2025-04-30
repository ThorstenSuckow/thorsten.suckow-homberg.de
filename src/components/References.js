

import React from 'react';

function Bibliography ({name, pp}) {
    const href = `/docs/bibliography#${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">📖{name}</span>{pp ? `, ${pp.includes("-") ? "pp" : "p"}. ${pp}` : ""}]</a>
    );

}

function citation ({name, pp}) {
    const href = `/docs/bibliography#${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">📖{name}</span>{pp ? `, ${pp.includes("-") ? "pp" : "p"}. ${pp}` : ""}]</a>
    );

}

function Abbildung ({idx}) {
    return (
        <a href="#fig_{idx}"><span className="bibRef">Abbildung {idx}</span></a>
    );

}

function Figure ({idx}) {
    return (
        <a href={`#fig_${idx}`}><span className="bibRef">Figure {idx}</span></a>
    );

}

function toolbox ({name, file}) {

    const mappings = {
        "sd": "softwaredesign",
        "sa": "softwarearchitecture",
        "cs": "computerscience"
    };

    Object.entries(mappings).some(([abbr, name]) => {
        if (file.startsWith(`${abbr}.`)) {
            file = file.replace(`${abbr}.`, `${name}.`);
            return true;
        }
    });

    const href = `/docs/toolbox/${file}`;
    return (
        <a href={href} className="glosRef">{name}</a>
    );

}

export {toolbox as GlosRef};
export {Figure, Abbildung, citation as Cite, Bibliography as BibRef};