import React from 'react'
import React1 from './img/WatchMovie.png'
import React2 from './img/BurgerProject.png'
import React3 from './img/MealOrder.png'
import '../Projects.css'
function ReactJs() {
    return (
        <>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={React1} alt="" />
                    <div className='visit-project-info'>
                        <h3 className='single-project-h3'>WatchMovie</h3>
                        <p>This Website can give information and video about movies or series, search movie and view coming soon movies.</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/WatchMovie" target='_blank'>Visit Github</a>
                            <a className='btn' href="https://watchmoviee.netlify.app" target='_blank'>Demo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={React2} alt="" />
                    <div className='visit-project-info'>
                        <h3 className='single-project-h3'>Burger Project</h3>
                        <p>This simple Project create with React.js. I took help Material UI and React Router DOM</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/Burger-Project" target='_blank'>Visit Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-column'>
                <div className='visit-project'>
                    <img className='img-fluid' src={React3} alt="" />
                    <div className='visit-project-info'>
                        <h3 className='single-project-h3'>Meal Order</h3>
                        <p>Food ordering application I created with react.js</p>
                        <div className='container-button-group'>
                            <a className='btn' href="https://github.com/ademkaragulle/Meal-Order" target='_blank'>Visit Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactJs