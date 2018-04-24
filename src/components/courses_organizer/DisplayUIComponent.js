import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/courses_organizer/cst'

import DisplayAStudentContainer from '../../containers/courses_organizer/DisplayAStudentContainer'
import DisplayAInstructorContainer from '../../containers/courses_organizer/DisplayAInstructorContainer'
import DisplayACourseContainer from '../../containers/courses_organizer/DisplayACourseContainer'

import DisplayCoursesContainer from '../../containers/courses_organizer/DisplayCoursesContainer'
import DisplayInstructorsContainer from '../../containers/courses_organizer/DisplayInstructorsContainer'
import DisplayStudentsContainer from '../../containers/courses_organizer/DisplayStudentsContainer'


const DisplayUIComponent = ({ status, menuStatus, onClickChangeStatus }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center" style={{ 'padding': '10px' }}>
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.GET_COURSES)
            }}>Show Courses</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.GET_INSTRUCTORS)
            }}>Show Instructors</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickChangeStatus("", cst.GET_STUDENTS)
            }}>Show Students</button>
            <br />
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_DISPLAY &&
            <div>
                {status === cst.GET_STUDENT_BY_ID_SUCCESS &&
                    <DisplayAStudentContainer />
                }
                {status === cst.GET_INSTRUCTOR_BY_ID_SUCCESS &&
                    <DisplayAInstructorContainer />
                }
                {status === cst.GET_COURSE_BY_ID_SUCCESS &&
                    <DisplayACourseContainer />
                }

                {status === cst.GET_COURSES_SUCCESS &&
                    <DisplayCoursesContainer />
                }
                {status === cst.GET_INSTRUCTORS_SUCCESS &&
                    <DisplayInstructorsContainer />
                }
                {status === cst.GET_STUDENTS_SUCCESS &&
                    <DisplayStudentsContainer />
                }
            </div>
        }
    </div>
)
DisplayUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickChangeStatus: PropTypes.func.isRequired,
}

export default DisplayUIComponent