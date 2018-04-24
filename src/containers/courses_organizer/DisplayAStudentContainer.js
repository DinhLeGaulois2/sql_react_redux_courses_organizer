import React from 'react'
import { connect } from 'react-redux'

import DisplayAStudentComponent from "../../components/courses_organizer/DisplayAStudentComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapStateToProps = (state) => ({
    student: state.courses.data[0]
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayAStudentContainer = connect(
    mapStateToProps
)(DisplayAStudentComponent)

export default DisplayAStudentContainer