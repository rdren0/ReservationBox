import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.createReservation(this.state)
  }

  render() {
    return (
      <div className="form">
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
      <input name="name" value={this.state.name} placeholder="Name"/>
      <input name="date" value={this.state.date} placeholder="Date"/>
      <input name="time" value={this.state.time} placeholder="Time"/>
      <input type="number" name="number" value={this.state.number} placeholder="Number of guests"/>
      <button className="make-button"> Submit </button>


      </form>
        
      </div>
    );
  }
}

export default Form;
