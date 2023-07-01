import React from 'react'
import JavaScript1 from './img/JavaScript-img1.png'
import JavaScript2 from './img/JavaScript-img2.png'
import JavaScript3 from './img/JavaScript-img3.png'
import ArıBilgi from './img/ArıBilgi-website.png'

function JavaScript() {
    return (
        <div className='plural-projects'>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={JavaScript1} alt="" />
                    <div className='visit-project-info'>
                        <h3 style={{ padding: '0', margin: '0' }}>JS Exercises</h3>
                        <p>You can review my more than 30 exercises that I created with javascript.</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/JS-Exercise" target='_blank'>Visit Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={JavaScript2} alt="" />
                    <div className='visit-project-info'>
                        <h3 style={{ padding: '0', margin: '0' }}>Lead Collection</h3>
                        <p>A pop-up window design that receives a mail and phone number from the user, checks its availability and gives a coupon code.</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/Lead-collection" target='_blank'>Visit Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={JavaScript3} alt="" />
                    <div className='visit-project-info'>
                        <h3 style={{ padding: '0', margin: '0' }}>Games</h3>
                        <p>Games I created with javascript</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/Games" target='_blank'>Visit Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JavaScript