import { Jumbotron, Container, Button, Row, Col, 
    Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import './Profile.css';
import Feedback from './Feedback';
import EditProfile from './EditProfile';

const Profile = () => {
    const [modalEditProfile, setModalEditProfile] = useState(false);
    const [modalFeedback, setModalFeedback] = useState(false);
    const toggleEditProfile = () => setModalEditProfile(!modalEditProfile);
    const toggleFeedback = () => setModalFeedback(!modalFeedback);
    return (
        <>
        <div>
            <Container className="Profile">
                <Row>
                    <Col md={4}>
                        <h4 className="bio">Profil</h4>
                        <img src="https://i.pinimg.com/originals/41/60/f3/4160f3c7891a7eed91ba3a5da8935fa5.jpg" alt="logo" />
                        <h3 className="fullname">Your Fullname Here</h3>
                        <h4 className="bio">Bio</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis pharetra tortor neque eu ut. 
                        Augue facilisis pretium placerat ultricies volutpat ipsum sed. Natoque ullamcorper turpis elit integer at nisl. 
                        Id tellus amet varius malesuada. Vel dignissim interdum ut facilisi luctus porttitor ut. Nunc adipiscing tristique.
                        </p>
                        <br />
                        <br />
                        <br />
                        <Button onClick={toggleEditProfile} className="button-profil">Edit Profil</Button>
                        <Modal isOpen={modalEditProfile} toggle={toggleEditProfile} className="custom-modal-size">
                            <ModalBody>
                                <EditProfile />
                            </ModalBody>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="book-history">
                            <h4 className="h4-book-history">Book History</h4>
                            <div className="history">
                                <br />
                                <Row className="fielddate">
                                    <Col className="fielddate">
                                        <p className="fieldname">Field Name</p>
                                    </Col>
                                    <Col className="fielddate">
                                        <p className="fieldname">20xx-xx-xx</p>
                                    </Col>
                                </Row>
                                <Button className="direction">Direction</Button>
                                <br />
                                <br />
                                <text className="comingupmatch">Coming up Match</text>
                                <br />
                                <br />
                            </div>
                            <br />
                            <div className="history">
                                <br />
                                <Row className="fielddate">
                                    <Col className="fielddate">
                                        <p className="fieldname">Field Name</p>
                                    </Col>
                                    <Col className="fielddate">
                                        <p className="fieldname">20xx-xx-xx</p>
                                    </Col>
                                </Row>
                                <Button className="direction">Book Again</Button>
                                <br />
                                <br />
                                <text onClick={toggleFeedback} className="givefeedback">Give Feedback</text>
                                <Modal isOpen={modalFeedback} toggle={toggleFeedback} className="custom-modal-size">
                                    <ModalBody>
                                        <Feedback />
                                    </ModalBody>
                                </Modal>
                                <br />
                                <br />
                            </div>
                            <br />
                            <div className="history">
                                <br />
                                <Row className="fielddate">
                                    <Col className="fielddate">
                                        <p className="fieldname">Field Name</p>
                                    </Col>
                                    <Col className="fielddate">
                                        <p className="fieldname">20xx-xx-xx</p>
                                    </Col>
                                </Row>
                                <Button className="direction">Book Again</Button>
                                <br />
                                <br />
                                <text onClick={toggleFeedback} className="givefeedback">Give Feedback</text>
                                <Modal isOpen={modalFeedback} toggle={toggleFeedback} className="custom-modal-size">
                                    <ModalBody>
                                        <Feedback />
                                    </ModalBody>
                                </Modal>
                                <br />
                                <br />
                            </div>
                            <br />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
        </>
    )
}

export default Profile;