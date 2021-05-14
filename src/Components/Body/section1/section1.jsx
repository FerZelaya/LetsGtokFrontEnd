import React from 'react'
import './section1.css'

const section1 = () => {
    return (
        <div id="section1" className="section1-main">
            <div className="share-container">
                <div className="introduction-container">
                    <h3 className="shareText"><span className="purpleText">Share feelings</span> without being judged</h3>
                    <button className="shareButton">Share Feelings</button>
                </div>
            </div>
            <div className="slogan-container">
                <h2>Join</h2>
                <div className="bullet"></div>
                <h2>Share</h2>
                <div className="bullet"></div>
                <h2>Feel Relief</h2>
            </div>
        </div>
    )
}

export default section1