import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  const displayedSushi = props.sushis.map(s => <Sushi sushi={s} key={s.id} eatSushi={props.eatSushi}/>);

  return (
    <Fragment>
      <div className="belt">
        {displayedSushi}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
