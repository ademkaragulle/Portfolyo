import React from 'react'
import './About.css'
import Progress from './Progress'
import Resume from '../../assets/Adem_Karagülle_Resume.pdf'

const skills = [
    {
        skill: "HTML",
        percent: "100%",
    },
    {
        skill: "CSS",
        percent: "90%",
    },
    {
        skill: "JavaScript",
        percent: "90%",
    },
    {
        skill: "React",
        percent: "80%",
    },
    {
        skill: "TypeScript",
        percent: "70%",
    },
]

const date = new Date()
const year = date.getFullYear()
const mounth = date.getMonth() + 1

function About() {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h3>I’m a Front End developer based in Istanbul, who loves to learn, open to development and productive.</h3>
            </div>
            <div className='about-contents'>
                <div className='about-me'>
                    <p>I am Adem Karagülle, graduate of Yıldız Technical University, Department of Civil Engineering. Thanks to the courses I took and the projects I studied during my university education, I became interested in the software field and I developed myself in this field. I know technologies such as HTML, CSS, JavaScript, TypeScript, React and Photoshop. I am talented in creating and designing websites using these tools.</p>
                    <p>I have been in the sector for about {(year - 2022) * 12 + mounth - 3} months and I have attended a lot courses during this time. I developed new projects with what I learned from the courses.In the future, I want to work in a company that develops software products for the construction industry. In this way, I want to use my civil engineering skills while doing the job I love.</p>
                </div>
                <div className="progress-skills">
                    {
                        skills.map((item, index) => <Progress item={item} key={index} />)
                    }
                </div>
            </div>
            <div>
                <a download href={Resume} className='btn'>Download CV</a>
            </div>
        </div>
    )
}

export default About