import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/airline_reservation/cst'

import AddCourseContainer from '../../containers/courses_organizer/AddCourseContainer'
import AddInstructorCourseContainer from '../../containers/courses_organizer/AddInstructorCourseContainer'
import AddOnlineCourseContainer from '../../containers/courses_organizer/AddOnlineCourseContainer'
import AddOnsiteCourseContainer from '../../containers/courses_organizer/AddOnsiteCourseContainer'
import AddPersonContainer from '../../containers/courses_organizer/AddPersonContainer'
import AddStudentCourseContainer from '../../containers/courses_organizer/AddStudentCourseContainer'

const AddUIComponent = ({ status, menuStatus, onClickAddBooking, onClickAddPassenger }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr><td align="center">
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickAddBooking("", cst.ADD_BOOKING)
            }}>Add Booking</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn" onClick={e => {
                e.preventDefault()
                onClickAddPassenger("", cst.ADD_PASSENGER)
            }}>Add Passenger</button>
            <br/>
        </td></tr></tbody></table>
        {menuStatus == cst.MENU_ADD &&
            <div>
                {status === cst.ADD_BOOKING &&
                    <AddBookingContainer />
                }
                {status === cst.ADD_PASSENGER &&
                    <AddPassengerContainer />
                }
            </div>
        }
    </div>
)

AddUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickAddPassenger: PropTypes.func.isRequired,
    onClickAddBooking: PropTypes.func.isRequired
}

export default AddUIComponent