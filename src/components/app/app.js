import React, { Component } from 'react';
import './app.css';
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import imageFile from './static/jesse-lingard.png'

const image = {
  src: imageFile
}

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Typography type="display2" gutterBottom align="center">
          App Page
        </Typography>

        <div id="card" align="center">
          <Card className="card">
            <CardMedia
              className="card-media"
              image={image.src}
            />
            <CardContent>
              <Typography type="headline" align="center">
                My Card
            </Typography>
            </CardContent>
          </Card>
        </div>
        
      </div>
    )
  }
}
export default App
