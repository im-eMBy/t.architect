import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Navigation = ({ logoUrl }) => {
    const [hamburgerMenu, setHamburgerMenu] = useState(window.matchMedia("(max-width: 800px)").matches);
    const [menuOpen, setMenuOpen] = useState(false);
    const hamburgerElement = useRef(null);
    useEffect(() => {
        const windowWatcher = window.matchMedia("(max-width: 800px)");
        const change = (ev) => setHamburgerMenu(ev.matches);
        windowWatcher.addEventListener("change", change);
        return () => {
            windowWatcher.removeEventListener("change", change);
        }
    }, [])

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
        hamburgerElement.current.classList.toggle("navigation__hamburger-button--open");
    }

    return <nav className="navigation">
        <Link className="navigation__logo-link" to="/"><img className="navigation__logo" src={`${logoUrl}`} alt="Navigation logo" /></Link>
        {hamburgerMenu ?
            <>
                <button ref={hamburgerElement} className="navigation__hamburger-button" onClick={() => handleHamburgerClick()}>
                    <svg viewBox="0 0 18 15" width="24" height="24">
                        <path className="hamburger--top" fill="#000000" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
                        <path className="hamburger--middle" fill="#000000" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
                        <path className="hamburger--bottom" fill="#000000" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
                    </svg>
                </button>
                <ul className="navigation__mobile-list" style={menuOpen ? { left: "0", visibility: "visible" } : { left: "100%", visibility: "hidden" }}>
                    <li className="navigation__element"><NavLink to="/projects">projects</NavLink></li>
                    <li className="navigation__element"><NavLink to="/interiors">interiors</NavLink></li>
                    <li className="navigation__element"><NavLink to="/awards">awards</NavLink></li>
                    <li className="navigation__element"><NavLink to="/about">about&nbsp;me</NavLink></li>
                </ul>
            </>
            :
            <ul className="navigation__list">
                <li className="navigation__element"><NavLink to="/projects">projects</NavLink></li>
                <li className="navigation__element"><NavLink to="/interiors">interiors</NavLink></li>
                <li className="navigation__element"><NavLink to="/awards">awards</NavLink></li>
                <li className="navigation__element"><NavLink to="/about">about&nbsp;me</NavLink></li>
            </ul>
        }
    </nav>
}