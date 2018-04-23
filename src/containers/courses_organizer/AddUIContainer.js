import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/courses_organizer/reservationAction'
import AddUIComponent from '../../components/courses_organizer/AddUIComponent'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddUIContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUIComponent)

export default AddUIContainer

