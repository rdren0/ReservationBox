import React, { Component } from 'react';
import Container from './Container'
import Form from './Form'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () =>{
    this.fetchCall()
  }

  createReservation = (reservation) => {
    this.postnewReservation(reservation)
  }

  fetchCall = () => {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(result => this.setState({
      reservations: result
    }))
  }

  postnewReservation =(reservation) =>{
    let newReservation;
    let option = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: reservation.name, 
        date: reservation.date, 
        time: reservation.time, 
        number: reservation.number 
      })      
    }
    fetch("http://localhost:3001/api/v1/reservations", option)
    .then(response =>  response.json())
    .then(result => this.setState({
      newReservation: result
    }))
    console.log([...this.state.reservations, this.state.newReservation])
    this.setState({reservations: [...this.state.reservations, this.state.newReservation]})
  }

  deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/:${id.id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
    .then(response =>  response.json())
    .then(result => console.log(result))
  }
    

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form createReservation={this.createReservation} />
        </div>
        <div className='resy-container'>
        <Container reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
