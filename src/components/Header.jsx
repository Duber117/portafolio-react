/**
 * @copyright 2025 <>
 * @license Apache-2.0
 */

import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
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
                    <Navbar navOpen={navOpen} />
                </div>
                {/* <a href="#contact" className="btn btn-secondary max-md:hidden md:jusstify-self-end">
                    Contactame
                </a> */}
                <select id="countries" className="btn btn-secondary max-md:hidden md:jusstify-self-end">
                    <option value="ES">Spanish</option>
                    <option value="US">United States</option>
                </select>
                

            </div>
        </header>
    );
    }

export default Header;