import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import akLogo from '../../assets/AK-Logo.png'

function HeaderResponsive({ isOpenResponsiveMenu, closeResponsiveMenu }) {
    return (
        <div className={isOpenResponsiveMenu ? 'responsive-menu' : 'responsive-menu-close'}>
            <div onClick={closeResponsiveMenu} className='responsive-left-side'></div>
            <div className={isOpenResponsiveMenu ? 'responsive-right-side' : null}>
                <div className='responsive-menu-items'>
                    <a className='responsive-menu-logo' href="#hi-there" style={{ width: "100%" }}>
                        <img style={{ height: '70%', padding: 'auto' }} src={akLogo} alt="" />
                    </a>
                    <div>
                        <a onClick={closeResponsiveMenu} href="#about"><IoIosArrowBack /> About</a>
                        <a onClick={closeResponsiveMenu} href="#projects"> <IoIosArrowBack />Projects</a>
                        <a onClick={closeResponsiveMenu} href="#certificates"><IoIosArrowBack />Certificates</a>
                        <a onClick={closeResponsiveMenu} href="#contact"><IoIosArrowBack />Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderResponsive