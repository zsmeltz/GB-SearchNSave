import React from "react";
import { Button } from "reactstrap";

function SearchForm(props) {
  return (
    <form style={{ backgroundColor: "black", marginBottom: 30 }}>
      <div
        className="form-group"
        style={{
          border: "1px solid black",
          marginLeft: 10,
          marginRight: 10,
          padding: 10,
        }}
      >
        <h3 style={{ textAlign: "left", color: "whitesmoke" }}>Book Search</h3>
        <br />

        <label htmlFor="search" style={{ color: "whitesmoke" }}>
          Book:
        </label>
        <input
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Google Books"
          id="search"
        />
        <Button
          color="success"
          style={{ marginTop: 10 }}
          onClick={props.handleFormSubmit}
        >
          SEARCH
        </Button>
      </div>
    </form>
  );
}

export default SearchForm;
