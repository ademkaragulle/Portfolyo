import React from 'react'
import './Contact.css'
import { GrMail } from 'react-icons/gr'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { LiaDownloadSolid } from 'react-icons/lia'
import Resume from '../../assets/Adem_Karagülle_Resume.pdf'


const date = new Date().getFullYear()


function Contact() {
    return (
        <footer id='contact' className='contact'>
            <div className='contact-info'>
                <h2>Contact</h2>
                <p>You can download the CV by clicking the link below. You can review my github and linkedin profiles and send an e-mail for communication. Thank you for visiting my website. &#10084;</p>
            </div>
            <div className="container contact-info">
                <div className="col-md-3">
                    <a download href={Resume} className='btn btn-contact'>
                        <div>Download CV</div>
                        <LiaDownloadSolid />
                    </a>
                </div>
                <div className="col-md-3">
                    <a className="btn btn-contact" href="mailto:ademkaragulle@outlook.com">
                        <div>E-Mail</div>
                        <GrMail />
                    </a>
                </div>
                <div className="col-md-3">
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