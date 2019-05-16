import React from 'react';

const Card = ({id,name,date,time, number}) => {
  return (
    <div className="card">
      <h1> { name} </h1>
      <p>{ number } </p>
    </div>
  );
  
}

export default Card;
