import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/courses_organizer/courseAction'
import AddUIComponent from '../../components/courses_organizer/AddUIComponent'

const mapDispatchToProps = (dispatch) => ({
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddUIContainer = connect(
    null,
    mapDispatchToProps
)(AddUIComponent)

export default AddUIContainer

