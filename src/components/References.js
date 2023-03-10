

import React from 'react';

function Bibliography ({name, pp}) {
    const href = `/docs/bibliography#${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">📖{name.toUpperCase()}</span>{pp ? `, pp.${pp}` : ""}]</a>
    );

}

function Glossary ({name, file}) {

    file = file.startsWith("sd.") ? file.replace("sd.", "softwaredesign.") : file;


    const href = `/docs/Glossary/${file}`;
    return (
        <a href={href} className="glosRef">{name}</a>
    );

}

export {Glossary as GlosRef};
export {Bibliography as BibRef};