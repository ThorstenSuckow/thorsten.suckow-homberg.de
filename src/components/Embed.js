

import React from 'react';
import l8 from "@l8js/l8";
import Gist from "react-gist";


function Embed ({width, children, title, figure, modeAware}) {

    const ref = React.createRef();

    if (!width) {
        React.useEffect(() => {
            const el = ref.current;
            let width = el.firstChild.firstChild.getAttribute("width");
            el.style.width = `${width}px`;
        }, []);

    }

    return (
        <div style={{width, textAlign:"center",margin:20}} ref={ref}>
            <div className={modeAware !== false ? "umlImg" : ""}>{children}</div>
            <div style={{textAlign:"center"}}>
                <sup ><b>{l8.isString(figure) ? figure : `Figure ${figure ?? 1}`}</b> <span dangerouslySetInnerHTML={{__html: title}}></span></sup>
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
        If you think you spotted an issue caused by malformed formatting, please <a href="mailto:thorsten@suckow-homberg.de">let me know</a>.
    </div>);

}

export {GitCode, Embed, ImgEmbed, UmlEmbed, MigrationNotice};