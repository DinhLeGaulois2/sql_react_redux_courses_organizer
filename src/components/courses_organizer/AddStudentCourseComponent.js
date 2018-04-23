import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddStudentCourseComponent = ({ }) => (
    <div>
    </div>)

AddStudentCourseComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(''));

    AddStudentCourseComponent = reduxForm({
    form: '',
    validate,
    onSubmitSuccess: afterSubmit
})(AddStudentCourseComponent)

// Decorate with connect to read form values
const selector = ('') // <-- same as form name
AddStudentCourseComponent = connect(
    state => {
        return {  }
    }
)(AddStudentCourseComponent)


AddStudentCourseComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddStudentCourseComponent)

export default AddStudentCourseComponent
