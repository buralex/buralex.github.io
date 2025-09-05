import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ActiveLink } from '@/components/ActiveLink';

import { cssClass } from '@/utils';
import { useWindowScroll } from '@/hooks/useWindowScroll';

import styles from './TopNavbar.module.css';

const NAV_TRANSPARENT_CLASS = 'bg-transparent';
const SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG = 10;

const calculateTopNavBgClass = ({
  currentScrollY,
}: {
  currentScrollY: number;
}) =>
  currentScrollY > SCROLL_TOP_LIMIT_TO_CHANGE_NAV_BG
    ? styles.navbarSmall
    : NAV_TRANSPARENT_CLASS;

const NavLink = ({
  collapseTopNav,
  href,
  text,
}: {
  collapseTopNav: () => void;
  href: string;
  text: string;
}) => (
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

export const TopNavbar = () => {
  const [topNavExpanded, setTopNavExpanded] = useState(false);
  const [topNavClass, setTopNavClass] = useState(NAV_TRANSPARENT_CLASS);

  useEffect(() => {
    setTopNavClass(calculateTopNavBgClass({ currentScrollY: window.scrollY }));
  }, []);

  const changeTopNavClassIfNeeded = useCallback(() => {
    setTopNavClass(calculateTopNavBgClass({ currentScrollY: window.scrollY }));
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
    <nav className={cssClass('navbar navbar-expand-lg fixed-top', topNavClass)}>
      <div className="container">
        <Link className="navbar-brand pt-0" href="/" onClick={collapseTopNav}>
          <img
            src="/images/logo/logo_new_light_min.svg"
            alt="Alex Bur logo"
            width={35}
            height={24}
          />
        </Link>

        <Button
          className={`navbar-toggler shadow-none border-0 ${styles.navbarToggler}`}
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
          className={cssClass(
            'collapse navbar-collapse',
            topNavExpanded && 'show',
          )}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavLink href="/" text="About" collapseTopNav={collapseTopNav} />
            <NavLink
              href="/contact"
              text="Contact"
              collapseTopNav={collapseTopNav}
            />
            <li className="nav-item">
              <a
                className="nav-link text-white text-decoration-none cool-link"
                target="_blank"
                rel="noopener noreferrer"
                href="/files/Oleksandr_Burlachenko_CV.pdf"
              >
                View CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
