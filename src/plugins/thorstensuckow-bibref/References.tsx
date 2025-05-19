import React from "react";
import bibEntries from '@site/static/bibref/combined-bib.json';


export default function ({bibRefs}: { bibRefs: string[] }) {
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