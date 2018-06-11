import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

import '../../style.scss'

import cst from '../../constants/courses_organizer/cst'

const validate = values => {
    const errors = {}
    return errors
}

let DisplayCoursesComponent = ({ data, onClickShowACourse, onClickDelete }) => (
    <div>
        <table align="center"><tbody>
            <tr><th align="center"><h3 align="center"><font color="blue"><b>Courses Available</b></font></h3></th></tr>
            {data.map((d, index) =>
                <tr key={index}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                    <div onClick={e => { onClickShowACourse(d.courseId) }} className="relative">
                        <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Course (id: {d.courseId})</b></font></h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            onClickDelete(d.courseId)
                        }}>x</button>
                        <b><u>Title</u></b>: {d.title}<br />
                        <b><u>Department</u></b>: {d.department.name} (administrator: {d.department.administrator})<br />
                        {d.isOnsite &&
                            <b><u>Type</u>: <font color="green">Onsite</font></b>
                        }
                        {!d.isOnsite &&
                            <b><u>Type</u>: <font color="green">Onsite</font></b>
                        }
                    </div>
                </td></tr>
            )}
        </tbody></table>
        <br /><br />
    </div>)

const aCourseShape = {
    courseId: PropTypes.number,
    title: PropTypes.string,
    department: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        administrator: PropTypes.string
    }),
    isOnsite: PropTypes.bool,
    onsiteSchedule: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        location: PropTypes.string,
        days: PropTypes.string,
        time: PropTypes.string
    })),
    instructors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        fName: PropTypes.string,
        lName: PropTypes.string
    })),
    status: PropTypes.string,
    studentNum: PropTypes.number
}

DisplayCoursesComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(aCourseShape)),
    onClickShowACourse: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default DisplayCoursesComponent
