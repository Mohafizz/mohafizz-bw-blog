import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Typography, Grid } from 'material-ui';
import styled from '../utils/styled';
import Section from '../components/Section';
import Content from '../components/Content';

const HomePage = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title={page.frontmatter.title} />
        <Typography variant="display1">{page.frontmatter.title}</Typography>
        <Content content={page.html} />
      </Grid>
    </Section>
  );
};
export default HomePage;

export const query = graphql`
  query GetHomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
