import React from 'react'
import { connect } from 'react-redux'

import DisplayUIComponent from '../../components/courses_organizer/DisplayUIComponent'
import actions from '../../actions/courses_organizer/courseAction'

const mapDispatchToProps = (dispatch) => ({
    onClickChangeStatus: (p1, p2) => { dispatch(actions.setStatus(p1, p2))}
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayUIContainer = connect(
    null,
    mapDispatchToProps
)(DisplayUIComponent)

export default DisplayUIContainer

