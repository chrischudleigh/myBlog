import React from 'react';
import Link from "gatsby-link";
const BlogPost = ({node}) => {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            border: '1px solid #ccc'
        }}>
            <h3><Link to={node.slug}>{node.title}</Link></h3>
            <p>{node.createdAt}</p>
            <div>{node.content.childMarkdownRemark.excerpt}</div>
        </div>
    )
}

const IndexPage = (props) => {

    console.log(props)
    return (
        <div>
            {props.data.allContentfulBlogPost.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
        </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
        allContentfulBlogPost(
            filter: {
                node_locale: {eq: "en-AU"}
            },
            sort: {
              fields: [createdAt], order: DESC
            }
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    createdAt(formatString: "MMMM DD, YYYY")
                    content {
                      childMarkdownRemark {
                          excerpt
                      }
                    }
                    
                }
            }  
          } 
        }
`
