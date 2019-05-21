import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    served: [],
    money: 100,
    eaten: [],
    numOfOrders: 0
  }

  eatSushi = (obj) => {
    this.setState({money: this.state.money - obj, eaten: [...this.state.eaten, obj]})
  }



  componentDidMount() {
    fetch('http://localhost:3000/sushis')
    .then(r => r.json())
    .then(data => this.setState({sushis: data}, this.renderFour))
  }


  renderFour = () => {
    const allSushis = [...this.state.sushis]
    const chosenSushis = []
    var i
    for (i = 0; i < 4; i++) {
      chosenSushis.push(allSushis[0])
      allSushis.shift()
    }
    if (allSushis.length !== 0){
      this.setState({sushis: allSushis, served: chosenSushis, numOfOrders: this.state.numOfOrders + 1}, () => console.log(this.state.numOfOrders))
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.served ? this.state.served : null} eatSushi={this.eatSushi} money={this.state.money} moreSushi={this.renderFour} numOfOrders={this.state.numOfOrders}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
