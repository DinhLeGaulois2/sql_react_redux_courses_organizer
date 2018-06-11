import React from 'react'
import { connect } from 'react-redux'

import AddCourseComponent from "../../components/courses_organizer/AddCourseComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapStateToProps = (state) => ({
    dpt: state.courses.data,
})

const mapDispatchToProps = (dispatch) => ({
    onClickAddCourse: (data) => { dispatch(actions.addCourse(data)) }
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddCourseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCourseComponent)

export default AddCourseContainer