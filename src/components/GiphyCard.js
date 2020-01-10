import React, {Component} from "react";
import './styles/GiphyCardStyles.css';

/*
    * GiphyCard returns a single giphy object frome each object taken in. 
    * SingleGiphy returns an <img> element that data.
*/
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