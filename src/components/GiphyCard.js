import React, {Component} from "react";

class SingleGiphy extends Component {
    render() {
        return(
            <img src={this.props.val.images.fixed_width.url} alt={this.props.val.title}/>
        )
    }       
}

class GiphyCard extends Component {
    render() {
        return <div> {
            this.props.val.map(obj => {
                return(
                   <SingleGiphy val={obj}/>
                )
            })
        }
    </div>
    };
};
export default GiphyCard;