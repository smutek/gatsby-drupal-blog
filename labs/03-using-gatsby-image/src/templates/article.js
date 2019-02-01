import React from 'react'
import { graphql } from 'gatsby'

// TODO: import Bio component
import Layout from '../components/layout'

export default function BlogPost({ data }) {
  const { article } = data
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: article.fields.markdownBody.childMarkdownRemark.html }} />
      {/* TODO: render Bio component */}
    </Layout>
  ) 
}

export const blogPostQuery = graphql`
  query GetBlogPostBySlug($slug: String!) {
    article: nodeArticle(fields:{slug:{eq:$slug}}) {
      title
      fields {
        markdownBody {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`