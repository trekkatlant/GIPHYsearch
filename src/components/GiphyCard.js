import React, {Component} from "react";

class GiphyCard extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div name="container"> 
                <img src={this.props.val.images.fixed_width.url} alt={this.props.val.title}></img>
            </div>
        );    
    }
}

export default GiphyCard;