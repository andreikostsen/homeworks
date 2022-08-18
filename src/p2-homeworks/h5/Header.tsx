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


        return (

            <div>
                <MenuButton onclickHandler={showHide}/>

                <div className={s.menu + " " + addClass}>

                    <ul>
                        <li className={s.li_nav}>
                            <NavLink to="/pre-junior" style={({isActive}) => {
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
                            <NavLink to="/junior-plus" className={({isActive}) =>
                                isActive ? s.blue_link : s.yellow_link
                            }>
                                JunPlus
                            </NavLink>
                        </li>
                    </ul>



                </div>
            </div>

        )
    }


export default Header
