import React, { Component } from 'react'
import Contact from './contact'
import data from './data'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Card, { CardContent } from 'material-ui/Card'
import './layout.css';

class Layout extends Component {
  // Lifecycle function
  // Runs right before component mounts onto page
  componentWillMount(){
    this.setState({
      contacts: data
    })
  }

  addContact = () => {
    let contacts = this.state.contacts
    let newId = contacts[contacts.length - 1].id + 1
    contacts.push({
        id: newId,
        name: this.refs.name,
        email: this.refs.email
    })
    // setState()
    // Whenever you run setState(), React knows there's a change and will update the view
    this.setState({
      contacts: contacts
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  newContact = () =>
    <Card className="form-card">
      <CardContent>
        <form noValidate autoComplete="off" onSubmit={ this.addContact }>
          <TextField 
            onChange={this.handleChange('name')}
            ref="name"
            className="card-input" 
            label="Name" 
            type="text" 
            placeholder="Name">
          </TextField>
          <TextField
            onChange={this.handleChange('email')}
            ref="email" 
            label="Email" 
            type="email" 
            placeholder="Email">
          </TextField>
          <Button type="submit" className="button" raised color="secondary">+ Add Contact</Button>
        </form>
      </CardContent>
    </Card>

  render() {
    return (
      <div>
        { this.newContact() }

        { this.state.contacts.map( contact => <Contact key={ contact.id } {...contact} />) }
      </div>
    )
  }
}
export default Layout
