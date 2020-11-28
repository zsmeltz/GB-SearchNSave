import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import BookBlock from "./BookBlock.js";
import API from "../../utils/API";
import SearchForm from "./SearchForm";

class SearchPage extends Component {

  state = {
    result: {},
    search: ""
  };

  searchBooks = query => {

    API.search(query)
      .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };
  // this.setState({ result: res.data.items })
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render(){
    return(
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3" style={{textAlign: 'center'}}>(React) Google Books Search</h1>
            <p className="lead" style={{textAlign: 'center'}}>Search for and save books of interest!</p>
          </Container>
        </Jumbotron>
        <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
    <div style={{borderBlock: '1px solid black', marginLeft: 10, marginRight: 10, padding: 10}}>
        <h5>Results:</h5>
        <BookBlock/>
    </div>
      </div>

    );
  };
};

export default SearchPage;
// onClick={props.handleFormSubmit}