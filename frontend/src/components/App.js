import React, {Component} from "react";
import {render} from "react-dom"
import CustomBox from "./Box.js"
import Button from '@material-ui/core/Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/song")
            .then(response => {
                if (response.status > 400) {
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

    render() {
        return (
            <ul>
                {this.state.data.map(song => {
                    return (
                        <div style={{backgroundColor: 'green'}}>
                            <li key={song.id}>
                                {song.name} - {song.artist}
                            </li>
                            <div className="test">
                                <CustomBox/>

                                <Button color="primary">
                                    Exit
                                </Button>
                            </div>


                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default App;
const container = document.getElementById("app");
render(<App/>, container);
