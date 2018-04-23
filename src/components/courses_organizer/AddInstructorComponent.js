import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddInstructorComponent = ({ }) => (
    <div>
    </div>)

AddInstructorComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addCourseForm'));

    AddInstructorComponent= reduxForm({
    form: 'addCourseForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddInstructorComponent)

// Decorate with connect to read form values
const selector = ('addCourseForm') // <-- same as form name
AddInstructorComponent = connect(
    state => {
        return {  }
    }
)(AddInstructorComponent)


AddInstructorComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddInstructorComponent)

export default AddInstructorComponent
