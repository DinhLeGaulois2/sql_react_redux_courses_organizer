import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let DisplayInstructorsComponent = ({ data, status, onClickShowAnInstructor }) => (
    <div>
        <table align="center"><tbody>
            <tr><th align="center"><h3 align="center"><font color="blue"><b>Instructors</b></font></h3></th></tr>
            {data.map((d, index) =>
                <tr key={index}><td>
                    <div onClick={e => { onClickShowAnInstructor(d.id) }}>
                        <h3><font color="blue"><b>Instructor (id: {d.id})</b></font></h3>
                        <b><u>Name</u></b>: {d.fName} {d.lName}<br />
                        {d.courses.length == 1 &&
                            <span><b><u>Course</u></b>: {d.courses[0].title} (Dpt: {d.courses[0].department.name}, type: {d.courses[0].isOnsite ? "Onsite" : "Online"})</span>
                        }
                        {d.courses.length > 1 &&
                            <div>
                                <ul>
                                    {d.courses.map((e, index) =>
                                        <li key={index}><b><u>Course</u></b>: {e.title} (Dpt: {e.department.name}, type: {e.isOnsite ? "Onsite" : "Online"})</li>
                                    )}
                                </ul>
                            </div>
                        }
                    </div>
                </td></tr>
            )}
        </tbody></table>
    </div>)

const anInstructorShape = {
    id: PropTypes.number,
    fName: PropTypes.string,
    lName: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.shape({
        courseId: PropTypes.number,
        title: PropTypes.string,
        department: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            administrator: PropTypes.string
        }),
    })),
    isOnsite: PropTypes.bool,
    onsiteSchedule: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        location: PropTypes.string,
        days: PropTypes.string,
        time: PropTypes.string
    })),
    studentNum: PropTypes.number
}


DisplayInstructorsComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(anInstructorShape)),
    status: PropTypes.string,
    onClickShowAnInstructor: PropTypes.func.isRequired
}

export default DisplayInstructorsComponent
