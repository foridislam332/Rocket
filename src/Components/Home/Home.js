import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    const [rocketData, setRocketData] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setRocketData(data))
    }, [])

    return (
        <>
            <h1 className='text-center py-4 text-info'>Launch Rocket Data</h1>
            <SearchBar></SearchBar>

            <Container>
                <Row className='gy-4 mt-3'>
                    {
                        rocketData.slice(0, 10).map(item => <Cards
                            key={item.details}
                            item={item}
                        ></Cards>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;