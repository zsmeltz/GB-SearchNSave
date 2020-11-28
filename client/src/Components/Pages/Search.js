import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import BookBlock from "./BookBlock.js";

function Search(){
    return(
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3" style={{textAlign: 'center'}}>(React) Google Books Search</h1>
            <p className="lead" style={{textAlign: 'center'}}>Search for and save books of interest!</p>
          </Container>
        </Jumbotron>
        <form>
      <div className="form-group" style={{border: '1px solid black', marginLeft: 10, marginRight: 10, padding: 10}}>
        <h3 style={{textAlign: 'left'}}>Book Search</h3>
        <br/>
        
        <label htmlFor="search">Book:</label>
        <input
        //   onChange={props.handleInputChange}
        //   value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Google Books"
          id="search"
        />
        <button className="btn btn-primary mt-3">
          SEARCH
        </button>
      </div>
    </form>

    <div style={{borderBlock: '1px solid black', marginLeft: 10, marginRight: 10, padding: 10}}>
        <h5>Results:</h5>
        <BookBlock/>
    </div>
      </div>

    );
};

export default Search;
// onClick={props.handleFormSubmit}