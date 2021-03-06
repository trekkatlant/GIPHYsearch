import React, {Component} from 'react';
import GiphyCard from './components/GiphyCard.js';
import SearchField from './components/SearchField.js';
import Filter from './components/Filter.js';
import Pagination from './components/Pagination.js';
import axios from "axios"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphyCode: "",
      cardData: [],
      cardDataCopy: [],
      sort: "Trending"
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

  handleSorting = (event) => {

    let val = event.target.value;
    if(val === "Reddit") {
      this.setState({
        sort: "Reddit"
      });
      var cardDataTwo = [];
      //console.log(this.state.cardData[0].source_tld);
      for(var i = 0; i < this.state.cardDataCopy.length; i++) {
        console.log(this.state.sort.toLowerCase());
        if(this.state.cardDataCopy[i].source_tld.includes("www.reddit")) {
          cardDataTwo.push(this.state.cardDataCopy[i]);
        }
      }
      if(cardDataTwo !== undefined) {
        this.setState({
          cardData: cardDataTwo
        });
      } else {
        this.setState({
          cardData: []
        })
      }
    }
    else if(val === "Tumblr") {
      this.setState({
        sort: "Tumblr"
      })
      var cardDataTwo = [];
      for(var i = 0; i < this.state.cardDataCopy.length; i++) {
        console.log(this.state.sort.toLowerCase());
        if(this.state.cardDataCopy[i].source_tld.includes("www.tumblr")) {
          cardDataTwo.push(this.state.cardDataCopy[i]);
        }
      }
      if(cardDataTwo !== undefined) {
        this.setState({
          cardData: cardDataTwo
        });
      } else {
        this.setState({
          cardData: []
        })
      }
    }
    else {
      this.setState({
        sort: "Trending"
      });
      var cardDataTwo = [];
      this.setState({
        cardData: this.state.cardDataCopy
      });
    }
  };

  async handleSearch(searchTerm) {
    //Making sure the inputs are correct to request data from the API. 
    let url = "http://api.giphy.com/v1/gifs/trending?api_key="; //Default: Trending gifs
    let apiKey = "7KV6EGFTs7XsTj07TKCtBk580Vyv2SFT";
    let apiUrl = ""
    if(searchTerm === "") {
      apiUrl = url + apiKey;
    } else {
      apiUrl = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&api_key="+apiKey+"&limit=40"; //limit set to 40
    }
    
    //Using Axios to parse data and catch errors.
    axios.get(apiUrl)
    .then(response => {
      this.setState({
        cardData: response.data.data, //Gets GIF objects of all the gifs that the GIPHY API sent back. 
        cardDataCopy: response.data.data
      })
    })
    .catch(err => console.log(err));
  }

  /*
    * The cardData is passed into GiphyCard to eventually be mapped into <img> elements.
    * GiphyCard holds all the gifs that will be displayed. 
  */
  render() {
    return <div className="App">
        <div className="Content">
          <div className="App-Header">
            <h1>Search with GIPHY</h1> 
          </div>

          <div className="App-Description">
            <i> 
            <p>Look up your favorite gifs or find random ones with this web search app!</p>{"\n"}
            <p>Or, just take a look at the trending gifs.</p>
            </i>
          </div>
          <SearchField val={this.handleUpdateData}/>
          <h2>Filter By: {this.state.sort}...</h2>
          <Filter action={this.handleSorting} />

          <GiphyCard val={this.state.cardData}/>
        </div>
        <Pagination />
        <div className="App-Description">
          <p>Powered by Giphy.</p>
        </div>
    </div>
  }
};
export default App;
