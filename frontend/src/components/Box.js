import React, {Component} from "react";
import {render} from "react-dom"
import App from "./App";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

class CustomBox extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "blue"}
    }

    render() {
        return <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button style={{color: 'blue'}}>PLAY</Button>
    </Box>

    }
}

export default CustomBox;