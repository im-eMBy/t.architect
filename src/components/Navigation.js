import { NavLink, Link } from "react-router-dom";

export const Navigation = ({logoUrl}) => {

    return <nav className="navigation">
        <Link className="navigation__logo-link" to="/"><img className="navigation__logo" src={`${logoUrl}`} alt="Navigation logo"/></Link>
        <ul className="navigation__list">
            <li className="navigation__element"><NavLink to="/projects">projects</NavLink></li>
            <li className="navigation__element"><NavLink to="/interiors">interiors</NavLink></li>
            <li className="navigation__element"><NavLink to="/awards">awards</NavLink></li>
            <li className="navigation__element"><NavLink to="/about">about&nbsp;me</NavLink></li>
        </ul>
    </nav>
}