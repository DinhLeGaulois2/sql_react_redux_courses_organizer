import React from 'react'
import { connect } from 'react-redux'

import DisplayInstructorsComponent from "../../components/courses_organizer/DisplayInstructorsComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapStateToProps = (state) => ({
    data: state.courses.data,
    status: state.courses.status
})

const mapDispatchToProps = (dispatch) => ({
    onClickShowAnInstructor: iId => {dispatch(actions.getAInstructor(iId))},
    onClickDelete: iId => {dispatch(actions.deleteAInstructor(iId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayInstructorsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayInstructorsComponent)

export default DisplayInstructorsContainer