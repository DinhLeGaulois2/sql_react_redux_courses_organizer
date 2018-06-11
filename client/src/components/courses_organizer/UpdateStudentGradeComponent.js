import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let UpdateStudentGradeComponent = ({ }) => (
    <div>
    </div>)

UpdateStudentGradeComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(''));

UpdateStudentGradeComponent = reduxForm({
    form: '',
    validate,
    onSubmitSuccess: afterSubmit
})(UpdateStudentGradeComponent)

// Decorate with connect to read form values
const selector = ('') // <-- same as form name
UpdateStudentGradeComponent = connect(
    state => {
        return {}
    }
)(UpdateStudentGradeComponent)


UpdateStudentGradeComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(UpdateStudentGradeComponent)

export default UpdateStudentGradeComponent
