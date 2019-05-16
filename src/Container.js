import React, { Component } from 'react';
import Card from './Card'

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reservationcards = this.props.reservations.map(res => {
      return <Card {...res} key={Date.now()} />
    })
    return (
      <div className="card-container">
      { reservationcards }
      </div>
    );
  }
}

export default Container;
