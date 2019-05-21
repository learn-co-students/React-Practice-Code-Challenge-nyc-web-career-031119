import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  function generateSushiCards() {
    return props.sushis.map(sushi => {
      return <Sushi key={sushi.id} sushi={sushi} eatSushi={() => {props.eatSushi(sushi)}} />
    });
  }

  return (
    <Fragment>
      <div className="belt">
        { /* must use more button to get more */
          generateSushiCards().slice(-4)
        }
        <MoreButton shiftSushis={props.shiftSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
