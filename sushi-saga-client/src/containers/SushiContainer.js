import React from 'react'
import MoreButton          from '../components/MoreButton'
import Sushi               from "../components/Sushi";

const SushiContainer = (props) => {
  return (
      <div className="belt">
        {
         props.sushis.map(sushi => {
           return <Sushi
             handleSushiClick={props.handleSushiClick}
             key={sushi.id}
             sushi={sushi}
             taken={props.finishedSushi.includes(sushi)}
           />
         })
        }
        <MoreButton handleMoreButton={props.handleMoreButton}/>
      </div>
  )
};

export default SushiContainer;
