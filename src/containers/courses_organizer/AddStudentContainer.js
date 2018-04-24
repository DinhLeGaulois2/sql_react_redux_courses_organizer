import React from 'react'
import { connect } from 'react-redux'

import AddStudentComponent from "../../components/courses_organizer/AddStudentComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapDispatchToProps = (dispatch) => ({
    onClickAddStudent: (data) => {dispatch(actions.addStudent(data))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddStudentContainer = connect(
    null,
    mapDispatchToProps
)(AddStudentComponent)

export default AddStudentContainer