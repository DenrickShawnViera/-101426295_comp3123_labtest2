import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import './App.css'; // Optional if you want to add custom colors

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        this.setState({ persons: res.data.results });
      })
      .catch(err => console.error('Error fetching data:', err));
  }

  render() {
    return (
      <Container className="mt-4">
        <div
          style={{
            backgroundColor: 'green',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            fontWeight: 'bold'
          }}
        >
          User List
        </div>

        {this.state.persons.map((person, index) => (
          <Card
            key={index}
            style={{
              backgroundColor: '#0bb5f4',
              color: 'white',
              marginTop: '15px',
              padding: '20px',
              border: 'none',
              borderRadius: '10px'
            }}
          >
            <Card.Body className="d-flex align-items-center">
              <img
                src={person.picture.large}
                alt="profile"
                style={{
                  borderRadius: '50%',
                  width: '120px',
                  height: '120px',
                  marginRight: '20px',
                  border: '3px solid white'
                }}
              />
              <div>
                <h5>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</h5>
                <p><b>User Name:</b> {person.login.username}</p>
                <p><b>Gender:</b> {person.gender.toUpperCase()}</p>
                <p><b>Time Zone Description:</b> {person.location.timezone.description}</p>
                <p><b>Address:</b> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                <p><b>Email:</b> {person.email}</p>
                <p><b>Phone:</b> {person.phone}</p>
                <p><b>Cell:</b> {person.cell}</p>
                <p><b>Birth Date and Age:</b> {person.dob.date} ({person.dob.age} years)</p>
                <p><b>Register Date:</b> {person.registered.date}</p>
                <Button variant="primary">Details</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}

export default PersonList;
