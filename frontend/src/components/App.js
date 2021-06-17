import React, {Component} from "react";
import {render} from "react-dom"
import Box from "./Box.js"

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount(){
        fetch("api/song")
            .then(response => {
                if(response.status > 400){
                    return this.setState(() => {
                        return {placeholder: "Error!"};
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render(){
        return (
         <ul>
             {this.state.data.map(song => {
                 return (
                     <div style={{backgroundColor: 'green'}}>
                     <li key={song.id}>
                         {song.name} - {song.artist}
                     </li>
                         
                    <Box/>
                     </div>
                 )
             })}
         </ul>
        )
    }
}

export default App;
const container = document.getElementById("app");
render(<App />, container);
