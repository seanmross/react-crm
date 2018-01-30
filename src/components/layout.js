import React, { Component } from 'react'
import Contact from './contact'
import data from './data'
import Button from 'material-ui/Button'

class Layout extends Component {
  addContact = () => {
    console.log('clicked button')
  }

  render() {
    return (
      <div>
        <Button onClick={ this.addContact } className="button" raised color="secondary">+ Add Contact</Button>
        { data.map( contact => <Contact key={ contact.id } {...contact} />) }
      </div>
    )
  }
}
export default Layout
