import React from 'react'
import { connect } from 'react-redux'

import DisplayCoursesComponent from "../../components/courses_organizer/DisplayCoursesComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapStateToProps = (state) => ({
    data: state.courses.data
})

const mapDispatchToProps = (dispatch) => ({
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayCoursesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayCoursesComponent)

export default DisplayCoursesContainer