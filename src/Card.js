import React from 'react';

const Card = ({id,name,date,time, number}) => {
  return (
    <div className="card">
      <h2> { name} </h2>
      <h3>{ date } </h3>
      <h3>{ time } </h3>
      <p> Number of guests: {number} </p>
      <button> Cancel </button>
    </div>
  );
  
}

export default Card;
