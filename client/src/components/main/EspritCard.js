import React from 'react'
const EspritCard = ({ src = "", title = "", text = "" }) => {
    console.log(src, title, text)
    return (
        <div className='EspritCard'>
            <img src={src} alt="esprit-img1" className="EspritCardImg"></img>
            <h3 className='EspritCardTitle'>{title}</h3>
            <p className='EspritCardText'>{text}</p>
        </div >
    )
}

export default EspritCard