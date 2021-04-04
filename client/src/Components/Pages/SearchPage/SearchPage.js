import React, { Component } from "react";
import BookBlock from "./BookBlock.js";
import API from "../../../utils/API";
import SearchForm from "./SearchForm";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      result: {},
      search: "",
    };
  }

  searchBooks = () => {
    API.search(this.state.search)
      .then((res) => this.setState({ results: res.data.items }))
      .catch((err) => {
        if (err) console.log(err);
        window.location.reload();
        alert("Could not find your search, please try a different book");
      });
  };

  // handleInputChange = (text) => {
  //   this.setState({
  //     search: text,
  //   });
  // };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          // handleInputChange={this.handleInputChange}
          handleFormSubmit={this.searchBooks()}
        />
        <div
          style={{
            borderBlock: "1px solid black",
            width: "100%",
            padding: 10,
            backgroundColor: "#707070",
          }}
        >
          <h5 style={{ color: "whitesmoke" }}>Results:</h5>
          <BookBlock books={this.state.results} />
        </div>
      </div>
    );
  }
}

export default SearchPage;
