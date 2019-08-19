import React from 'react';
import {Link} from 'gatsby';

import Layout from 'src/layouts_old';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Link as ScrollLink,
    DirectLink,
    Element as ScrollToElement,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from 'react-scroll';
import {pageBlocks} from 'src/constants';
import Image from '../components/image';
import SEO from '../components/seo';
import Drawing from '../images/drawing111.svg';
// const Header = () => (
//     <header className="masthead bg-primary text-white text-center">
//         <div className="container d-flex align-items-center flex-column">
//             <img className="masthead-avatar mb-5" src="img/avataaars.svg" alt="" />
//
//             <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
//
//             <div className="divider-custom divider-light">
//                 <div className="divider-custom-line" />
//                 <div className="divider-custom-icon">
//                     <i className="fas fa-star" />
//                 </div>
//                 <div className="divider-custom-line" />
//             </div>
//
//             <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
//         </div>
//     </header>
// );

const IndexPage = (props) => {
    console.log('index_props', props);
    const {location} = props

    return (
        <div>
            <SEO title="Home" />
            {/* <h1>About</h1> */}
            {/* <p>I am a developer.</p> */}

            {/* /!*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*!/ */}
            {/* /!*    <Image />*!/ */}
            {/* /!*</div>*!/ */}
            {/* <img */}
            {/*    src={Drawing} */}
            {/*    width="500" */}
            {/*    height="500" */}
            {/*    alt="logo" */}
            {/* /> */}
            {/* <Link to="/contact/">Go to contact</Link> */}

            <Nav isHashInUrl={location.hash} />

            <Header />

            <ScrollToElement name={pageBlocks.projects}>
                <section className="page-section portfolio">
                    <ScrollAnimation animateIn="fadeIn" animateOnce>
                        <div className="container">
                            {/* Portfolio Section Heading */}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                                projects
                            </h2>

                            {/* Icon Divider */}
                            <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon">
                                    <i className="fas fa-star" />
                                </div>
                                <div className="divider-custom-line" />
                            </div>

                            {/* Portfolio Grid Items */}
                            <div className="row">
                                {/* Portfolio Item 1 */}
                                <div className="col-md-6 col-lg-4">
                                    <div
                                        className="portfolio-item mx-auto"
                                        data-toggle="modal"
                                        data-target="#portfolioModal1"
                                    >
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                <i className="fas fa-plus fa-3x" />
                                            </div>
                                        </div>
                                        projects
                                        <img className="img-fluid" src="img/portfolio/cabin.png" alt="" />
                                    </div>
                                </div>

                                {/* Portfolio Item 2 */}
                                <div className="col-md-6 col-lg-4">
                                    <div
                                        className="portfolio-item mx-auto"
                                        data-toggle="modal"
                                        data-target="#portfolioModal2"
                                    >
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                <i className="fas fa-plus fa-3x" />
                                            </div>
                                        </div>
                                        test2
                                        <img className="img-fluid" src="img/portfolio/cake.png" alt="" />
                                    </div>
                                </div>

                                {/* Portfolio Item 3 */}
                                <div className="col-md-6 col-lg-4">
                                    <div
                                        className="portfolio-item mx-auto"
                                        data-toggle="modal"
                                        data-target="#portfolioModal3"
                                    >
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                <i className="fas fa-plus fa-3x" />
                                            </div>
                                        </div>
                                        {/* <img className="img-fluid" src={Drawing} alt="" /> */}
                                        test3
                                        <img className="img-fluid" src="img/portfolio/game.png" alt="" />
                                    </div>
                                </div>

                                {/* Portfolio Item 4 */}
                                <div className="col-md-6 col-lg-4">
                                    <div
                                        className="portfolio-item mx-auto"
                                        data-toggle="modal"
                                        data-target="#portfolioModal4"
                                    >
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                <i className="fas fa-plus fa-3x" />
                                            </div>
                                        </div>
                                        <img className="img-fluid" src="img/portfolio/game.png" alt="" />
                                    </div>
                                </div>

                                {/* Portfolio Item 5 */}
                                <div className="col-md-6 col-lg-4">
                                    <div
                                        className="portfolio-item mx-auto"
                                        data-toggle="modal"
                                        data-target="#portfolioModal5"
                                    >
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                <i className="fas fa-plus fa-3x" />
                                            </div>
                                        </div>
                                        <img className="img-fluid" src="img/portfolio/safe.png" alt="" />
                                    </div>
                                </div>

                                {/* Portfolio Item 6 */}
                                <div className="col-md-6 col-lg-4">
                                    <div
                                        className="portfolio-item mx-auto"
                                        data-toggle="modal"
                                        data-target="#portfolioModal6"
                                    >
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                <i className="fas fa-plus fa-3x" />
                                            </div>
                                        </div>
                                        <img className="img-fluid" src="img/portfolio/submarine.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* /.row */}
                        </div>
                    </ScrollAnimation>
                </section>
            </ScrollToElement>

            <ScrollToElement name={pageBlocks.about}>
                <section className="page-section bg-primary text-white mb-0">
                    <div className="container">
                        {/* About Section Heading */}
                        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                        {/* Icon Divider */}
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon">
                                <i className="fas fa-star" />
                            </div>
                            <div className="divider-custom-line" />
                        </div>

                        {/* About Section Content */}
                        <div className="row">
                            <div className="col-lg-4 ml-auto">
                                <p className="lead">
                                    Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
                                    the complete source files including HTML, CSS, and JavaScript as well as optional SASS
                                    stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="col-lg-4 mr-auto">
                                <p className="lead">
                                    You can create your own custom avatar for the masthead, change the icon in the dividers,
                                    and add your email address to the contact form to make it fully functional!
                                </p>
                            </div>
                        </div>

                        {/* About Section Button */}
                        <div className="text-center mt-4">
                            <a
                                className="btn btn-xl btn-outline-light"
                                href="https://startbootstrap.com/themes/freelancer/"
                            >
                                <i className="fas fa-download mr-2" />
                                Free Download!
                            </a>
                        </div>
                    </div>
                </section>
            </ScrollToElement>

            <ScrollToElement name={pageBlocks.contact}>
                <section className="page-section">
                    <div className="container">
                        {/* Contact Section Heading */}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

                        {/* Icon Divider */}
                        <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon">
                                <i className="fas fa-star" />
                            </div>
                            <div className="divider-custom-line" />
                        </div>

                        {/* Contact Section Form */}
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Name</label>
                                            <input
                                                className="form-control"
                                                id="name"
                                                type="text"
                                                placeholder="Name"
                                                required="required"
                                                data-validation-required-message="Please enter your name."
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Email Address</label>
                                            <input
                                                className="form-control"
                                                id="email"
                                                type="email"
                                                placeholder="Email Address"
                                                required="required"
                                                data-validation-required-message="Please enter your email address."
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Phone Number</label>
                                            <input
                                                className="form-control"
                                                id="phone"
                                                type="tel"
                                                placeholder="Phone Number"
                                                required="required"
                                                data-validation-required-message="Please enter your phone number."
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                            <label>Message</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                rows="5"
                                                placeholder="Message"
                                                required="required"
                                                data-validation-required-message="Please enter a message."
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <br />
                                    <div id="success" />
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollToElement>

            {/* Footer */}
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        {/* Footer Location */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                2215 John Daniel Drive
                                <br />
                                Clark, MO 65243
                            </p>
                        </div>

                        {/* Footer Social Icons */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="#">
                                <i className="fab fa-fw fa-facebook-f" />
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#">
                                <i className="fab fa-fw fa-twitter" />
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#">
                                <i className="fab fa-fw fa-linkedin-in" />
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="#">
                                <i className="fab fa-fw fa-dribbble" />
                            </a>
                        </div>

                        {/* Footer About Text */}
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                                <a href="http://startbootstrap.com">Start Bootstrap</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright Section */}
            <section className="copyright py-4 text-center text-white">
                <div className="container">
                    <small>Copyright &copy; Your Website 2019</small>
                </div>
            </section>

            {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
            <div className="scroll-to-top d-lg-none position-fixed ">
                <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                    <i className="fa fa-chevron-up" />
                </a>
            </div>

            {/* Portfolio Modals */}

            {/* Portfolio Modal 1 */}
            <div
                className="portfolio-modal modal fade"
                id="portfolioModal1"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" />
                        </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Log Cabin
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/cabin.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam
                                            velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                            Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Modal 2 */}
            <div
                className="portfolio-modal modal fade"
                id="portfolioModal2"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal2Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" />
                        </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Tasty Cake
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/cake.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam
                                            velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                            Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Modal 3 */}
            <div
                className="portfolio-modal modal fade"
                id="portfolioModal3"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal3Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" />
                        </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Circus Tent
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/circus.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam
                                            velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                            Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Modal 4 */}
            <div
                className="portfolio-modal modal fade"
                id="portfolioModal4"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal4Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" />
                        </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Controller
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/game.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam
                                            velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                            Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Modal 5 */}
            <div
                className="portfolio-modal modal fade"
                id="portfolioModal5"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal5Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" />
                        </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Locked Safe
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/safe.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam
                                            velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                            Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Modal 6 */}
            <div
                className="portfolio-modal modal fade"
                id="portfolioModal6"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="portfolioModal6Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">
                            <i className="fas fa-times" />
                        </span>
                        </button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        {/* Portfolio Modal - Title */}
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                            Submarine
                                        </h2>
                                        {/* Icon Divider */}
                                        <div className="divider-custom">
                                            <div className="divider-custom-line" />
                                            <div className="divider-custom-icon">
                                                <i className="fas fa-star" />
                                            </div>
                                            <div className="divider-custom-line" />
                                        </div>
                                        {/* Portfolio Modal - Image */}
                                        <img className="img-fluid rounded mb-5" src="img/portfolio/submarine.png" alt="" />
                                        {/* Portfolio Modal - Text */}
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
                                            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam
                                            velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                            Nam.
                                        </p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal">
                                            <i className="fas fa-times fa-fw" />
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default IndexPage;
