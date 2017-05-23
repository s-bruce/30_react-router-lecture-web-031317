import React from 'react'
import { Switch, Route } from 'react-router-dom'


export default class StudentDetail extends React.Component{
  constructor(){
    super()
    this.state = {
      name: ""
    }
  }

  componentDidMount(){
    const studentId = this.props.match.params.id
    fetch(`http://localhost:3000/api/v1/students/${studentId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        name: data.name
      })
    })
  }


  render(){
    return(
    <div className='col-md-8'>
      <h1>Student Details</h1>
      <h3>Name: {this.state.name}</h3>
    </div>
  )
}
}
