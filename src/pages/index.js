import React from "react"

import SEO from "../components/seo"
import Contact from "../components/contact"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Recommendations from "../components/recommendations"
import Tennis from "../components/tennis"
import Skills from "../components/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Recommendations />
    <Tennis />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
