import React from 'react';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Recommendations from '../components/recommendations';
import Seo from '../components/seo';
import Skills from '../components/skills';
import Tennis from '../components/tennis';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Recommendations />
    <Tennis />
    <Skills />
    <Contact />
  </Layout>
);

export default IndexPage;
