

import React from 'react';

function Bibliography ({name, pp}) {
    const href = `/docs/bibliography#${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">📖{name}</span>{pp ? `, ${pp.includes("-") ? "pp" : "p"}. ${pp}` : ""}]</a>
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
export {Bibliography as BibRef};