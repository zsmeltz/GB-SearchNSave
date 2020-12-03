import React, { Component } from "react";
import SvdBookBlock from "./SvdBookBlock";


class SavedPage extends Component {
   
    render(){
        return(
        <div style={{borderBlock: '1px solid black',width: '100%', padding: 10, backgroundColor: '#707070'}}>
            <h5 style={{color: 'whitesmoke'}}>Saved Books:</h5>
                <SvdBookBlock/>
            </div>
        );
    };
};

export default SavedPage;