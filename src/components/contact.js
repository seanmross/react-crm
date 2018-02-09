import React from 'react';
import './collection.css';
import Typography from 'material-ui/Typography'
import Card, { CardContent } from 'material-ui/Card'

const Contact = props => {
    return (
        <div>
            <Card className="contact-card">
                <CardContent>
                    <Typography type="subheading" gutterBottom>Contact</Typography>
                    <Typography type="title">{props.name}</Typography>
                    <Typography type="body1">{props.email}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
 export default Contact