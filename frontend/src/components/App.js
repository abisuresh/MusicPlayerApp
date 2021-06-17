import React, {Component} from "react";
import {render} from "react-dom"

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
            <div>
                <h1>Test</h1>
                <p>{Song.name}</p>
            </div>
        )
    }
}

export default App;
const container = document.getElementById("app");
render(<App />, container);
