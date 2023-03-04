

import React from 'react';

function BibliographyReference ({name}) {
    const href = `/docs/bibliography#${name.toLowerCase()}`;
    return (
        <a href={href}>[{name}]</a>
    );

}

export {BibliographyReference as BibRef};