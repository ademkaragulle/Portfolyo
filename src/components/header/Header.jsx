import React, { useEffect, useState } from 'react'
import akLogo from '../../assets/AK-Logo.png'
import './Header.css'


function Header() {
    const [currentScroll, setCurrentScroll] = useState(false)
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 400) {
            setCurrentScroll(true)
        } else {
            setCurrentScroll(false)
        }
    });

    return (
        <div className={currentScroll ? "header toggle-header" : "header"}>
            <div className="container-header">
                <a className='header-left-side' href="#hi-there">
                    <img style={{ height: '70%', padding: 'auto' }} src={akLogo} alt="" />
                </a>
                <div className="header-right-side">

                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#certificates">Certificates</a>
                    <a href="#contact">Contact</a>

                </div>
            </div>
        </div >
    )
}

export default Header