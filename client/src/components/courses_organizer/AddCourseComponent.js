import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import { renderInputField } from '../../common/reduxForm/renderField'
import { connect } from 'react-redux'
import { compose } from 'redux'
import actions from '../../actions/courses_organizer/courseAction'
import requireAuth from '../../components/requireAuth';
import cst from '../../constants/courses_organizer/cst'

import '../../style.scss'

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

class AddCourseComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props.setStatus(cst.ADD_COURSE)
    }

    render() {
        const { handleSubmit, invalid, submitting, reset, addCourse, dpt } = this.props

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
                    }}>Add New Course</div>
                </div>
                <br />
                <form onSubmit={handleSubmit(addCourse)}>
                    <div>
                        <Field name="title" component={renderInputField} placeholder="Course's Title" /><br />
                        <Field name="credits" component={renderInputField} placeholder="Credits" /><br />
                        <label>Department?</label>  &nbsp;
                <Field name="departmentId" component="select">
                            <option></option>
                            {dpt.map((a, index) =>
                                <option key={index} value={a.id}>{a.name}</option>
                            )}
                        </Field>
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

const mapStateToProps = (state) => ({
    dpt: state.departments.data,
})

// Reset the form after submission
const afterSubmit = (result, dispatch) =>
    dispatch(reset('addCourseForm'));

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'addCourseForm',
        validate,
        onSubmitSuccess: afterSubmit
    })
)(requireAuth(AddCourseComponent))
