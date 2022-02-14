import React from 'react';
import '../styles/navigation.css';
import { NavLink } from "react-router-dom";


const menu = [
    {name: "Home", path: "/"},
    {name: "Cars", path: "/cars"},
    {name: "Contact", path: "/contact"},
    {name: "Admin", path: "/admin"},
    //{name: "bla", path:"/bla"},
]

function Navigation() {
    const menuitems = menu.map( menuitem => (
        <li key={menuitem.name} >
            <NavLink to={menuitem.path} >{menuitem.name} </NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menuitems}
            </ul>
        </nav>
    )
}

export default Navigation;