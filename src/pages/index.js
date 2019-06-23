import React from "react"
import { Link } from "gatsby"

import Layout from "src/layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Drawing from "../images/drawing111.svg";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
      <h1>About</h1>
      <p>I am a developer.</p>

      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*    <Image />*/}
      {/*</div>*/}
      <img
          src={Drawing}
          width="500"
          height="500"
          alt="logo"
      />
      <Link to="/contact/">Go to contact</Link>

  </div>
)

export default IndexPage
