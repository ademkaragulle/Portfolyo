import React from 'react';
import './Projects.css';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoReact, BiLogoCss3 } from 'react-icons/bi';
import { AiOutlineHtml5 } from 'react-icons/ai';

function Projects() {
    return (
        <div id='projects' className='projects'>
            <h2>My Works</h2>
            <div className='main-projects'>
                <div className='col-md-4'>
                    <div className='single-project'>
                        <AiOutlineHtml5 size={70} />
                        <BiLogoCss3 size={70} />
                        <h3>HTML & CSS</h3>
                        <p className='single-project-text'>With the beginning of my software  adventure, my first projects that I created using html, css and bootstrap.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='single-project'>
                        <IoLogoJavascript size={70} />
                        <h3>JavaScript</h3>
                        <p className='single-project-text'>You can browse my projects that I created with javascript, which helps in dynamizing my projects.</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='single-project'>
                        <BiLogoReact size={70} />
                        <h3>React.js</h3>
                        <p className='single-project-text'>When I met React, I realized that my learning adventure will never end and this excited me even more.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects