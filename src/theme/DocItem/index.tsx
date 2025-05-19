import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import bibEntries from '@site/static/bibref/combined-bib.json';
import BackToTopOnCitation from '@site/src/plugins/thorstensuckow-bibref/BackToTopOnCitation';

// Deine eigene Referenz-Komponente
function References({bibRefs}: { bibRefs: string[] }) {
    if (!bibRefs?.length) return null;

    return (
        <>
        <hr />
        <section className="footnotes">
            <h2>References</h2>
            <ol>
                {bibRefs.map((id) => {
                    const entry = bibEntries[id.toLowerCase()] ;
                    return (
                        <li id={`ref-${id}`} key={id}>
                            <a id={`bibref-${id.toLowerCase()}`} />[{id}]:{' '}
                            {entry ? (
                                <>
                  <span>
                    {entry.author && <strong>{entry.author}: </strong>}
                      {entry.title && <em>{entry.title}</em>}
                      {entry.year && <span> ({entry.year})</span>}
                      {entry.publisher && <span>, {entry.publisher}</span>}
                      {entry.doi && <span>, <a href={`https://doi.org/${entry.doi}`}>{entry.doi}</a> </span>}
                  </span>{' '}
                                    <a
                                        href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                                            entry._original,
                                        )}`}
                                        download={`${id}.bib`}
                                        style={{marginLeft: '0.5rem', fontSize: '0.8em'}}
                                    >
                                        [BibTeX]
                                    </a>
                                </>
                            ) : (
                                <span style={{color: 'red'}}>[unknown ref: {id}]</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </section>
        </>
    );
}

export default function DocItem(props) {
    const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
    const MDXComponent = props.content;
    const bibRefs = props.content.bibRefs;

    return (
        <DocProvider content={props.content}>
            <HtmlClassNameProvider className={docHtmlClassName}>
                <DocItemMetadata/>
                <DocItemLayout>
                    <MDXComponent/>
                    <References bibRefs={bibRefs}/>
                    <BackToTopOnCitation />
                </DocItemLayout>
            </HtmlClassNameProvider>
        </DocProvider>
    );
}


