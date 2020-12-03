import React from "react";
import SBDB from "../../../utils/SBDB";
import {Button} from "reactstrap";

function BookBlock(props){
    
    return(
        <ul>
        {props.books.map(book => (
        <li style={{margin: 15}}>
        <div className="card">
            <div className="card-body">
                <Button color="primary" style={{float: 'right', margin: 5}} onClick={
                    function bookSave (event) {
                        event.preventDefault(); 
                  
                        
                        var author = book.volumeInfo.authors.toString();

                        SBDB.saveBook({
                            title: book.volumeInfo.title,
                            authors: author,
                            thumbnail: book.volumeInfo.imageLinks.thumbnail,
                            description: book.volumeInfo.description,
                            view: book.volumeInfo.previewLink,
                            date: new Date(Date.now())
                        }).catch(err => console.log(err));

                       alert(book.volumeInfo.title + " has been saved to the 'saved' page!")

                    }}>Save</Button>
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer"><Button color="warning" style={{float: 'right', margin: 5}}>View</Button></a>
                <h4>{book.volumeInfo.title}</h4>
                <p>{book.volumeInfo.authors}</p>
                <img src={book.volumeInfo.imageLinks.thumbnail} align='left' alt="yoyoyo" style={{margin: 10}}/>
                <p align='right'>{book.volumeInfo.description}</p>
            </div>
        </div>
        </li>
        ))}
        </ul>
    );
    
};

export default BookBlock;