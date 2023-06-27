import React from 'react';
import './Projects.css';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoReact, BiLogoCss3 } from 'react-icons/bi';
import { AiOutlineHtml5 } from 'react-icons/ai';

function Projects() {
    return (
        <div className='projects'>
            <h2>My Works</h2>
            <div className='main-projects'>
                <div className='col-md-4'>
                    <div className='single-project'>
                        <AiOutlineHtml5 size={70} />
                        <BiLogoCss3 size={70} />
                        <h3>HTML & CSS</h3>
                        <p className='single-project-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, rem!</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='single-project'>
                        <IoLogoJavascript size={70} />
                        <h3>JavaScript</h3>
                        <p className='single-project-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, rem!</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='single-project'>
                        <BiLogoReact size={70} />
                        <h3>React.js</h3>
                        <p className='single-project-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, rem!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects