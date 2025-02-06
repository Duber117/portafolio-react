import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Navbar = ({ navOpen, activeBoxRef }) => {
    const { t } = useTranslation(["welcome"]);
    const lastActiveLink = useRef();

    const initActiveBox = () => {
        if (lastActiveLink.current) {
            activeBoxRef.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBoxRef.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBoxRef.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBoxRef.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    };

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBoxRef.current.style.top = event.target.offsetTop + 'px';
        activeBoxRef.current.style.left = event.target.offsetLeft + 'px';
        activeBoxRef.current.style.width = event.target.offsetWidth + 'px';
        activeBoxRef.current.style.height = event.target.offsetHeight + 'px';
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
            <div className="active-box" ref={activeBoxRef}></div>
        </nav>
    );
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    activeBoxRef: PropTypes.object.isRequired
}

export default Navbar;