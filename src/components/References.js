

import React from 'react';

function Bibliography ({name, pp}) {
    const href = `/docs/bibliography#${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">📖{name.toUpperCase()}</span>{pp ? `, ${pp.includes("-") ? "pp" : "p"}. ${pp}` : ""}]</a>
    );

}

function toolbox ({name, file}) {

    switch (true) {
        case (file.startsWith("sd.")):
            file = file.replace("sd.", "softwaredesign.");
            break;

        case (file.startsWith("sa.")):
            file = file.replace("sa.", "softwarearchitecture.")
            break;
    }

    const href = `/docs/toolbox/${file}`;
    return (
        <a href={href} className="glosRef">{name}</a>
    );

}

export {toolbox as GlosRef};
export {Bibliography as BibRef};