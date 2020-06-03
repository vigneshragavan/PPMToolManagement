import React, { Component } from 'react'
import  { Link} from 'react-router-dom'

export default class CreateProjectButton extends Component {
    render() {
        return (
            <React-Framework>      
                
         <Link to="/addProject" className="btn btn-lg btn-info">
            Create a Project
        </Link>
        </React-Framework>
 
        
        )
    }
}
