import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const NUM_SISHI = 4

class App extends Component {
state = {
  sushis:[],
  startIndex: 0,
  wallet: 100,
  eaten: false
}

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis =>{
      // const updatedSushis = sushis.map(sushi => {return {...sushi, eaten: false}})
      this.setState({sushis})//: updatedSushis})
    })
  }


  handleMoreSushiClick = () =>{
    console.log('clicked more boi');
    //clicks the more sushi button, adding 4 to the startIndex state, plus number of sushi
    this.setState(prevState => {
      return {startIndex: prevState.startIndex + NUM_SISHI}
    })
  }





  handleEatSushiClick = (id) =>{
      // console.log('Clicked this roll');
      // console.log(id);
      // console.log(this.state.wallet);

    const price = this.state.sushis.find(sushi => sushi.id === id).price
    let wallet = this.state.wallet
    // let eat = this.state.eaten
//conditional for setting wallet validation
console.log(this.state)
    if (wallet - price >= 0){

      this.setState(prevState =>{
         //previous state ensure that you have the last state

        return{
          sushis: prevState.sushis.map(sushi =>{
                    if (sushi.id === id){
                      return {...sushi, eaten: true}
                    } else{
                      return sushi
                    }
                  }),
          wallet: prevState.wallet - price
        }
      })
    }
  }

  render() {
    // console.log(this.state.sushis);
    const { startIndex, sushis } = this.state

    const showSushi = sushis.slice(startIndex, startIndex + NUM_SISHI) //number of sushi showed
    const eatenSushi = sushis.filter(sushi => sushi.eaten)
    return (
      <div className="app">
        <SushiContainer  sushis={showSushi} onMoreSushiClick={this.handleMoreSushiClick} onEatSushiClick={this.handleEatSushiClick}/>
        <Table eatenSushi={eatenSushi} moneyBags={this.state.wallet}/>
      </div>
    );
  }
}





export default App;
