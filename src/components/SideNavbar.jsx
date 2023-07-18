import { useState } from "react";
import { NavLink } from "react-router-dom";
const links = ["home", "about", "skills", "services", "portfolio", "contact"];

const SideNavbar = (props) => {

    let [ isActive, setActive ] = useState("portfolio");
    console.log(isActive);

    return (
        <aside className={ `side-nav ${props.op ? "open" : null }` }>
            <ul>
                {links &&
                    links.map((el) => {
                        return (
                            <li key={ el }>
                                <a 
                                href={`/${el}`} 
                                key={el}
                                className={ isActive == el ? "active" : null } 
                                onClick={ () => setActive(el) }
                                >
                                {el} 
                                </a>
                                {/* <NavLink to={`/${el}`}> { el } </NavLink> */}
                            </li>
                        )
                    })
                
                }
            </ul>
        </aside>
    )
};

export default SideNavbar;