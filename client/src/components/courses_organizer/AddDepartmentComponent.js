import React from 'react'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import { renderInputField, renderTextareaField } from '../../common/reduxForm/renderField'
import { connect } from 'react-redux'
import { compose } from 'redux'
import actions from '../../actions/courses_organizer/courseAction'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'

const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined

const validate = values => {
    const errors = {}
    if (!values.name)
        errors.name = "*"
    if (!values.budget)
        errors.budget = "*"
    if (!values.administrator)
        errors.administrator = "*"
    return errors
}

class AddDepartmentComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { handleSubmit, invalid, submitting, reset } = this.props

        return (
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
                <form onSubmit={handleSubmit(this.props.onClickAddDepartment)}>
                    <div>
                        <Field name="name" component={renderInputField} placeholder="Name" /><br />
                        <Field name="budget" component={renderInputField} placeholder="Budget" validate={number} /><br />
                        <Field name="administrator" component={renderInputField} placeholder="administrator" /><br />
                    </div>
                    <br /> <hr />
                    <p align="center"><button type="submit" className="btn" disabled={invalid || submitting}>Submit</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn" disabled={submitting} onClick={reset}>Clear Values</button>
                    </p><br />
                </form>
            </div>
        )
    }
}

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addDptForm'));

export default compose(
    connect(null, actions),
    reduxForm({
        form: 'addDptForm',
        validate,
        onSubmitSuccess: afterSubmit
    })
)(requireAuth(AddDepartmentComponent))
