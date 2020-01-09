import React, {Component} from 'react';
import './App.css';
import GiphyCard from './components/GiphyCard.js';
import SearchField from './components/SearchField.js';
import Pagination from './components/Pagination.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: []
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Search with GIPHY</h1>
        <SearchField></SearchField>
        <div>
          {this.state.cardData.map((element, index) => (
            <GiphyCard />
          ))}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default App;
