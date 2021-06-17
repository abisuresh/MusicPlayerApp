import React, {Component} from "react";
import {render} from "react-dom"
import App from "./App";

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {color: "blue"}
    }

    render(){
        return <div>{this.state.color}</div>
    }
}
export default Box;