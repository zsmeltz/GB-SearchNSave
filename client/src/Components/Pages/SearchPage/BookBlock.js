import React from "react";
import SBDB from "../../../utils/SBDB";

function BookBlock(props){
    // if (err) throw err;
    return(
        <ul>
        {props.books.map(book => (
        <li style={{margin: 15}}>
        <div className="card">
            <div className="card-body">
                <button style={{float: 'right', margin: 5}} onClick={
                    function bookSave (event) {
                        event.preventDefault(); 
                        console.log("In book save. Maybe tried to make a post")
                        
                        var author = book.volumeInfo.authors.toString();

                        SBDB.saveBook({
                            title: book.volumeInfo.title,
                            authors: author,
                            thumbnail: book.volumeInfo.imageLinks.thumbnail,
                            description: book.volumeInfo.description,
                            view: book.volumeInfo.previewLink,
                            date: new Date(Date.now())
                        }).catch(err => console.log(err));

                        console.log("Apperently posted the selected bookData")

                    }}>Save</button>
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer"><button style={{float: 'right', margin: 5}}>View</button></a>
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