import React, { Component } from 'react';
import Card from './Card'

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reservationcard = reservations.map(res => {
      return <Card {...res} key={Date.now()} />
    })
    return (
      <div>
        
      </div>
    );
  }
}

export default Container;
