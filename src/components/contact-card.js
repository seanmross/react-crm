import React from 'react';
import './contacts.css';
import Typography from 'material-ui/Typography'
import Card, { CardContent } from 'material-ui/Card'
import { Link } from 'react-router-dom'

const Contact = (props) => {
    return (
        <div>
            <Card className="contact-card">
                <CardContent>
                    
                    <Typography type="subheading" gutterBottom>Contact</Typography>
                    <Typography type="title">
                        <Link to={`/contacts/${props.id}`}>{props.name}</Link>
                    </Typography>
                    <Typography type="body1">{props.email}</Typography>
                    
                </CardContent>
            </Card>
        </div>
    )
}
 export default Contact