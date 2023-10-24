import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.scss'

function Nav(props) {
    const [isShow, setIsShow] = useState(false)

    let location = useLocation() // location: obj

    useEffect(() => {
        // Even though I have blocked the /login && /register page 
        // when logging in successfully, 
        // we should still turn off the header bar of both of these pages.
        if (location.pathname !== '/login' && location.pathname !== '/register') {
            setIsShow(true)
        }
    }, [])

    return (
        <>
            {isShow === true &&
                <div className="topnav">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            }
        </>
    )
}

export default Nav