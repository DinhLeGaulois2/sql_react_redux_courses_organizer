import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddInstructorCourseComponent = ({ }) => (
    <div>
    </div>)

AddInstructorCourseComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(''));

    AddInstructorCourseComponent = reduxForm({
    form: '',
    validate,
    onSubmitSuccess: afterSubmit
})(AddInstructorCourseComponent)

// Decorate with connect to read form values
const selector = ('') // <-- same as form name
AddInstructorCourseComponent = connect(
    state => {
        return {  }
    }
)(AddInstructorCourseComponent)


AddInstructorCourseComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddInstructorCourseComponent)

export default AddInstructorCourseComponent
