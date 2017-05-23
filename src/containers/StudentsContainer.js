import React, { Component } from 'react'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'
import StudentDetail from '../components/StudentDetail'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { fetchStudents, createStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      names: []
    }
  }

  componentDidMount(){
    fetchStudents()
      .then( data => this.setState({
        names: data.map(student => student.name )
      }) )
  }

  handleAddStudent(name){
    this.setState( prevState =>  ({ names: [...prevState.names, name] }) )
    createStudent(name)
      .catch(e => this.setState(prevState => ({names: prevState.names.filter(person => person !== name)})))
  }



  render(){
    return (
      <div>
        <div className="row">
          < StudentList students={this.state.names} />
          < Route exact={true} path="/students/new" component={StudentForm} />
          < Route path="/students/:id" component={StudentDetail} />
        </div>
        <div className="row">
          <div className='col-md-4'>
            <Link to="/students/new">Add Student</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentsContainer

// < Route exact path="/students/5" component={StudentDetail} />

//< StudentForm  onSubmit={ this.handleAddStudent.bind(this) }/>
