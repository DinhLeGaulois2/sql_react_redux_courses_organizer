import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import PropTypes from 'prop-types'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'

const validate = values => {
    const errors = {}
    if (!values.title)
        errors.title = "*"
    if (!values.credits)
        errors.credits = "*"
    if (!values.departmentId)
        errors.departmentId = "*"
    return errors
}

let AddCourseComponent = ({ handleSubmit, invalid, submitting, reset, dpt, onClickAddCourse }) => (
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
            }}>Add New Course</div>
        </div>
        <br />
        <form onSubmit={handleSubmit(onClickAddCourse)}>
            <div>
                <Field name="title" component={renderInputField} placeholder="Course's Title" /><br />
                <Field name="credits" component={renderInputField} placeholder="Credits" /><br />
                <label>Department?</label>  &nbsp;
                <Field name="departmentId" component="select">
                    <option></option>
                    {dpt.map(a =>
                        <option key={a.id} value={a.id}>{a.name} (administrator: {a.administrator}) </option>
                    )}
                </Field>
            </div>
            <br /> <hr />
            <p align="center"><button type="submit" className="btnSubmit" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btnSubmit" disabled={submitting} onClick={reset}>Clear Values</button>
            </p><br />
        </form>
    </div>)

AddCourseComponent.propTypes = {
    dpt: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        administrator: PropTypes.string
    })),
    onClickAddCourse: PropTypes.func.isRequired
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addCourseForm'));

AddCourseComponent = reduxForm({
    form: 'addCourseForm',
    validate,
    onSubmitSuccess: afterSubmit
})(AddCourseComponent)

export default AddCourseComponent
