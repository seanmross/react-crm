import React, { Component } from 'react';
import './layout.css';
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'

const data = [
  { name: 'Sean Ross', email: 'seanmross9@gmail.com' },
  { name: 'Mason Acie', email: 'mason@gmail.com' },
  { name: 'Noah Wright', email: 'noah@gmail.com' }
];

const Contact = props => 
    <div>
      <Card className="card">
        <CardContent>
          <Typography type="subheading" gutterBottom>Contact</Typography>
          <Typography type="title">{props.name}</Typography>
          <Typography type="body1">{props.email}</Typography>
        </CardContent>
      </Card>
    </div>

class Layout extends Component {
  render() {
    return (
      <div>
        { data.map( contact => <Contact {...contact} />) }
      </div>
    )
  }
}
export default Layout
