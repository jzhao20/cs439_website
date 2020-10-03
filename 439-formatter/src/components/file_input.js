import React, { PropTypes, Component } from 'react';


class file_input extends Component {
    constructor(props){
        super(props);
        this.handlClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.refs.fileUploader.click();
    }
    render() {
        return (
            <div className="body-content">
                <div className="add-media" onClick={this.handleClick.bind(this)}>
                    <i className="plus icon"></i>
                    <input type="file" id="file" ref="fileUploader" style={{display: "none"}}/>
                </div>
            </div>
        )
    }
}

export default file_input