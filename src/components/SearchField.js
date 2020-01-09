import React from "react";
import axios from "axios";
import GiphyCard from "./GiphyCard";

export default class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            giphyCode: ""
        }
    };
    handleGiphyChange = () => {
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