import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Logo = () => (
    <StaticQuery
        // query={graphql`
        //   query {
        //     placeholderImage: file(relativePath: { eq: "logo.svg" }) {
        //       childImageSharp {
        //         fluid(maxWidth: 300) {
        //           ...GatsbyImageSharpFluid
        //         }
        //       }
        //     }
        //   }
        // `}
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "logo.svg" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
                extension
                publicURL
            }
          }
        `}
        render={data => {
            console.log('aaaaaaaaaaaaaaaaaaa',data);
            return <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
        }}
    />
)
export default Logo
