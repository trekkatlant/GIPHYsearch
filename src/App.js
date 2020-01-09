import React, {Component} from 'react';
import './App.css';
import GiphyCard from './components/GiphyCard.js';
import SearchField from './components/SearchField.js';
import Pagination from './components/Pagination.js';
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphyCode: "",
      cardData: []
    };
  }

  /**
  * This method will call the Giphy API to search for GIFs.
  * It expects the string searchTerm from the search text box,
  * the child of this component. The app's state will be modified
  * to save all the data from the Giphy API. The Giphy API
  * RESPONSE CODES: json.meta.status is an integer
  *   200 means OK, and we can use the data
  *   429 means we made too many requests and should warn the user
  * GETTING IMAGES:
  *   json.data is an array of objects. Most useful property is 
  *   json.data[i].embed_url, which can be put into an <img> tag directly
  */
  componentDidMount = () => {
    this.handleSearch();
  };

  handleUpdateData = (val) => {
    this.handleSearch(val);
    this.setState({
      giphyCode: val
    })
  };

  async handleSearch(searchTerm) {
    // var app = this;
    let url = "http://api.giphy.com/v1/gifs/trending?api_key=";
    let apiKey = "7KV6EGFTs7XsTj07TKCtBk580Vyv2SFT";
    let apiUrl = ""
    if(searchTerm === "") {
      apiUrl = url + apiKey;
    } else {
      apiUrl = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key="+apiKey;
    }
    
    axios.get(apiUrl)
    // fetch("http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=7KV6EGFTs7XsTj07TKCtBk580Vyv2SFT")
    .then(response => {
      this.setState({
        cardData: response.data.data
      })
      // return response.json();
    })
    .catch(err => console.log(err));
    // .then(function(json) {
    //   if(json.meta.status === 200) {
    //     app.setState({
    //       cardData: json.data
    //     });
    //   }
    //   else {
    //     alert("Slow down bro");
    //   }
    // });
  }

  render() {
    return <div className="App">
        <h1>Search with GIPHY</h1>
        <SearchField val={this.handleUpdateData}/>
        {/* {this.state.cardData.map((element, index) => (
            <GiphyCard val={this.state.cardData}/>
          ))} */}
        <GiphyCard val={this.state.cardData}/>
        {/* <Pagination /> */}
      </div>
  }
}

export default App;
