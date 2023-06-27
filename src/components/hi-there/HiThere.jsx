import React from 'react'
import İmageOne from '../../assets/imgOne-885x830.png'
import İmageTwo from '../../assets/imgTwo-885x830.png'
import imageAdem from './img/adem.png'
import './HiThere.css'

function HiThere() {
    return (
        <div className='hi-there'>
            <div className='hi-there-message'>
                <h3 className='message-h1'>
                    Hi There, I Am Adem <br />
                    <span style={{ color: '#DB9A64' }}>FrontEnd Developer</span>
                </h3>
            </div>
            <div className="cover">
                <div className="imgOne">
                    <img className="img-fluid" src={İmageOne} alt="" />
                </div>
                <div className='imgAdem'>
                    <img className="img-fluid" src={imageAdem} alt="" />
                </div>
                <div className="imgTwo">
                    <img className="img-fluid" src={İmageTwo} alt="" />
                </div>
            </div>
        </div >

    )
}

export default HiThere