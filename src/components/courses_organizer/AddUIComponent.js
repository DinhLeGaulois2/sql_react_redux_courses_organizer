import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/courses_organizer/cst'

import AddInstructorContainer from '../../containers/courses_organizer/AddInstructorContainer'
import AddInstructorCourseContainer from '../../containers/courses_organizer/AddInstructorCourseContainer'
import AddStudentContainer from '../../containers/courses_organizer/AddStudentContainer'
import AddStudentCourseContainer from '../../containers/courses_organizer/AddStudentCourseContainer'
import UpdateStudentGradeContainer from '../../containers/courses_organizer/UpdateStudentGradeContainer'

const AddUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{'padding': '10px'}}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_INSTRUCTOR)
            }}>Add Instructor</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_INSTRUCTOR_COURSE)
            }}>Add Instructor-Course</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_STUDENT)
            }}>Add Student</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.ADD_STUDENT_COURSE)
            }}>Add Student-Course</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.UPDATE_STUDENT_GRADE)
            }}>Update Student Grade</button>
            <br/>
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_ADD &&
            <div>
                {status === cst.ADD_INSTRUCTOR &&
                    <AddInstructorContainer />
                }
                {status === cst.ADD_INSTRUCTOR_COURSE &&
                    <AddInstructorCourseContainer />
                }
                {status === cst.ADD_STUDENT &&
                    <AddStudentContainer />
                }
                {status === cst.ADD_STUDENT_COURSE &&
                    <AddStudentCourseContainer />
                }
                {status === cst.UPDATE_STUDENT_GRADE &&
                    <UpdateStudentGradeContainer />
                }
            </div>
        }
    </div>
)

AddUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickChangeStatus: PropTypes.func.isRequired
}

export default AddUIComponent