import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { BiLogoCss3 } from 'react-icons/bi'
import constructor from './img/constructor-website.png'
import ArıBilgi from './img/ArıBilgi-website.png'

function HtmlCss() {
    return (
        <>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={constructor} alt="" />
                    <div className='visit-project-info'>
                        <p>The holding website, I created using html,css and bootstrap</p>
                        <a className='btn'>Visit Github</a>
                    </div>
                </div>
            </div>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={ArıBilgi} alt="" />
                    <div className='visit-project-info'>
                        <p>The Course website, I created using html,css and bootstrap</p>
                        <a className='btn'>Visit Github </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HtmlCss