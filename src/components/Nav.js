import React from 'react';
import { NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li className="nav-link">
                                <NavLink to="/case-stuides" exact>
                                    Case Studies
                                </NavLink>
                            </li>
                            <li className="nav-link" >
                                <NavLink to="/approach" exact>
                                    Approach
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/about-us" exact>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to="/services" exact>
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contacts</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact" exact>
                                        Get in touch with us.
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audit" exact>
                                        Get a free audit
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Headquarters</li>
                                <li>Route du Jura 49</li>
                                <li>1700 Fribourg</li>
                                <li>Switzerland</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>+41 (0) 76 453 63 74</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
