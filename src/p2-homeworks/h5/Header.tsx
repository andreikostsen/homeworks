import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {MenuButton} from "./MenuButton";

function Header() {

    const [visibility, setVisibility] = useState(false)


    let addClass

    addClass = visibility ? s.menuHide : s.menuShow
    console.log(addClass)

    const showHide = () => {

        setVisibility(!visibility)


    }


    const linkClass = (isActive: boolean) => {

        return isActive ? s.active_link : s.link


    }


        return (

            <div>
                <MenuButton onclickHandler={showHide}/>

                <div className={s.menu + " " + addClass}>

                    <ul>
                        <li className={s.li_nav}>
                            <NavLink to="/pre-junior" className={({isActive})=>linkClass(isActive)}>
                                PreJunior
                            </NavLink>
                        </li>
                        <li className={s.li_nav}>
                            <NavLink to="/junior" className={({isActive}) => linkClass(isActive)}>
                                Junior
                            </NavLink>
                        </li>
                        <li className={s.li_nav}>
                            <NavLink to="/junior-plus" className={({isActive}) => linkClass(isActive)}>
                                JunPlus
                            </NavLink>
                        </li>
                    </ul>



                </div>
            </div>

        )
    }


export default Header
