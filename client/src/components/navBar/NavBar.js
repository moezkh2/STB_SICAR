import React from 'react'
import './navBar.css'
import Logo from '../../images/Logo_STB_SICAR.png'
import YouTube from '../../images/youtube.png'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'
import LinkedIn from '../../images/linkedin.png'
import Facebook from '../../images/facebook.png'
function NavBar() {
    return (
        <div className="navContainer">
            <div className="contactBar">
                <div className="socialMedia">
                    <img src={Facebook} alt=""></img>
                    <img src={Instagram} alt=""></img>
                    <img src={LinkedIn} alt=""></img>
                    <img src={Twitter} alt=""></img>
                    <img src={YouTube} alt=""></img>
                </div>
            </div>
            <div className="navBar">
                <img src={Logo} alt="Logo"></img >
                <ul>
                    <li>
                        <a href="#">Nous Connaitre</a>
                    </li>
                    <li>
                        <a href="#">Nos Fonds</a>
                    </li>
                    <li>
                        <a href="#">Nos Realisations</a>
                    </li>
                    <li>
                        <a href="#"> Responsabilite Sociale</a>
                    </li>
                    <li>
                        <a href="#"> Actualités</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default NavBar