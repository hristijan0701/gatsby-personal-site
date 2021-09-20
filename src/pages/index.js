import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
const FlexItem = styled.div`
  width: 48%;
  @media(max-width: 920px) {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FlexWrap>
      <FlexItem>
        <StaticImage
          src="../images/me.png"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </FlexItem>
      <FlexItem>
        <h2>Full Stack JS/TS Expert</h2>
        <ul>
          <li>React-Native, Ionic, NativeScript</li>
          <li>ReactJS, AngularJS, NodeJS, VueJS, NextJS, Gatsby, Redux</li>
          <li>HTML, CSS, SCSS, SASS, Bootstrap, Material design</li>
          <li>Firebase, AWS</li>
          <li>PostgreSQL, MySQL, SQLITE, MongoDB, MS-SQL</li>
          <li>Restful API, GraphQL</li>
          <li>Github, Bitbucket, Gitlab, ...</li>
          <li> CI/CD, Crypto, BlockChain</li>
        </ul>
      </FlexItem>
    </FlexWrap>
  </Layout>
)

export default IndexPage
