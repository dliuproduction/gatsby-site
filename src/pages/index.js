import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi!</h1>
    <p>Welcome to my gatsby site.</p>
    <p>This is pretty <em>cool</em></p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
