import React, { Component } from 'react'
import data from './data'

class ShowContact extends Component {

    componentWillMount(){
        this.setState({
            contact: data.find( contact => contact.id === parseInt(this.props.match.params.id, 10))
        })
    }

    render(){
        return(
            <div>
                Contact name: {this.state.contact.name}
            </div>
        )
    }

}

export default ShowContact