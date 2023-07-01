import React from 'react'
import constructor from './img/constructor-website.png'
import ArıBilgi from './img/ArıBilgi-website.png'

function HtmlCss() {
    return (
        <>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={constructor} alt="" />
                    <div className='visit-project-info'>
                        <h3 className='single-project-h3'>Construction Company</h3>
                        <p>The holding website, I created using html,css and bootstrap</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/construction-firm" target='_blank'>Visit Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={ArıBilgi} alt="" />
                    <div className='visit-project-info'>
                        <h3 className='single-project-h3'>ArıBilgi</h3>
                        <p>The Course website, I created using html,css and bootstrap</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/website-exercise" target='_blank'>Visit Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HtmlCss