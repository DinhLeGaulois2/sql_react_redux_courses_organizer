import React from 'react'
import { connect } from 'react-redux'

import DisplayACourseComponent from "../../components/courses_organizer/DisplayACourseComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapStateToProps = (state) => ({
    aCourse: state.courses.data[0],
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete: cId => {dispatch(actions.deleteACourse(cId))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayACourseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayACourseComponent)

export default DisplayACourseContainer