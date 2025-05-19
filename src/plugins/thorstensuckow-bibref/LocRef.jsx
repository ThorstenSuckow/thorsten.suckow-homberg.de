import React from "react";

export default function ({name, pp, add}) {
    const href = `#bibref-${name.toLowerCase()}`;
    return (
        <a href={href}>[<span className="bibRef">📖{name}</span>{add ? `, ${add} ` : "" }{pp ? `, ${pp.includes("-") ? "pp" : "p"}. ${pp}` : ""}]</a>
    );
}
