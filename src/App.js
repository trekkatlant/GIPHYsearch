import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
        <h1>Title</h1>
        <SearchField></SearchField>
        <div>
          {this.state.cardData.map((element, index) => {
            <GiphyCard />
          })}
        </div>
      </div>
      <Pagination />
    );
  }
}

export default App;
