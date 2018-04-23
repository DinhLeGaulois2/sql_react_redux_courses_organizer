import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddCourseComponent = ({ }) => (
    <div>
    </div>)

AddCourseComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(''));

    AddCourseComponent= reduxForm({
    form: '',
    validate,
    onSubmitSuccess: afterSubmit
})(AddCourseComponent)

// Decorate with connect to read form values
const selector = ('') // <-- same as form name
AddCourseComponent = connect(
    state => {
        return {  }
    }
)(AddCourseComponent)


AddCourseComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddCourseComponent)

export default AddCourseComponent
