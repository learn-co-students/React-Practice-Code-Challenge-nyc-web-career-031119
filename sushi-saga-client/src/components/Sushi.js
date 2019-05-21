import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  eatSushi = (e) => {
    const cost = parseInt(e.target.dataset.price)
    if(this.props.money > cost) {
      this.setState({eaten: true}, () => this.props.eatSushi(cost))
    } else {
      console.log("Need more money, bruv")
    }
  }

  componentDidUpdate() {
    if(this.props.numOfOrders > 1 && this.state.eaten === true){
      this.setState({eaten: false})
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.eatSushi}>
          {  this.state.eaten
            ?
              null
            :
              <img data-price={this.props.sushi.price} src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
