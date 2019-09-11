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

const GalleryItem = props => {
    const {imgFluid} = props;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x" />
                    </div>
                </div>
                <Img className="img-fluid" fluid={imgFluid} />
            </div>
        </div>
    );
};

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                cabin: file(relativePath: {eq: "portfolio/cabin.png"}) {
                    ...fluidImage
                }
                cake: file(relativePath: {eq: "portfolio/cake.png"}) {
                    ...fluidImage
                }
            }
        `}
        render={data => {
            const {cabin, cake} = data;
            const getFluid = element => element.childImageSharp.fluid;
            return (
                <>
                    <GalleryItem imgFluid={getFluid(cabin)} />
                    <GalleryItem imgFluid={getFluid(cake)} />
                </>
            );
        }}
    />
);
export default Image;
