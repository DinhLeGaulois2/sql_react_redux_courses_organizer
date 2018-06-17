import React from 'react'
import { Route, NavLink } from "react-router-dom";
import requireAuth from '../requireAuth'
import '../HeaderStyle.css';

import DisplayCoursesComponent from './DisplayCoursesComponent'
import DisplayInstructorsComponent from './DisplayInstructorsComponent'
import DisplayStudentsComponent from './DisplayStudentsComponent'

class DisplayUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/courses`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Courses</NavLink>
                        <NavLink to={`${match.url}/instructors`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Instructors</NavLink>
                        <NavLink to={`${match.url}/students`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Students</NavLink>
                    </p>
                    <br />
                </div>
    
                <Route path={`${match.url}/courses`} exact component={DisplayCoursesComponent} />
                <Route path={`${match.url}/instructors`} exact component={DisplayInstructorsComponent} />
                <Route path={`${match.url}/students`} exact component={DisplayStudentsComponent} />
            </div>
        )
    }
}

export default requireAuth(DisplayUIComponent)