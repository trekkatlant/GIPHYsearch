import React, {Component} from "react";

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
    fetchGiphyData= (event) => {
        event.preventDefault();
        this.props.val(this.state.giphyCode)
    };
    handlEnter = (event) => {
        if(event.key === "Enter") {
            event.preventDefault();
            this.fetchGiphyData(event);
        }        
    };
    render() {
        return(
            <div>
                <input onChange={this.handleGiphyChange} onKeyDown={this.handlEnter}/>
                <button onClick={this.fetchGiphyData}>search</button>
            </div>
        )
    }
};
export default SearchField;