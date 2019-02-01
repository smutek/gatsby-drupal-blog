import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
export default function BlogPost() {
    return (
        <Layout>
            <SEO title="Blog post" description="An amazing blog post!" />
            <h1>This is a blog post!</h1>
        </Layout>
    );
}