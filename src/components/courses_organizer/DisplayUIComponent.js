import React from 'react'
import PropTypes from 'prop-types'

import cst from '../../constants/courses_organizer/cst'

import DisplayAInstructorContainer from '../../containers/courses_organizer/DisplayAInstructorContainer'
import DisplayAStudentContainer from '../../containers/courses_organizer/DisplayAStudentContainer'
import DisplayInstructorsContainer from '../../containers/courses_organizer/DisplayInstructorsContainer'
import DisplayPersonsContainer from '../../containers/courses_organizer/DisplayPersonsContainer'
import DisplayStudentsContainer from '../../containers/courses_organizer/DisplayStudentsContainer'

const DisplayUIComponent = ({ status, menuStatus, onClickGetPassengers, onClickGetBookings }) => (
    <div style={{ 'backgroundColor': 'gray' }}>
        <table align="center" style={{ 'backgroundColor': 'black', 'width': '100%' }}><tbody><tr>
            <td align="center">
                <button type="button" className="btn" onClick={e => {
                    e.preventDefault()
                    onClickGetBookings()
                }}>All Bookings</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn" onClick={e => {
                    e.preventDefault()
                    onClickGetPassengers()
                }}>All Passengers</button>
                <br/>
            </td></tr></tbody></table>
        {menuStatus == cst.MENU_DISPLAY &&
            <div>
                {status === cst.GET_BOOKINGS_SUCCESS &&
                    <DisplayBookingListContainer />
                }
                {status === cst.GET_PASSENGERS_SUCCESS &&
                    <DisplayPassengerListContainer />
                }
            </div>
        }
    </div>
)
DisplayUIComponent.prototype = {
    status: PropTypes.string,
    menuStatus: PropTypes.string,
    onClickGetPassengers: PropTypes.func.isRequired,
    onClickGetBookings: PropTypes.func.isRequired,
}

export default DisplayUIComponent