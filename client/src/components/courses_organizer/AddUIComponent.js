import React from 'react'
import requireAuth from '../requireAuth'
import { Route, NavLink } from "react-router-dom";
import '../HeaderStyle.css';

import AddCourseComponent from './AddCourseComponent'
import AddDepartmentComponent from './AddDepartmentComponent'
import AddInstructorComponent from './AddInstructorComponent'
import AddStudentComponent from './AddStudentComponent'

class AddUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/course`} className="navLink" strict activeStyle={{ color: 'blue' }}>Add Course</NavLink>
                        <NavLink to={`${match.url}/department`} className="navLink" strict activeStyle={{ color: 'blue' }}>Add Department</NavLink>
                        <NavLink to={`${match.url}/instructor`} className="navLink" strict activeStyle={{ color: 'blue' }}>Add Instructor</NavLink>
                        <NavLink to={`${match.url}/student`} className="navLink" strict activeStyle={{ color: 'blue' }}>Add Student</NavLink>
                    </p>
                    <br />
                </div>
                <Route path={`${match.url}/course`} component={AddCourseComponent} />
                <Route path={`${match.url}/department`} component={AddDepartmentComponent} />
                <Route path={`${match.url}/instructor`} component={AddInstructorComponent} />
                <Route path={`${match.url}/student`} component={AddStudentComponent} />
            </div>
        )
    }
}

export default requireAuth(AddUIComponent)