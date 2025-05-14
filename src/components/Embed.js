

import React from 'react';
import l8 from "@l8js/l8";
import CodeBlock from '@theme/CodeBlock';
import fetch from 'cross-fetch';
import Gist from "react-gist";
import {Cite} from "./References";

function Embed ({width, children, title, figure, figref, modeAware}) {

    return (
        <div style={{ display:"flex", justifyContent:"center"}}>
        <div style={{maxWidth : width, textAlign:"center",margin:20}}>
            {figref && <a name={`fig_${figref}`} />}
            <div className={modeAware !== false ? "umlImg" : ""}>{children}</div>
            <div style={{textAlign:"center"}}>
                <sup ><b>{l8.isString(figure) ? figure : `Figure ${figure ?? (figref ?? 1)}`}</b> <span dangerouslySetInnerHTML={{__html: title}}></span></sup>
            </div>
        </div>
        </div>
    );
}

function CiteEmbed ({width, children, title, figure, modeAware,  pp, name}) {

    return (
        <div style={{width, textAlign:"center",margin:20}}>
            <div className={modeAware !== false ? "umlImg" : ""}>{children}</div>
            <div style={{textAlign:"center"}}>
                <sup ><b>{l8.isString(figure) ? figure : `Figure ${figure ?? 1}`}</b> <span dangerouslySetInnerHTML={{__html: title}}></span> (Quelle: in Anlehnung an <Cite pp={pp} name={name} />)</sup>
            </div>

        </div>
    );
}


function GitCode ({id, source, title}) {
    return (<Embed
        modeAware={false}
        title={title}
        figure={`Source ${source}`}
    >
        <Gist id={id} />
    </Embed>);
}

function ImgEmbed ({url, figure, title}) {
    return (<Embed
        modeAware={false}
        figure={figure}
        title={title}
    >
        <img alt="{title}" src={url}  />
    </Embed>);
}


function UmlEmbed ({children, figure, title}) {
    return (<Embed
        modeAware={true}
        figure={figure}
        title={title}
        children={children}
    / >);
};

function MigrationNotice({when, where}) {

    const [name, url] = where;
    return (<div>
        This article was originally published in {when} at <a target="_blank" href={url}>{name}</a>.
        Some formatting might have get lost during the migration to this site:
        If you think you spotted an issue caused by malformed formatting, feel free to open a <a href="https://github.com/ThorstenSuckow/thorsten.suckow-homberg.de">Pull Request</a> or <a href="mailto:thorsten@suckow-homberg.de">send me an Email</a>.
    </div>);

}


function ExternalCodeBlock ({url}) {

    const [code, setCode] = React.useState("");

    fetch(url).then((resp) => {
        resp.text().then((code) => setCode(code)) ;
    });

    return (
        <CodeBlock language="php">{code}</CodeBlock>
    );

}



export {CiteEmbed, ExternalCodeBlock, GitCode, Embed, ImgEmbed, UmlEmbed, MigrationNotice};