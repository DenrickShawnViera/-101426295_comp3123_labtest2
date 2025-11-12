import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

class PersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  render() {
    return (
      <Container className="mt-4">
        <h2 className="mb-3 text-center">Random Users (Axios Example)</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={person.picture.thumbnail} alt="profile" /></td>
                <td>{person.name.first} {person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.location.country}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default PersonList;
