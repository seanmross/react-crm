import React, { Component } from 'react'
import Contact from './contact'
import data from './data'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Card, { CardContent } from 'material-ui/Card'
import './collection.css';
import Typography from 'material-ui/Typography'

class Layout extends Component {
  state = {
    name: '',
    email: ''
  }
  // Lifecycle function
  // Runs right before component mounts onto page
  componentWillMount(){
    this.setState({
      contacts: data
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    let contacts = this.state.contacts
    let newId = contacts[contacts.length - 1].id + 1
    contacts.push({
        id: newId,
        name: this.state.name,
        email: this.state.email
    })
    // setState()
    // Whenever you run setState(), React knows there's a change and will update the view
    this.setState({
      contacts: contacts
    }, () => this.setState({
      name: '',
      email: ''
    }))
  }

  handleFormInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  newContactForm = () =>
    <Card className="form-card">
      <CardContent>
        <Typography type="subheading" gutterBottom>New Contact</Typography>
        <form noValidate autoComplete="off" onSubmit={ this.handleFormSubmit }>
          <TextField
            onChange={this.handleFormInputChange('name')}
            value={this.state.name}
            className="card-input" 
            label="Name" 
            type="text" 
            placeholder="Name">
          </TextField>
          <TextField
            onChange={this.handleFormInputChange('email')}
            value={this.state.email}
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
      <div id='collection'>
        { this.newContactForm() }
        { this.state.contacts.map( contact => <Contact key={ contact.id } {...contact} />) }
      </div>
    )
  }
}
export default Layout
