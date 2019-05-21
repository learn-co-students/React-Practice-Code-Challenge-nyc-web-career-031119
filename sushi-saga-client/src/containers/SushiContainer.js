import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

// console.log(props.sushis);

  const placeSushi = props.sushis.map((sushi) =>{
    return <Sushi sushi={sushi} key={sushi.id} onEatSushiClick={props.onEatSushiClick}/>
  })    //put key so react stops throwing a warning
  //or
  // const placeSushi =  props.sushis.map((sushi) => (<Sushi sushi={sushi}/>) )

  return (
    <Fragment>
      <div className="belt" >
        {
          placeSushi
        }
        <MoreButton onMoreSushiClick={props.onMoreSushiClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
