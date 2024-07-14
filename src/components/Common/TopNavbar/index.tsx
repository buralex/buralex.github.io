import React, {
  // useContext,
  useCallback,
  useState,
} from 'react';
// import Image from 'next/image';
import Link from 'next/link';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from '@/components/Common/Button';
import ActiveLink from '@/components/Common/ActiveLink';

// import { handleTopNavbarAppearance } from 'helpers/handleTopNavbarAppearance';
// import NavbarTopDropDownMenus from '@/components/navbar/top/NavbarTopDropDownMenus';
// import LandingRightSideNavItem from './LandingRightSideNavItem';
// import { topNavbarExpandBreakpoint } from 'constants/index';
import { cssClasses } from '@/utils';
import useWindowScroll from '@/hooks/useWindowScroll';
// import AppContext from 'context/Context';
// import { getIsServer } from 'helpers';
import styles from './TopNavbar.module.scss';

const NAV_TRANSPARENT_CLASS = 'bg-transparent';
const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 10;

const calculateTopNavBgClass = ({ currentScrollY }) => {
  if (currentScrollY > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG) {
    return styles.navbarSmall;
  }
  return NAV_TRANSPARENT_CLASS;
};

const NavLink = ({ collapseTopNav, href, text }) => {
  return (
    <li className="nav-item">
      <ActiveLink
        activeClassName="active"
        className="nav-link text-white text-decoration-none cool-link"
        aria-current="page"
        href={href}
        onClick={collapseTopNav}
      >
        {text}
      </ActiveLink>
    </li>
  );
};

const TopNavbar = () => {
  const [topNavExpanded, setTopNavExpanded] = useState(false);
  const [topNavClass, setTopNavClass] = useState(NAV_TRANSPARENT_CLASS);

  const changeTopNavClassIfNeeded = useCallback(() => {
    const nextTopNavClass = calculateTopNavBgClass({
      currentScrollY: window.scrollY,
    });
    setTopNavClass(nextTopNavClass);
  }, []);

  const toggleNav = () => {
    setTopNavExpanded((prevExpanded) => {
      // Always show "not transparent" nav when opening nav
      if (!prevExpanded) {
        setTopNavClass(styles.navbarSmall);
      } else {
        changeTopNavClassIfNeeded();
      }

      return !prevExpanded;
    });
  };

  const collapseTopNav = () => {
    setTopNavExpanded(false);
    changeTopNavClassIfNeeded();
  };

  useWindowScroll(({ currentScrollY, scrollingUp }) => {
    const nextTopNavClass = calculateTopNavBgClass({ currentScrollY });

    // To prevent nav blinking when you open nav and start scrolling down
    if (
      topNavClass === styles.navbarSmall &&
      !scrollingUp &&
      currentScrollY <= SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG
    ) {
      return;
    }

    if (topNavExpanded && scrollingUp) {
      return;
    }

    setTopNavClass(nextTopNavClass);
  });

  return (
    <nav
      className={cssClasses([
        'navbar navbar-expand-lg navbar-dark fixed-top',
        topNavClass,
      ])}
    >
      <div className="container">
        <Link
          className="navbar-brand cool-link"
          href="/"
          onClick={collapseTopNav}
        >
          Uplium
        </Link>

        <Button
          className="navbar-toggler shadow-none border-0"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <div className="d-flex flex-column align-items-center">
            <div className="icon-bar" />
            <div className="icon-bar" />
            <div className="icon-bar" />
          </div>
        </Button>
        <div
          className={cssClasses([
            'collapse navbar-collapse',
            topNavExpanded && 'show',
          ])}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink
              href="/products"
              text="Products"
              collapseTopNav={collapseTopNav}
            />

            <NavLink
              href="/contact"
              text="Contact"
              collapseTopNav={collapseTopNav}
            />
          </ul>
        </div>
      </div>
    </nav>
  );

  // TODO check if it's useful
  // return (
  //   <Navbar bg="light" expand="lg">
  //     <Container>
  //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link href="#home">Home</Nav.Link>
  //           <Nav.Link href="#link">Link</Nav.Link>
  //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //             <NavDropdown.Item href="#action/3.2">
  //               Another action
  //             </NavDropdown.Item>
  //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //             <NavDropdown.Divider />
  //             <NavDropdown.Item href="#action/3.4">
  //               Separated link
  //             </NavDropdown.Item>
  //           </NavDropdown>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );

  // return (
  //   <Navbar
  //     variant={'dark'}
  //     // fixed="top"
  //     expand={topNavbarExpandBreakpoint}
  //     className={cssClasses([
  //       'navbar-standard navbar-theme',
  //       !navbarCollapsed && 'bg-dark',
  //     ])}
  //   >
  //     <Container>
  //       <Navbar.Brand className="text-white" as={Link} href="/">
  //         Uplium
  //       </Navbar.Brand>
  //       <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
  //       <Navbar.Collapse className="scrollbar">
  //         <Nav>
  //           {/*<NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />*/}
  //           TODO NavbarTopDropDownMenus
  //         </Nav>
  //         <LandingRightSideNavItem />
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
};

export default TopNavbar;
