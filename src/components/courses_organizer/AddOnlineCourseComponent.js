import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddOnlineCourseComponent = ({ }) => (
    <div>
    </div>)

AddOnlineCourseComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addOnlineCourseForm'));

AddOnlineCourseComponent = reduxForm({
    form: 'addOnlineCourseForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddOnlineCourseComponent)

// Decorate with connect to read form values
const selector = ('addOnlineCourseForm') // <-- same as form name
AddOnlineCourseComponent = connect(
    state => {
        return {}
    }
)(AddOnlineCourseComponent)


AddOnlineCourseComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddOnlineCourseComponent)

export default AddOnlineCourseComponent
