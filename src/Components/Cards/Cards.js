import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

const Cards = ({ item }) => {

    const { rocket, details, links, mission_name, launch_year, launch_success } = item;
    console.log(details?.slice(0, 20))
    return (
        <Col xs={12} sm={6} md={3}>
            <Card>
                <Card.Img className='w-75 m-auto pt-3' variant="top" src={links.mission_patch} />
                <Card.Body>
                    <Card.Title>
                        {rocket.rocket_name}
                    </Card.Title>
                    <Card.Text>
                        {details?.slice(0, 60)}
                    </Card.Text>

                    <Card.Text>
                        Mission: <strong>{mission_name}</strong>
                    </Card.Text>

                    <Card.Text className='d-flex justify-content-between'>
                        <span>Year: {launch_year}</span>
                        {
                            launch_success ? <h5 className='text-success'>Success</h5> : <h5 className='text-danger'>Failure</h5>
                        }
                    </Card.Text>

                    <Card.Link target='_blank' rel='noreferrer' href={links.article_link}>
                        <Button className='w-100' variant="primary">Read More ...</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;