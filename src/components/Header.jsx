import Navbar from "./Navbar";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation(["welcome"]);
    const [navOpen, setNavOpen] = useState(false);
    const activeBox = useRef();

    const changeLanguage = () => {
      i18n.changeLanguage(i18n.language === "en" ? "es" : "en").then(() => {
        initActiveBox();
      });
    };

    const initActiveBox = () => {
        if (activeBox.current) {
            const lastActiveLink = document.querySelector('.nav-link.active');
            if (lastActiveLink) {
                activeBox.current.style.top = lastActiveLink.offsetTop + 'px';
                activeBox.current.style.left = lastActiveLink.offsetLeft + 'px';
                activeBox.current.style.width = lastActiveLink.offsetWidth + 'px';
                activeBox.current.style.height = lastActiveLink.offsetHeight + 'px';
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img src="/images/Logo.png" width={70} height={70} alt="Dxp117" />
                    </a>
                </h1>
                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded ">{navOpen ? 'close' : 'menu'}</span>
                    </button>
                    <Navbar navOpen={navOpen} activeBoxRef={activeBox} />
                </div>
                <button onClick={changeLanguage} className="btn btn-secondary max-md:hidden md:justify-self-end">{t('Change Language')}</button>
            </div>
        </header>
    );
}

export default Header;