import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {

  state = {
    sushis: [],
    cost: 0,
    index: 0,
    finishedSushi: [],
    budget: 100,
  };

  grabFourSushi = () => {
    return this.state.sushis.slice(this.state.index, this.state.index+4)
  };

  handleMoreButton = () => {
    this.setState({
      index: this.state.index + 4
    });
  };

  handleSushiClick = sushi => {
    const total = this.state.cost + sushi.price;

    if (!this.state.finishedSushi.includes(sushi) && total <= this.state.budget) {
      this.setState(prevState => ({
        finishedSushi: [...prevState.finishedSushi, sushi],
        cost: total
      }))
    }
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(data => this.setState({sushis: data}))
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.grabFourSushi()}
          handleMoreButton={this.handleMoreButton}
          handleSushiClick={this.handleSushiClick}
          finishedSushi={this.state.finishedSushi}
        />
        <Table
          remainingBudget={this.state.budget - this.state.cost}
          finishedSushi={this.state.finishedSushi}
        />
      </div>
    );
  }
}

export default App;
