import React from 'react';
import './card.css';

const Card = ({name,price,marketCap,id,rank,imgsource}) => {
  return (
    <div>
        <div className='card' key={id}>
          <img src={imgsource} alt={id}/>
          <h3 style={{color:"orange"}}>{name}</h3>
          <p>Price : {price}</p>
          <p>MarketCap : {marketCap}</p>
          <p>Rank : {rank}</p>
        </div>
    </div>
  )
}

export default Card