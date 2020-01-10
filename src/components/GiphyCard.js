import React, {Component} from "react";
import './styles/GiphyCardStyles.css';

/*
    * GiphyCard returns a single giphy object frome each object taken in. 
    * SingleGiphy returns an <img> element that data.
*/
class SingleGiphy extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this.props.sourceURL);
        return(
            <img src={this.props.val.images.fixed_width.url} className="image" alt={this.props.val.title}/>
        )
    }       
}

class GiphyCard extends Component {
    render() {
        return <div> {
            this.props.val.map(obj => {
                //console.log(obj.source_tld);

                //Determine what the overlay text will be by using the GIF object property provided by the GIPHY API.
                let overlayText = obj.source_tld;
                if(obj.source_tld === "") {
                    overlayText = "Not listed"; //Don't just display a blank space if no source was provided
                }

                else {
                    if(!overlayText.includes("www.")) { //Standardize formatting
                        let newText = "www.".concat(overlayText);
                        overlayText = newText;
                    }
                }

                return(
                    <div className="container">
                        <SingleGiphy val={obj} sourceURL={obj.source_tld} dataPublished={obj.create_datetime} />
                        <div className="overlay">
                            <p>Source: {overlayText}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
    };
};
export default GiphyCard;