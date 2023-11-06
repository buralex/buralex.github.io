import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

// // for multiple gallery without order
// const Image = () => (
//     <StaticQuery
//         query={graphql`
//             query {
//                 allImageSharp {
//                     edges {
//                         node {
//                             id
//                             fluid(maxWidth: 200, maxHeight: 200) {
//                                 ...GatsbyImageSharpFluid
//                             }
//                         }
//                     }
//                 }
//             }
//         `}
//         render={data => {
//             const imgGridStyle = {
//                 display: 'grid',
//                 gridTemplateColumns: `repeat(auto-fill, 200px)`,
//             };
//             return (
//                 <div style={imgGridStyle}>
//                     {data.allImageSharp.edges.map((edge, index) => (
//                         <Img key={index} fluid={edge.node.fluid} />
//                     ))}
//                 </div>
//             );
//         }}
//     />
// );

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage1: file(relativePath: {eq: "portfolio/cabin.png"}) {
                    ...fluidImage
                }
                placeholderImage2: file(relativePath: {eq: "portfolio/cake.png"}) {
                    ...fluidImage
                }
            }
        `}
        render={data => {
            return (
                <div>
                    <Img fluid={data.placeholderImage1.childImageSharp.fluid} />
                    <Img fluid={data.placeholderImage2.childImageSharp.fluid} />
                </div>
            );
        }}
    />
);
export default Image;
