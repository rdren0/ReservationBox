import React from 'react';

const Card = ({id,name,date,time, number, deleteReservation}) => {
  return (
    <div className="card">
      <h3> { name} </h3>
      <p>{ date } </p>
      <p>{ time } </p>
      <p> Number of guests: {number} </p>
      <button onClick={() => deleteReservation({id})}> Cancel </button>
    </div>
  );
  
}

export default Card;
