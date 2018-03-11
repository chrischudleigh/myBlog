import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BlogPost extends Component {
    render() {
        console.log(this.props)
        const { title, createdAt, content } = this.props.data.contentfulBlogPost
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '0.5rem'
                }}>
                    {title}
                </h1>
                <p>{createdAt}</p>
                
                <hr />
                <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
            </div>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            createdAt(formatString: "MMMM DD, YYYY")
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`