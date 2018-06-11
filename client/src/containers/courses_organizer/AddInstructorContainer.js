import React from 'react'
import { connect } from 'react-redux'

import AddInstructorComponent from "../../components/courses_organizer/AddInstructorComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapDispatchToProps = (dispatch) => ({
    onClickAddInstructor: (data) => { dispatch(actions.addInstructor(data)) }
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddInstructorContainer = connect(
    null,
    mapDispatchToProps
)(AddInstructorComponent)

export default AddInstructorContainer