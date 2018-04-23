import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let DisplayCoursesComponent = ({ }) => (
    <div>
    </div>)

DisplayCoursesComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
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
        instructors: arrayOf(PropTypes.shape({
            id: PropTypes.number,
            fName: PropTypes.string,
            lName: PropTypes.string
        })),
        studentNum: PropTypes.number
    })),
    onClickShowACourse: PropTypes.func.isRequired
}

export default DisplayCoursesComponent
