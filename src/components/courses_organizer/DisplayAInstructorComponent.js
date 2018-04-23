import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    return errors
}

let DisplayAInstructorComponent = ({ }) => (
    <div>
    </div>)

DisplayAInstructorComponent.propTypes = {
}

export default DisplayAInstructorComponent
