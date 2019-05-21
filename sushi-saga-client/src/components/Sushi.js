import React, { Fragment, Component } from 'react'
import SushiContainer from '../containers/SushiContainer'

const Sushi =(props) =>{


    // console.log(props);

    const hansleClick = () =>{
      props.onEatSushiClick(props.sushi.id)
    }

    // console.log(props.sushi);

    return (
      <div className="sushi">
        <div className="plate">
          {
            /* Tell me if sushi has been eaten! */
            props.sushi.eaten
             ?
               null
            :
              <img src={props.sushi.img_url} onClick={hansleClick} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    )

}

export default Sushi
