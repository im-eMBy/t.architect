import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navigation = ({ logoUrl }) => {
    const [hamburgerMenu, setHamburgerMenu] = useState(window.matchMedia("(max-width: 800px)").matches);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const windowWatcher = window.matchMedia("(max-width: 800px)");
        const change = (ev) => setHamburgerMenu(ev.matches);
        windowWatcher.addEventListener("change", change);
        return () => {
            windowWatcher.removeEventListener("change", change);
        }
    }, [])

    return <nav className="navigation">
        <Link className="navigation__logo-link" to="/"><img className="navigation__logo" src={`${logoUrl}`} alt="Navigation logo" /></Link>
        {hamburgerMenu ?
            <>
                <button className="navigation__hamburger-button" onClick={() => setMenuOpen(!menuOpen)}>
                    hamburger
                </button>
                <ul className="navigation__mobile-list" style={menuOpen ? {left:"0", visibility:"visible"} : {left:"100%", visibility:"hidden"}}>
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