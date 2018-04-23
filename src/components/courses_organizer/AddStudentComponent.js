import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddStudentComponent = ({ }) => (
    <div>
    </div>)

AddStudentComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addCourseForm'));

    AddStudentComponent= reduxForm({
    form: 'addCourseForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddStudentComponent)

// Decorate with connect to read form values
const selector = ('addCourseForm') // <-- same as form name
AddStudentComponent = connect(
    state => {
        return {  }
    }
)(AddStudentComponent)


AddStudentComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddStudentComponent)

export default AddStudentComponent
