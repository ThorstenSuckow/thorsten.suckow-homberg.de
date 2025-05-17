import React from 'react';
import DocItemOriginal from '@theme-original/DocItem';
import type {Props} from '@theme/DocItem';
import {BackButton} from '@site/src/components/BackButton';
import {Figure, BibRef} from '@site/src/components/References';

export default function DocItemWrapper(props: Props): JSX.Element {
    return (
        <>
            <DocItemOriginal {...props} />
        </>
    );
}

/*

import React from 'react';
import DocItemOriginal from '@theme-original/DocItem';
import type { Props } from '@theme/DocItem';
import fs from 'fs';
import path from 'path';
import bibtexParse from 'bibtex-parse-js';

export default function DocItemWrapper(props: Props): JSX.Element {
  function loadBibEntries(): Record<string, any> {
    const bibPath = path.resolve(__dirname, '../../../data/sources.bib');
    const raw = fs.readFileSync(bibPath, 'utf8');
    const parsed = bibtexParse.toJSON(raw);
    const entries: Record<string, any> = {};
    parsed.forEach(entry => {
      if (entry.citationKey) {
        entries[entry.citationKey] = {
          ...entry.entryTags,
          _original: entry.original,
        };
      }
    });
    return entries;
  }

  const locRefIds: Set<string> = new Set();

  function extractLocRefs(node: any) {
    if (React.isValidElement(node)) {
      if (node.type?.name === 'LocRef' || node.type === 'LocRef') {
        if (node.props?.id) {
          locRefIds.add(node.props.id);
        }
      }
      if (node.props?.children) {
        const children = Array.isArray(node.props.children)
          ? node.props.children
          : [node.props.children];
        children.forEach(extractLocRefs);
      }
    }
  }

  const pageContent = <DocItemOriginal {...props} />;
  extractLocRefs(pageContent);

  const bibEntries = loadBibEntries();

  return (
    <>
      {pageContent}

      {locRefIds.size > 0 && (
        <footer
          style={{
            marginTop: '3rem',
            borderTop: '1px solid #ddd',
            paddingTop: '1rem',
            fontSize: '0.95em',
          }}
        >
          <h2>Zitierte Literatur</h2>
          <ul>
            {[...locRefIds].map(id => {
              const entry = bibEntries[id];
              return (
                <li id={`ref-${id}`} key={id}>
                  {entry ? (
                    <>
                      <span>
                        {entry.author && <>{entry.author}: </>}
                        {entry.title && <em>{entry.title}</em>}
                        {entry.year && <span> ({entry.year})</span>}
                        {entry.publisher && <span>, {entry.publisher}</span>}
                      </span>{' '}
                      <a
                        href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                          entry._original,
                        )}`}
                        download={`${id}.bib`}
                        title="BibTeX herunterladen"
                        style={{ marginLeft: '0.5rem', fontSize: '0.8em' }}
                      >
                        [BibTeX]
                      </a>
                    </>
                  ) : (
                    <span style={{ color: 'red' }}>[Unbekannter Eintrag: {id}]</span>
                  )}
                </li>
              );
            })}
          </ul>
        </footer>
      )}
    </>
  );
}

*/