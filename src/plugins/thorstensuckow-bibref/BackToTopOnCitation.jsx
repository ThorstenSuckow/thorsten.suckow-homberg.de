import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import '@site/src/plugins/thorstensuckow-bibref/bibRef.css';

function getAbsoluteOffset(el) {
    let top = 0;
    let left = 0;
    while (el) {
        top += el.offsetTop;
        left += el.offsetLeft;
        el = el.offsetParent;
    }
    return { top, left };
}

export default function BackToTopOnCitation() {
    const location = useLocation();
    const ref = useRef(null);
    const [style, setStyle] = useState(null);

    useEffect(() => {
        if (!location.hash.startsWith('#bibref-')) {
            return;
        }

        const id = location.hash.slice(1);
        const el = document.getElementById(id);

        if (!el) {
            console.warn('Anchor not found:', id);
            return;
        }

        const { top, left } = getAbsoluteOffset(el);

        setStyle({
            position: 'absolute',
            top: `${top-5}px`,
            left: `${left-85}px`,
            zIndex: 1000,
        });
        const hide = () => setStyle(null);

        window.setTimeout(() => window.addEventListener('scroll', hide, { once: true }), 250)
       // window.addEventListener('scroll', hide, { once: true });

        return () => {
            window.removeEventListener('scroll', () => setStyle(null));
        };

    }, [location.hash]);

    if (!style) return null;

    return (
        <div
            ref={ref}
            className="bibBack"
            style={{
                ...style
            }}
            onClick={() => history.go(-1)}
            title="Back"
        >
            ↑ Back
        </div>

    );
}