import React from 'react'

const Sushi = (props) => {
  let { id, name, img_url, price, eaten } = props.sushi;

  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => props.eatSushi(id)}>
        {
          eaten ? null : <img src={img_url} alt={name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi;
