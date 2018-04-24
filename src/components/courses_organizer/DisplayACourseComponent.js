import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let DisplayACourseComponent = ({ aCourse }) => (
    <div>
        <table align="center"><tbody>
            <tr><th align="center"><h3><font color="blue"><b>Course (id: {aCourse.courseId})</b></font></h3></th></tr>
            <tr><td>
                <b><u>Title</u></b>: {aCourse.title}<br />
                <b><u>Department</u></b>: {aCourse.department.name} (administrator: {aCourse.department.administrator})<br />
                {aCourse.isOnsite &&
                    <div>
                        <b><u>Type</u>: <font color="green">ONSITE</font></b>
                        <ul>
                            {aCourse.onsiteSchedule.map(e => {
                                <li key={e.id}><b>Location</b>: {e.location}, <b>Day</b>: {e.days}, <b>Time</b>: {e.times}</li>
                            })}
                        </ul>
                    </div>
                }
                {!aCourse.isOnsite &&
                    <b><u>Type</u>: <font color="green">ONLINE</font></b>
                }
                {aCourse.instructors.length == 1 &&
                    <p><b><u>Instructor</u></b>: {aCourse.instructors[0].fName} {aCourse.instructors[0].lName}</p>
                }
                {aCourse.instructors.length > 1 &&
                    <div>
                        <b><u>Instructors</u>:</b>
                        <ul>
                            {aCourse.instructors.map((e, index) => {
                                <li key={e.id}><b><u>Instructor</u></b>: {e.fName} {e.lName}</li>
                            })}
                        </ul>
                    </div>
                }
                <b><u>Number of Students</u></b>: {aCourse.studentNum}<br />
            </td></tr></tbody></table>
    </div>
)


const aCourseShape = {
    courseId: PropTypes.number,
    title: PropTypes.string,
    department: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        administrator: PropTypes.string
    }),
    isOnsite: PropTypes.bool,
    instructors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        fName: PropTypes.string,
        lName: PropTypes.string
    })),
    onsiteSchedule: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        location: PropTypes.string,
        days: PropTypes.string,
        time: PropTypes.string
    })),
    status: PropTypes.string,
    studentNum: PropTypes.number
}

DisplayACourseComponent.propTypes = {
    aCourse: PropTypes.shape(aCourseShape)
}

export default DisplayACourseComponent
