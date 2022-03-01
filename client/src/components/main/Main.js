import React from 'react'
import './main.css'
import { Carousel } from "react-bootstrap"
import data from "../../data/data.json"
import EspritCard from "./EspritCard"
import Section2 from './Section2'
console.log(data)
function Main() {
    return (
        <div className="container">
            <Carousel>
                {data.carousel.map((el, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={el.imgUrl}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p className='carouselText' >{el.title}
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}


            </Carousel>
            <div className="espritSection">
                {data.espritCardData.map((el, i) => {
                    return (<EspritCard key={i} src={el.src} title={el.title} text={el.text} />)
                })}
            </div>

            <h3 className="mainBlueTitle"> {data.section1.title} </h3>

            <div className="notreValeur ">
                <img className='notreValeurImg' src={data.section1.backgroundImg} alt="notre valeur"></img>
                <p className='notreValeurText'>{data.section1.text}</p>
            </div>

            <h3 className="mainBlueTitle"> {data.section2.title} </h3>

            <Carousel>

                {data.section2.contributionOddItems.map((el, i) => {
                    return (
                        <Carousel.Item key={i}>
                            <Section2 item={el}></Section2>
                        </Carousel.Item>

                    )
                })}

            </Carousel>


        </div>
    )
}

export default Main;