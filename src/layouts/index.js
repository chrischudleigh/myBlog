import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Nav from '../components/Nav'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Web Bytes"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      
    >
    < link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"  />
 </Helmet>
 <div className="container">
    <Header />
    <Nav />
    <div>
      {children()}
    </div>
  </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
