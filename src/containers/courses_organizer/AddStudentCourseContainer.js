import React from 'react'
import { connect } from 'react-redux'

import AddStudentCourseComponent from "../../components/courses_organizer/AddStudentCourseComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapStateToProps = (state) => ({
    data: state.courses.data
})

const mapDispatchToProps = (dispatch) => ({
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddStudentCourseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStudentCourseComponent)

export default AddStudentCourseContainer