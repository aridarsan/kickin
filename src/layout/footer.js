import React from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import kickinImage from "../icon/kickin-footer.svg";
import googlePlay from "../icon/google-play.svg";
import appStore from "../icon/apple-store.svg";
import facebook from "../icon/facebook.svg";
import instagram from "../icon/instagram.svg";
import pinterest from "../icon/pinterest.svg";

const Footer = () => {
    return(
        <div className="footer">
            <Container className="text-white">
                <Row className="content-row">
                    <Col lg="6">
                        <Link to="/" className="brand d-flex align-items-center">
                            <img src={kickinImage} alt ={kickinImage} />
                        </Link>
                        <p className="desc-brand">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Recusandae excepturi cupiditate sunt unde. Eveniet inventore optio
                            numquam, eaque voluptas, exercitationem fuga neque beatae
                            necessitatibus sit ipsa magnam perspiciatis illo nemo?
                        </p>
                    </Col>
                    <Col lg="3" md="6" xs="6">
                        <p><strong>Get it On</strong></p>
                        <Link to="/" className="features-os d-inline-flex align-items-center">
                        <img className="icon-store" src={googlePlay} alt ={googlePlay} />
                        </Link>
                        <Link to="/" className="features-os d-inline-flex align-items-center">
                        <img className="icon-store appStore" src={appStore} alt ={appStore} />
                        </Link>
                    </Col>
                    <Col lg="3" md="6" xs="6" className="sosmed">
                        <p><strong>Social media</strong></p>
                        <Link to="/">
                            <img className="icon-sosmed" src={facebook} alt ={facebook} />
                        </Link>
                        <Link to="/">
                            <img className="icon-sosmed" src={instagram} alt ={instagram} />
                        </Link>
                        <Link to="/">
                            <img className="icon-sosmed" src={pinterest} alt ={pinterest} />
                        </Link>
                        <Row>
                            <Link to="/" className="features about">
                            <strong>About</strong>
                        </Link>
                        <Link to="/" className="features">
                            <strong>FAQ</strong>
                        </Link>
                        <Link to="/" className="features help">
                            <strong>Help</strong>
                        </Link>
                        </Row>
                    </Col>
                    </Row>
                    <hr/>
                    <Row className="sub-footer d-flex justify-content-center ">
                        <p>Copyright © 2020 KICKIN. All Rights Reserved</p>
                    </Row>
            </Container>
        </div>
    )
}

export default Footer;