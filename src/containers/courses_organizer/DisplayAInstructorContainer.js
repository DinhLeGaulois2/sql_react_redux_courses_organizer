import React from 'react'
import { connect } from 'react-redux'

import DisplayAInstructorComponent from "../../components/courses_organizer/DisplayAInstructorComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapStateToProps = (state) => ({
    instructor: state.courses.data[0]
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayAInstructorContainer = connect(
    mapStateToProps
)(DisplayAInstructorComponent)

export default DisplayAInstructorContainer