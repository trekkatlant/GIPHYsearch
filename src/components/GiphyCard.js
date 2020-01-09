import React, {Component} from "react";

class SingleGiphy extends Component {
    render() {
        return(
            <img src={this.props.val.images.fixed_width.url} alt={this.props.val.title}/>
        )
    }       
}

class GiphyCard extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div> {
            this.props.val.map(obj => {
                return(
                   <SingleGiphy val={obj}/>
                    // <img src={obj.val.images.fixed_widht.url} alt={obj.val.title}/>
                )
            })
        }
    </div>
    };
}

export default GiphyCard;