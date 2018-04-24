import React from 'react'
import { connect } from 'react-redux'

import AddDepartmentComponent from "../../components/courses_organizer/AddDepartmentComponent"

import cst from "../../constants/courses_organizer/cst"

import actions from "../../actions/courses_organizer/courseAction"

const mapDispatchToProps = (dispatch) => ({
    onClickAddDepartment: (data) => { dispatch(actions.addDeparment(data)) }
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddDepartmentContainer = connect(
    null,
    mapDispatchToProps
)(AddDepartmentComponent)

export default AddDepartmentContainer