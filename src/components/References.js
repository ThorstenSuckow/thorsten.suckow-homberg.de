

import React from 'react';
import LocRef from '@site/src/plugins/thorstensuckow-bibref/LocRef';


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

    const href = `/docs/wiki/${file}`;
    return (
        <a href={href} className="glosRef">{name}</a>
    );

}

export {toolbox as GlosRef};
export {LocRef, Figure, Abbildung, LocRef as BibRef};