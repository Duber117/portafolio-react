/**
 * @copyright 2025 <>
 * @license Apache-2.0
 */

import { useRef, useEffect, act } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Navbar = ({ navOpen }) => {
    const { t } = useTranslation(["welcome"]);
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const initActiveBox = () => {
        if (lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    }
    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    const navItems = [
        {
          label: t("Home"),
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: t("About"),
          link: '#about',
          className: 'nav-link'
        },
        {
          label: t("Work"),
          link: '#work',
          className: 'nav-link'
        },
        // {
        //   label: 'Reviews',
        //   link: '#reviews',
        //   className: 'nav-link'
        // },
        {
          label: t("Contact"),
          link: '#contact',
          className: 'nav-link'
        }
      ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a href={link} className={className} ref={ref} key={key} onClick={activeCurrentLink}>{label}</a>
                ))
            }
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar;