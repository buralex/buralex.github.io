import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>I am a developer.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact/">Go to contact</Link>
  </Layout>
)

export default IndexPage
