import React, {Component} from "react";
import {render} from "react-dom"
import App from "./App";
import Box from '@material-ui/core/Box';

class CustomBox extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "blue"}
    }

    render() {
        return <div><Box sx={{
            width: 300, height: 300, bgcolor: 'primary.dark', '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.8, 0.9, 0.8],
            },
        }}
        />
        </div>
    }
}

export default CustomBox;