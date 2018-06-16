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
                        <NavLink to={`${match.url}/addcourse`} className="navLink" activeStyle={{ color: 'blue' }}>Add Course</NavLink>
                        <NavLink to={`${match.url}/adddepartment`} className="navLink" activeStyle={{ color: 'blue' }}>Add Department</NavLink>
                        <NavLink to={`${match.url}/addinstructor`} className="navLink" activeStyle={{ color: 'blue' }}>Add Instructor</NavLink>
                        <NavLink to={`${match.url}/addstudent`} className="navLink" activeStyle={{ color: 'blue' }}>Add Student</NavLink>
                    </p>
                    <br />
                </div>
                <Route path={`${match.url}/addcourse`} exact component={AddCourseComponent} />
                <Route path={`${match.url}/adddepartment`} exact component={AddDepartmentComponent} />
                <Route path={`${match.url}/addinstructor`} exact component={AddInstructorComponent} />
                <Route path={`${match.url}/addstudent`} exact component={AddStudentComponent} />
            </div>
        )
    }
}

export default requireAuth(AddUIComponent)