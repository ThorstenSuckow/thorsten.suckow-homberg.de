import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import BackToTopOnCitation from '@site/src/plugins/thorstensuckow-bibref/BackToTopOnCitation';
import References from '@site/src/plugins/thorstensuckow-bibref/References';

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


