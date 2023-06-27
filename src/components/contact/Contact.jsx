import React from 'react'
import './Contact.css'
import { GrMail } from 'react-icons/gr'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillPhone, AiFillGithub } from 'react-icons/ai'


const date = new Date().getFullYear()


function Contact() {
    return (
        <footer className='contact'>
            <div style={{ marginBottom: '100px' }}>
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe, eum, architecto ab modi sapiente soluta neque atque tenetur autem blanditiis ea molestias non tempore libero veniam eligendi delectus ducimus fugit in consectetur consequuntur temporibus, excepturi facilis! Animi dignissimos molestiae sequi dolorem itaque! Libero numquam dignissimos quis sit vitae sed!</p>
            </div>
            <div className="container" style={{ marginBottom: '100px' }}>
                <div className="col-md-3 pr-5">
                    <a className="btn btn-contact" href="mailto:ademkaragulle@outlook.com">
                        <div>e-Mail</div>
                        <GrMail />
                    </a>
                </div>
                <div className="col-md-3 pr-5">
                    <a className="btn btn-contact" href="tel:+905335987708">
                        <div>Phone</div>
                        <AiFillPhone />
                    </a>
                </div>
                <div className="col-md-3 pr-5">
                    <a className="btn btn-contact" href="https://github.com/ademkaragulle" target='_blank'>
                        <div>Github</div>
                        <AiFillGithub />
                    </a>
                </div>
                <div className="col-md-3">
                    <a className="btn btn-contact" href="https://www.linkedin.com/in/ademkarag%C3%BClle/" target='_blank'>
                        <div>Linkedin</div>
                        <BiLogoLinkedin />
                    </a>
                </div>
            </div>
            <div className='bottom-footer'>
                Copyright &copy;{date} All rights reserved | This website is made by <a href="../#">Adem Karagülle</a>
            </div>
        </footer>
    )
}

export default Contact