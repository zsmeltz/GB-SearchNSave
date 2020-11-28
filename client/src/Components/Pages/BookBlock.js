import React from "react";

function BookBlock(){
    return(
        <ul>
        <li>

        <div class="card">
            <div class="card-body">
                <button style={{float: 'right', margin: 5}}>Save</button>
                <button style={{float: 'right', margin: 5}}>View</button>
                <h4>Book title</h4>
                <p>Authors</p>
                <img alt="yoyoyo"/>
                <p style={{textAlign: 'right'}}>Description</p>
            </div>
        </div>
        
        </li>
        </ul>
    )
}

export default BookBlock;