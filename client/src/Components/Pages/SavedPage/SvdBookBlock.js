import React,{ useEffect, useState }from "react";
import SBDB from "../../../utils/SBDB";

function SvdBookBlock () {

const [savbooks, setBooks] = useState([])

useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    SBDB.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

    
    return(
            <ul>
        {savbooks.map(savbook => (
        <li style={{margin: 15}}>
        <div className="card">
            <div className="card-body">
                <button style={{float: 'right', margin: 5}} onClick={
                    function deleteSB(){
                        var id = savbook._id;
                        SBDB.deleteBook(id)
                        .then(res => loadBooks())
                        .then(function() {alert(savbook.title + " has been deleted!")})
                        .catch(err => console.log(err));
                    }
                }>DELETE</button>
                <a href={savbook.view} target="_blank" rel="noreferrer"><button style={{float: 'right', margin: 5}}>View</button></a>
                <h4>{savbook.title}</h4>
                <p>{savbook.authors}</p>
                <img src={savbook.thumbnail} align='left' alt="yoyoyo" style={{margin: 10}}/>
                <p align='right'>{savbook.description}</p>
            </div>
        </div>
        </li>
        ))}
        </ul>
    );
 
};

export default SvdBookBlock;