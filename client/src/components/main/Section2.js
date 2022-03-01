import React from 'react'
import './main.css'
function Section2({ item = {} }) {
    return (<>
        {

            <div className="sectionTooContainer">

                <div>
                    <img src={item.imgUrl}></img>
                    {item.introduction.map((el, i) => {
                        return (
                            <div key={i} className="secttionTooIntro">
                                <span>{el.title}</span>
                                <p >
                                    {el.text}
                                </p>
                            </div>

                        )
                    })}

                </div>

                <div>
                    <p className='secttionTooDisc'>{item.description}
                    </p>
                </div>

            </div>

        }
    </>)


}

export default Section2