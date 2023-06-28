import React from 'react'
import İmageOne from '../../assets/imgOne-3000x3000.png'
import İmageTwo from '../../assets/imgTwo-3000x3000.png'
import './HiThere.css'

function HiThere() {
    return (
        <div id='hi-there' className='hi-there'>
            <div className='hi-there-message'>
                <h3>
                    <span style={{ padding: '0px' }}>Hi There, I Am Adem </span><br />
                    <span style={{ color: '#DB9A64', fontSize: '48px' }}>FrontEnd Developer</span>
                </h3>
                <div>
                    <button className='btn' style={{ margin: "30px 10px 0 0" }}>Download CV</button>
                    <a target='_blank' className='btn' href="https://watchmoviee.netlify.app">View My Best Project</a>
                </div>
            </div>
            <div className="cover">
                <div className="imgOne">
                    <img className="img-fluid" src={İmageOne} alt="" />
                </div>
                <div className="imgTwo">
                    <img className="img-fluid" src={İmageTwo} alt="" />
                </div>
            </div>
        </div >

    )
}

export default HiThere