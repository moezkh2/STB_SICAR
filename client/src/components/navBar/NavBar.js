import { React, useState } from 'react'
import './navBar.css'
import { Button, Offcanvas } from 'react-bootstrap'
function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="navContainer">
            <div className="contactBar">
                <div className="socialMedia">
                    <img src="https://res.cloudinary.com/drjuymvy4/image/upload/v1646075454/stb/facebook_xv19jy.png" alt=""></img>
                    <img src="https://res.cloudinary.com/drjuymvy4/image/upload/v1646075461/stb/instagram_fum9b9.png" alt=""></img>
                    <img src="https://res.cloudinary.com/drjuymvy4/image/upload/v1646075468/stb/linkedin_niewrd.png" alt=""></img>
                    <img src="https://res.cloudinary.com/drjuymvy4/image/upload/v1646075499/stb/twitter_b0ttzv.png" alt=""></img>
                    <img src="https://res.cloudinary.com/drjuymvy4/image/upload/v1646075510/stb/youtube_bpzw0y.png" alt=""></img>
                </div>
                <div class="contact">
                    <a href="#">Contact</a>
                    <div class="vl"></div>

                    <select name="FR" >
                        <option value="FR">FR</option>
                        <option value="AR">AR</option>
                        <option value="EN">EN</option>

                    </select>

                </div>


            </div>
            <div className="navBar">
                <img src="https://res.cloudinary.com/drjuymvy4/image/upload/v1646075475/stb/Logo_STB_SICAR_spjblr.png" alt="Logo"></img >
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
                <Button ClassName='mobileMenu' variant="primary" onClick={handleShow}>
                    Menu
                </Button>
            </div>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>

    )
}

export default NavBar