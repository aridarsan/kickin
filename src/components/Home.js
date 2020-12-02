import React from "react";
import { 
    Row, Col,Jumbotron, Container, 
    Button,Card, CardImg, CardText, 
    CardBody,CardTitle, CardSubtitle,
} from "reactstrap";
import './home.css';
import header from '../img/header-bg.svg';
import fieldA from "../img/field-a.svg"
import fieldB from "../img/field-b.svg"
import fieldC from "../img/field-c.svg"
import fieldD from "../img/field-d.svg"
import Footer from "../layout/footer"

const Home = () => {
    return (
        <>
            <div className="text-center">
                <Jumbotron  style={{ backgroundImage: `url(${header})`, backgroundSize: 'cover' }}>
                    <Container className= "text-center">
                        <h1 className="text-white">Let's Play</h1>
                        <Button className="text-body" size="lg" color="info" variant="primary" >Book Now</Button>
                    </Container>
                </Jumbotron>
            </div>

            <div>
            <Container >
                <div className="text-white">
                    <h4 className="text-white"> Featured Field</h4> <h5 className="browseField ">Browse Field &#10140;</h5>
                </div>
            <Row className="text-white">
            <Col  md={3} className="class-col" >
                <Card color="body">
                    <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button type="button">View</Button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                </Card>
                
            </Col>

            <Col  md={3} className="class-col">
                <Card>
                    <CardImg top width="100%"  src={fieldB} alt={fieldB} />
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button type="button">View</Button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                </Card>
                
            </Col>

            <Col  md={3} className="class-col">
                <Card>
                    <CardImg top width="100%"  src={fieldC} alt={fieldC} />
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button type="button">View</Button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                </Card>
                
            </Col>


            <Col  md={3}>
                <Card>
                    <CardImg top width="100%"  src={fieldD} alt={fieldD} />
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button type="button">View</Button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                </Card>
                
            </Col>
            
            </Row>
            </Container>
            <Footer />
            </div>
        </>
    )
}

export default Home;