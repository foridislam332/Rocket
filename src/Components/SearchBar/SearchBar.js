import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button, Stack } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search By Rocket Name"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="primary">Search</Button>
                        </Form>

                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <h4 className="my-2 me-3">Filter by </h4>
                            <Stack direction="horizontal" gap={2}>
                                <Form.Select aria-label="Default select example">
                                    <option>Launch Date</option>
                                    <option value="1">Last Week</option>
                                    <option value="2">Last Month</option>
                                    <option value="3">Last Year</option>
                                </Form.Select>

                                <Form.Select className='ml-3' aria-label="Default select example">
                                    <option>Launch Status</option>
                                    <option value="1">Failure</option>
                                    <option value="2">Success</option>
                                </Form.Select>
                            </Stack>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default SearchBar;