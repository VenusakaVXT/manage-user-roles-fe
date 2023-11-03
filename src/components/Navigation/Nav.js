import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.scss'

function Nav(props) {
    const [isShow, setIsShow] = useState(false)
    const [activeTab, setActiveTab] = useState('')
    const [lineLeft, setLineLeft] = useState(0)
    const [lineWidth, setLineWidth] = useState(0)

    let location = useLocation() // location: obj

    useEffect(() => {
        // Even though I have blocked the /login && /register page 
        // when logging in successfully, 
        // we should still turn off the header bar of both of these pages.
        if (location.pathname !== '/login' && location.pathname !== '/register') {
            setIsShow(true)
        }

        setActiveTab(location.pathname)
    }, [location])

    useEffect(() => {
        const activeTabElement = document.querySelector('.topnav a.active');

        if (activeTabElement) {
            setLineLeft(activeTabElement.offsetLeft);
            setLineWidth(activeTabElement.offsetWidth);
        }
    }, [activeTab])

    const handleTabClick = (path) => setActiveTab(path)

    return (
        <>
            {isShow === true &&
                <div className="topnav px-5">
                    <div className='logo'>
                        <span className="icon-brand material-symbols-outlined">
                            bolt
                        </span>
                        <div className='brand text-center'>VenusakaVXT</div>
                    </div>

                    <NavLink
                        exact
                        to="/"
                        onClick={() => handleTabClick('/')}
                        className={activeTab === '/' ? 'active' : ''}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/users"
                        onClick={() => handleTabClick('/users')}
                        className={activeTab === '/users' ? 'active' : ''}
                    >
                        Users
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={() => handleTabClick('/projects')}
                        className={activeTab === '/projects' ? 'active' : ''}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => handleTabClick('/about')}
                        className={activeTab === '/about' ? 'active' : ''}
                    >
                        About
                    </NavLink>

                    <div className='line' style={{ left: lineLeft, width: lineWidth }}></div>
                </div>
            }
        </>
    )
}

export default Nav