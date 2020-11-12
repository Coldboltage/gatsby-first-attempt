import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Helmet} from "react-helmet"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Helmet 
      meta={[
        {
          name: "description",
          content: "This is a test to see if this can be seen"
        }
      ]}
    />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
