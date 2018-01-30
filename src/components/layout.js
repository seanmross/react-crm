import React, { Component } from 'react';
import Contact from './contact'
import data from './data'

class Layout extends Component {
  render() {
    return (
      <div>
        { data.map( contact => <Contact key={ contact.id } {...contact} />) }
      </div>
    )
  }
}
export default Layout
