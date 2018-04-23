import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddOnsiteCourseComponent = ({ }) => (
    <div>
    </div>)

AddOnsiteCourseComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(''));

AddOnsiteCourseComponent = reduxForm({
    form: '',
    validate,
    onSubmitSuccess: afterSubmit
})(AddOnsiteCourseComponent)

// Decorate with connect to read form values
const selector = ('') // <-- same as form name
AddOnsiteCourseComponent = connect(
    state => {
        return {}
    }
)(AddOnsiteCourseComponent)


AddOnsiteCourseComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddOnsiteCourseComponent)

export default AddOnsiteCourseComponent
