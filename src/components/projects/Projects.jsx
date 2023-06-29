import React, { useState } from 'react';
import './Projects.css';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoReact, BiLogoCss3 } from 'react-icons/bi';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi'
import ReactJs from './languages/ReactJs';
import HtmlCss from './languages/HtmlCss';
import JavaScript from './languages/JavaScript';

function Projects() {
    const [goLanguages, setgoLanguages] = useState(false)
    const [language, setLanguage] = useState(<HtmlCss />)
    // const handleBackLanguages = () => {

    // }

    const handleLanguage = (incomLanguage) => {
        setgoLanguages(true)
        if (incomLanguage === 'REACT') {
            setLanguage(<ReactJs />)
        } else if (incomLanguage === 'HTMLCSS') {
            setLanguage(<HtmlCss />)
        } else if (incomLanguage === 'JAVASCRIPT') {
            setLanguage(<JavaScript />)
        }
    }

    return (
        <div id='projects' className='projects'>
            <h2>My Works</h2>
            <div className=' main-projects'>
                <div className={goLanguages ? "languages toggle-open" : "languages toggle-close"}>
                    <div className='col-md-4'>
                        <button onClick={() => handleLanguage('HTMLCSS')} className='single-project'>
                            <AiOutlineHtml5 size={70} />
                            <BiLogoCss3 size={70} />
                            <h3>HTML & CSS</h3>
                            <p className='single-project-text'>With the beginning of my software  adventure, my first projects that I created using html, css and bootstrap.</p>
                        </button>
                    </div>
                    <div className='col-md-4'>
                        <button onClick={() => handleLanguage('JAVASCRIPT')} className='single-project'>
                            <IoLogoJavascript size={70} />
                            <h3>JavaScript</h3>
                            <p className='single-project-text'>You can browse my projects that I created with javascript, which helps in dynamizing my projects.</p>
                        </button>
                    </div>
                    <div className='col-md-4'>
                        <button onClick={() => handleLanguage('REACT')} className='single-project'>
                            <BiLogoReact size={70} />
                            <h3>React.js</h3>
                            <p className='single-project-text'>When I met React, I realized that my learning adventure will never end and this excited me even more.</p>
                        </button>
                    </div>
                </div>


                <div className={goLanguages ? "languages toggle-open" : "languages toggle-close"}>
                    <button onClick={() => setgoLanguages(false)} className='project-left-side'>
                        <FiArrowLeft size={50} />
                    </button>
                    {language}
                </div>
            </div>
        </div >
    )
}

export default Projects