import React, { Component } from "react";
import FontPicker from "font-picker-react";
 
export default class FontComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFontFamily: "Open Sans",
        };
    }
 
    render() {
        return (
            <div>
                <FontPicker
                    apiKey="AIzaSyB6Ctjl4FwqJBiPKb1DFBpj7UUeuEX5Gyg" //HIDE IT
                    activeFontFamily={this.state.activeFontFamily}
                    onChange={(nextFont) =>
                        this.setState({
                            activeFontFamily: nextFont.family,
                        })
                    }
                />
            </div>
        );
    }
}

