import React from 'react'

function Progress({ item }) {


    return (
        <>
            <div className="single-progress">
                <div className='progress-name'>
                    <span>{item.skill}</span>
                    <span>{item.percent}</span>
                </div>
                <div className="progress">
                    <div className="progress-bar" style={{ width: item.percent }}></div>
                </div>
            </div>
        </>
    )
}

export default Progress