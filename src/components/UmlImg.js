

import React from 'react';

function UmlImg ({width, children, title, figure}) {

    const ref = React.createRef();

    if (!width) {
        React.useEffect(() => {
            const el = ref.current;
            let width = el.firstChild.firstChild.getAttribute("width")
            el.style.width = `${width}px`;
        }, []);

    }

    return (
        <div style={{width, textAlign:"center",margin:20}} ref={ref}>
            <div className="umlImg">{children}</div>
            <div style={{textAlign:"center"}}>
                <sup ><b>Figure {figure ?? 1}</b> {title}</sup>
            </div>
        </div>
    );

}

export {UmlImg};