import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let AddPersonComponent = ({ }) => (
    <div>
    </div>)

AddPersonComponent.propTypes = {
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset(''));

AddPersonComponent = reduxForm({
    form: '',
    validate,
    onSubmitSuccess: afterSubmit
})(AddPersonComponent)

// Decorate with connect to read form values
const selector = ('') // <-- same as form name
AddPersonComponent = connect(
    state => {
        return {}
    }
)(AddPersonComponent)


AddPersonComponent = connect(
    state => ({
        initialValues: {
        }
    })
)(AddPersonComponent)

export default AddPersonComponent
