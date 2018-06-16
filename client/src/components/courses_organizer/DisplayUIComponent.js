import React from 'react'
import { Route, NavLink } from "react-router-dom";
import requireAuth from '../requireAuth'
import '../HeaderStyle.css';

import DisplayCoursesComponent from './DisplayCoursesComponent'
import DisplayInstructorsComponent from './DisplayInstructorsComponent'
import DisplayStudentsComponent from './DisplayStudentsComponent'

import DisplayACourseComponent from './DisplayACourseComponent'
import DisplayAInstructorComponent from './DisplayAInstructorComponent'
import DisplayAStudentComponent from './DisplayAStudentComponent'

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
                
                <Route path={`${match.url}/display/a_course`} exact component={DisplayACourseComponent} />
                <Route path={`${match.url}/display/a_instructor`} exact component={DisplayAInstructorComponent} />
                <Route path={`${match.url}/display/a_student`} exact component={DisplayAStudentComponent} />
            </div>
        )
    }
}

export default requireAuth(DisplayUIComponent)