import React from 'react'
import { Route, NavLink } from "react-router-dom";
import requireAuth from '../requireAuth'
import '../HeaderStyle.css';

import DisplayCoursesComponent from './components/courses_organizer/DisplayCoursesComponent'
import DisplayInstructorsComponent from './components/courses_organizer/DisplayInstructorsComponent'
import DisplayStudentsComponent from './components/courses_organizer/DisplayStudentsComponent'

class DisplayUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/courses`} className="navLink" strict activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Courses</NavLink>
                        <NavLink to={`${match.url}/instructors`} className="navLink" strict activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Instructors</NavLink>
                        <NavLink to={`${match.url}/students`} className="navLink" strict activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Students</NavLink>
                    </p>
                    <br />
                </div>
                <Route path={`${match.url}/courses`} component={DisplayCoursesComponent} />
                <Route path={`${match.url}/instructors`} component={DisplayInstructorsComponent} />
                <Route path={`${match.url}/students`} component={DisplayStudentsComponent} />
            </div>
        )
    }
}

export default requireAuth(DisplayUIComponent)