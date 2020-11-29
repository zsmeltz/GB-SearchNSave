import React from 'react';
import { Jumbotron, Container } from 'reactstrap';



function Heading(){
    return(
        <Jumbotron fluid>
        <Container fluid>
        <h1 className="display-3" style={{textAlign: 'center'}}>(React) Google Books Search</h1>
        <p className="lead" style={{textAlign: 'center'}}>Search for and save books of interest!</p>
        </Container>
        </Jumbotron>
    );
};

export default Heading;