import React, { Component } from "react";
import SvdBookBlock from "./SvdBookBlock";


class SavedPage extends Component {
   
    render(){
        return(
            <div style={{borderBlock: '1px solid black', marginLeft: 10, marginRight: 10, padding: 10}}>
                <h5>Saved Books:</h5>
                <SvdBookBlock/>
            </div>
        );
    };
};

export default SavedPage;