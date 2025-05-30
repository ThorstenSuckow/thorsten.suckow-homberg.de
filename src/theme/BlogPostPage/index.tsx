/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {
    BlogPostProvider,
    useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPageStructuredData from '@theme/BlogPostPage/StructuredData';
import TOC from '@theme/TOC';
import ContentVisibility from '@theme/ContentVisibility';
import type {Props} from '@theme/BlogPostPage';
import type {BlogSidebar} from '@docusaurus/plugin-content-blog';

/* BIB REF */
import GiscusComponent from '@site/src/components/GiscusComponent';
import BackToTopOnCitation from '@site/src/plugins/thorstensuckow-bibref/BackToTopOnCitation';
import References from '@site/src/plugins/thorstensuckow-bibref/References';
/* BIB REF */


function BlogPostPageContent({
                                 sidebar,
                                 children,
                             }: {
    sidebar: BlogSidebar;
    children: ReactNode;
}): ReactNode {
    const {metadata, toc} = useBlogPost();
    const {nextItem, prevItem, frontMatter} = metadata;
    const {
        hide_table_of_contents: hideTableOfContents,
        toc_min_heading_level: tocMinHeadingLevel,
        toc_max_heading_level: tocMaxHeadingLevel,
    } = frontMatter;
    return (
        <BlogLayout
            sidebar={sidebar}
            toc={
                !hideTableOfContents && toc.length > 0 ? (
                    <TOC
                        toc={toc}
                        minHeadingLevel={tocMinHeadingLevel}
                        maxHeadingLevel={tocMaxHeadingLevel}
                    />
                ) : undefined
            }>
            <ContentVisibility metadata={metadata} />

            <BlogPostItem>{children}</BlogPostItem>

            {(nextItem || prevItem) && (
                <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
            )}
        </BlogLayout>
    );
}

export default function BlogPostPage(props: Props): ReactNode {
    const BlogPostContent = props.content;

    /* BIB REF */
    const bibRefs = props.content.bibRefs;
    /* BIB REF */

    return (
        <BlogPostProvider content={props.content} isBlogPostPage>
            <HtmlClassNameProvider
                className={clsx(
                    ThemeClassNames.wrapper.blogPages,
                    ThemeClassNames.page.blogPostPage,
                )}>
                <BlogPostPageMetadata />
                <BlogPostPageStructuredData />
                <BlogPostPageContent sidebar={props.sidebar}>
                    <BlogPostContent />
                    {/* BIB REF */}
                    <References  bibRefs={bibRefs} />
                    <BackToTopOnCitation />
                    {/* BIB REF */}
                    <GiscusComponent />
                </BlogPostPageContent>
            </HtmlClassNameProvider>
        </BlogPostProvider>
    );
}
