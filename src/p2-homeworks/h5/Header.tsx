import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/pre-junior">
                        PreJunior
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/junior">
                        Junior
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/junior-plus">
                        JunPlus
                    </NavLink>
                </li>
            </ul>


            // add NavLinks

        </div>
    )
}

export default Header
