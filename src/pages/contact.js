import React from "react"
import {Link} from "gatsby"

import Layout from "src/layouts_old"
import SEO from "../components/seo"

const SecondPage = () => (
    <div>
        <SEO title="Contacts"/>
        <h1>Contacts</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default SecondPage
