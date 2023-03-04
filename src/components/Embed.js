

import React from 'react';
import l8 from "@l8js/l8";

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

export {Embed};