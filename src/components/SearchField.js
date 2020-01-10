import React, {Component} from "react";
import './styles/SearchStyles.css';

/*
    * SearchField is responsible for the search bar and handling user input when
    * the user presses "enter." It stores the user input as a string inside its
    * "giphyCode" state value. giphyCode updates as the user types in the search
    * bar. When the user presses enter, the event "handleEnter" is called and
    * in turn calls "fetchGiphyData" (the same thing that's called when clicking
    * the "submit" button). fetchGiphyData gives this information to giphyCode.
*/
class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giphyCode: ""
        }
    };
    handleGiphyChange = (event) => {
        this.setState({
            giphyCode: event.target.value
        })
    };
    fetchGiphyData = (event) => {
        event.preventDefault();
        this.props.val(this.state.giphyCode)
    };
    handleEnter = (event) => {
        if(event.key === "Enter") {
            event.preventDefault();
            this.fetchGiphyData(event);
        }        
    };
    render() {
        return(
            <div className="searchBar">
                <input placeholder="Enter keyword..." onChange={this.handleGiphyChange} onKeyDown={this.handleEnter}/>
                <button onClick={this.fetchGiphyData}>search</button>
            </div>
        )
    }
};
export default SearchField;