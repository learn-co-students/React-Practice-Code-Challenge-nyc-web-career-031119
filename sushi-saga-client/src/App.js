import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    budget: 200
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushis => {
        const newSushis = sushis.map(sushi => {
          return {...sushi, eaten: false}
        })
        this.setState({ sushis: newSushis });
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  eatSushi = (clickedSushi) => {
    if (!this.state.eatenSushis.includes(clickedSushi) && clickedSushi.price <= this.state.budget) {
      // create copy of clicked sushi and set it to eaten
      let mySushi = {...clickedSushi};
      mySushi.eaten = true;
      // Remove originally clicked sushi from state.sushis
      let sushiIndex = this.state.sushis.findIndex(el => {
        return el.id === clickedSushi.id
      })
      this.setState((state, props) => {
        this.state.sushis[sushiIndex].eaten = true;
        return {
          eatenSushis: [...this.state.eatenSushis, clickedSushi],
          budget: this.state.budget - clickedSushi.price
        }
      })
    }
  }

  shiftSushis = () => {
    console.log("clicked more button");
    let newSushis = [...this.state.sushis]

    newSushis.splice(this.state.sushis.length - 4);
    console.log("newSushis", newSushis)
    this.setState({
      sushis: newSushis
    });
  }

  render() {
    console.log(this.state.sushis);
    console.log(this.state.eatenSushis);
    console.log(this.state.budget);
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} shiftSushis={this.shiftSushis} />
        <Table eatenSushis={this.state.eatenSushis} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
