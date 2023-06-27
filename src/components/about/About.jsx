import React from 'react'
import './About.css'
import Progress from './Progress'

const skills = [
    {
        skill: "HTML",
        percent: "100%",
    },
    {
        skill: "CSS",
        percent: "80%",
    },
    {
        skill: "JavaScript",
        percent: "90%",
    },
    {
        skill: "React",
        percent: "70%",
    },
    {
        skill: "TypeScript",
        percent: "60%",
    },
]



function About() {
    return (
        <div className='about'>
            <div className='about-title'>
                <h3>I’m a Front End developer based in Istanbul, who loves to learn, open to development and productive.</h3>
            </div>
            <div className='about-contents'>
                <div className='about-me'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora placeat quia, fugiat aperiam, officia vitae, labore nesciunt corporis facilis dolor dolore nobis distinctio laboriosam quos veniam dolorum vel est? Provident hic nesciunt dolor tempore ea quam qui minima corrupti? Nisi veniam tempore odit animi enim quaerat harum debitis nam voluptate consectetur, iusto suscipit. Fugit deserunt commodi explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita autem alias delectus perspiciatis iure blanditiis aspernatur aliquam. Maiores cum quas dolore magnam rerum beatae explicabo. Molestias non deserunt provident.</p>
                </div>
                <div className="progress-skills">
                    {
                        skills.map((item, index) => <Progress item={item} key={index} />)
                    }
                </div>
            </div>
            <div>
                <button className='btn'>Download CV</button>
            </div>
        </div>
    )
}

export default About