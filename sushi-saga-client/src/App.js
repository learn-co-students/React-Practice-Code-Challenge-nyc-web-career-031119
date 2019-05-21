import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis";
let SUSHI_COUNT = 4;

class App extends Component {
  state = {
    sushis: [],
    startIndex: 0,
    balance: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const sushis = data.map(s => (
        {...s, eaten: false})
      );
      this.setState({sushis: sushis});
    })//end of thens
  }

  moreSushiClick = () => {
    // this.setState({startIndex: this.state.startIndex + SUSHI_COUNT})
    this.setState(prevState => {
      return {startIndex: prevState.startIndex + SUSHI_COUNT}
    });
  }

  eatSushiClick = (id) => {
   // console.log(id);
   const price = this.state.sushis.find(s => s.id === id).price;
   if(this.state.balance - price > 0){
     const sushis = this.state.sushis.map(s => {
       return s.id === id ? {...s, eaten:true} : s
     });

   this.setState(prevState => {
     return {
       sushis: sushis,
       balance: prevState.balance - price
       }
     });
   };
  }

  render() {
    let { sushis, startIndex } = this.state;
    let sushiToDisplay = sushis.slice(startIndex, startIndex + SUSHI_COUNT);
    let eatenSushiArray = sushis.filter(s => s.eaten);

    return (
      <div className="app">
        <SushiContainer
          sushis={sushiToDisplay} moreSushi={this.moreSushiClick}
          eatSushi={this.eatSushiClick}
        />
        <Table balance={this.state.balance} eatenSushi={eatenSushiArray}/>
      </div>
    );
  }
}

export default App;
