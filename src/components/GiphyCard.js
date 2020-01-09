import React from "react";

export default class GiphyCard extends React.Component {
    render() {
        return <div name="container"> {
            this.props.val.map(obj => {
                return(
                    <img src={this.props.val.images.fixed_width.url} alt={this.props.val.title}></img>
                );
            })    
        }  
        </div>
    }
}