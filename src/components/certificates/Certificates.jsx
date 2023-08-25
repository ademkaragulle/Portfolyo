import React from 'react'
import './Certificates.css'
import ArıBilgi from './img/ArıBilgi.png'
import Udemy from './img/Udemy.png'

function Certificates() {
    return (
        <div id='certificates' className='section-certificates'>
            <h2> My Certificates</h2>
            <div className='certificates'>
                <div className='col-md-4'>
                    <div className='single-certificate'>
                        <img className='img-fluid' src={ArıBilgi} alt="" />
                        <h3>Arı Bilgi (Web Design)</h3>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Boostrapt</div>
                        <div>Photoshop</div>
                        <div>Wordpress</div>
                        <a target='_blank' href="https://github.com/ademkaragulle/documents/blob/main/adem-karag%C3%BClle-certificate.jpg" className='btn-certificate'>view</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='single-certificate'>
                        <img className='img-fluid' src={ArıBilgi} alt="" />
                        <h3>Arı Bilgi (JavaScript)</h3>
                        <div>JavaScript</div>
                        <button className='btn-certificate'>view</button>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='single-certificate'>
                        <div>
                            <img className='img-fluid' src={Udemy} alt="" />
                            <h3>Udemy (React)</h3>
                            <div>React Hooks</div>
                            <div>React Router 6</div>
                            <div>TypeScript</div>
                            <div>Material UI</div>
                            <div>Redux</div>
                        </div>
                        <a target='_blank' href="https://github.com/ademkaragulle/documents/blob/main/adem-karag%C3%BClle-certificate.pdf" className='btn-certificate'>view</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates