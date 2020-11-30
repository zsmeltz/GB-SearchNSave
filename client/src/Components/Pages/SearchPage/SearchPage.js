import React, {Component} from 'react';
import BookBlock from "./BookBlock.js";
import API from "../../../utils/API";
import SearchForm from "./SearchForm";


class SearchPage extends Component {

  state = {
    results: [],
    result: {},
    search: ""
  };

  searchBooks = query => {

    API.search(query)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => {
        if (err) console.log(err);
        window.location.reload();
        alert("Could not find your search, please try a different book");
      });
  };
  
  // console.log(res.data.items)
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
        <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
    <div style={{borderBlock: '1px solid black', marginLeft: 10, marginRight: 10, padding: 10}}>
        <h5>Results:</h5>
        <BookBlock  books={this.state.results}/>
    </div>
      </div>

    );
  };
};

export default SearchPage;
// onClick={props.handleFormSubmit}