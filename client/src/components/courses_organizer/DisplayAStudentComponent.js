import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

import '../../style.scss'

class DisplayAStudentComponent  extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { student, onClickDelete } = this.props

        return (
    <div>
        <table align="center"><tbody>
            <tr><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                <div className="relative">
                    <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Student</b></font></h3>
                    <button type="button" className="btnDelete" onClick={e => {
                        e.preventDefault()
                        onClickDelete(student.id)
                    }}>x</button>
                </div>
                <b><u>Name</u></b>: {student.fName} {student.lName}<br />
                <ul>
                    {student.courses.map(aCourse =>
                        <li key={aCourse.id}>
                            <b><u>Course</u></b>: {aCourse.title}<br />
                            <b><u>Department</u></b>: {aCourse.department.name} (administrator: {aCourse.department.administrator})<br />
                            {aCourse.isOnsite &&
                                <div>
                                    <b><u>Type</u>: <font color="green">Onsite</font></b>
                                    <ul>
                                        {aCourse.onsiteSchedule.map(e => {
                                            <li key={e.id}><b>Location</b>: {e.location}, <b>Day</b>: {e.days}, <b>Time</b>: {e.times}</li>
                                        })}
                                    </ul>
                                </div>
                            }
                            {!aCourse.isOnsite &&
                                <p><b><u>Type</u>: <font color="green">Online</font></b></p>
                            }
                            <b><u>Number of Students</u></b>: {aCourse.studentNum}<br />
                            <br />
                        </li>
                    )}
                </ul>
            </td></tr>
        </tbody></table>
        <br /><br />
    </div>)
    }
}

export default DisplayAStudentComponent