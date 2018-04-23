import React from 'react'
import { connect } from 'react-redux'

import DisplayUIComponent from '../../components/courses_organizer/DisplayUIComponent'
import actions from '../../actions/courses_organizer/courseAction'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

// You have to connect() to any reducers that you wish to connect to yourself
const DisplayUIContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayUIComponent)

export default DisplayUIContainer

