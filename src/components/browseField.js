import React, { useState, Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, 
        Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, 
        Button,
        Row, Col, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './browseField.css';
import fieldA from "./img/picA.png"

const BrowseField = () => {
  const [dropdownOpenFilter, setOpenFilter] = useState(false);
  const [dropdownOpenSort, setOpenSort] = useState(false);

  const toggleFilter = () => setOpenFilter(!dropdownOpenFilter);
  const toggleSort = () => setOpenSort(!dropdownOpenSort);

  return (
    <>
    <div>
        <Container className="search">
            <Row>
                <Col></Col>
                <Col className="col-2">
                <ButtonDropdown className="filter" isOpen={dropdownOpenFilter} toggle={toggleFilter}>
            <DropdownToggle caret>
                Filter
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Filter</DropdownItem>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
                </Col>
                <Col className="col-2">
                <ButtonDropdown className="sort" isOpen={dropdownOpenSort} toggle={toggleSort}>
            <DropdownToggle caret>
                Sort
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Sort</DropdownItem>
                <DropdownItem>Name</DropdownItem>
                <DropdownItem>Rating</DropdownItem>
                <DropdownItem>Most Review</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
                </Col>
                <Col className="col-3">
                <Form>
                <FormGroup>
                    <Input type="text" id="search" placeholder="Search..."></Input>
                </FormGroup>
            </Form>
                </Col>
                <Col className="col-1">
                    <Button className="search-button"></Button>
                </Col>
            </Row>
        </Container>
    </div>
    <br />
    <div className="fields">
        <Container>
            <Row className="text-white">
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
                <Col  md={3} className="class-col" >
                    <Card color="body">
                        <CardImg className="card-img" top width="100%"  src={fieldA} alt={fieldA} />
                        <CardBody className="card-body">
                            <CardTitle className="fieldName" tag="h5">Field Name</CardTitle>
                            <CardText className="fieldName">Address</CardText>
                            <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button className="text-body" type="button" color="info">Book</Button>
                        </CardBody>
                    </Card> 
                </Col>
            </Row>
        </Container>
    </div>
    </>
  );
}

export default BrowseField;