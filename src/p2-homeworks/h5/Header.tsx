import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <ul >
                <li className={s.li_nav}>
                    <NavLink to="/pre-junior"  style={({ isActive }) => {
                        return {

                            margin: "1rem 0",
                            color: isActive ? "red" : "",
                        };
                    }}>
                        PreJunior
                    </NavLink>
                </li>
                <li className={s.li_nav}>
                    <NavLink to="/junior" className={s.blue_link}>
                        Junior
                    </NavLink>
                </li>
                <li className={s.li_nav}>
                    <NavLink to="/junior-plus"  className={{isActive}?{s.blue_link}:{s.yellow_link}}>
                                                JunPlus
                    </NavLink>
                </li>
            </ul>


            // add NavLinks

        </div>
    )
}

export default Header
