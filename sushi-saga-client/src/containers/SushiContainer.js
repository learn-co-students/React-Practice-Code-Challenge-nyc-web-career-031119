import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {



  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis ? props.sushis.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi} money={props.money} numOfOrders={props.numOfOrders} />) : null
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
