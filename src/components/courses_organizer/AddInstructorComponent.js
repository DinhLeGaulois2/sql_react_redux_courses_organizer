import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    if (!values.lastName)
        errors.lastName = "*"
    if (!values.firstName)
        errors.firstName = "*"
    return errors
}

let AddInstructorComponent = ({ handleSubmit, invalid, submitting, reset, onClickAddInstructor }) => (
    <div>
        <div className="container" style={{ 'backgroundColor': 'white' }}>
            <div align="center" className="mainTitle" style={{
                'backgroundColor': 'black',
                'color': 'cyan',
                'width': '100%',
                'borderRadius': "30px",
                'padding': '10px',
                'fontSize': '300%',
                'fontWeight': 'bold',
                'textAlign': 'center',
                'margin': '20px 0px'
            }}>Add New Department</div>
        </div>
        <br />
        <form onSubmit={handleSubmit(onClickAddInstructor)}>
            <div>
                <Field name="firstName" component={renderInputField} placeholder="First Name" /><br />
                <Field name="lastName" component={renderInputField} placeholder="Last Name" /><br />
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>)

AddInstructorComponent.propTypes = {
    onClickAddInstructor: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addInstructorForm'));

AddInstructorComponent = reduxForm({
    form: 'addInstructorForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddInstructorComponent)

export default AddInstructorComponent
