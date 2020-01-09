import React, {Component} from "react";
import axios from "axios";
import GiphyCard from "./GiphyCard";

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
    fetchGiphyData() {
        this.props.val(this.state.giphyCode)
    };
    render() {
        return(
            <div>
                <input onChange={this.handleGiphyChange}/>
                <button onClick={this.fetchGiphyData}/>
            </div>
        )
    }
}

export default SearchField;