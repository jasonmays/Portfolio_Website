import React from "react"
import styled from "styled-components"
import Layout from "../components/Theme/layout"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  h1 {
    font-size: 1.5rem;
  }
`

const NotFoundPage = () => {

  return (
    <Layout>
    <StyledSection>
        <h1 data-testid="heading">NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </StyledSection>
    </Layout>
  )
}

export default NotFoundPage