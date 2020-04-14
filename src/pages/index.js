import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="Hero">
    <div className="HeroGroup">
      <h1>This is a header</h1>
      <p>Changed this paragraph.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to next page</Link>
    </div>
  </div>
)

export default IndexPage
