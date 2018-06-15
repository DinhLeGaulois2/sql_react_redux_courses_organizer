import React from 'react'
import { connect } from 'react-redux'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'
import actions from "../../actions/courses_organizer/courseAction"

class DisplayACourseComponent extends React.Component {
    render() {
        const { aCourse, deleteACourse } = this.props

        return (
            <div>
                <table align="center"><tbody>
                    <tr><th align="center"><h3 align="center"><font color="blue"><b>Course (id: {aCourse.courseId})</b></font></h3></th></tr>
                    <tr><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '5px' }}>
                        <div className="relative">
                            <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Course</b></font></h3>
                            <button type="button" className="btnDelete" onClick={e => {
                                e.preventDefault()
                                deleteACourse(aCourse.courseId)
                            }}>x</button>
                        </div>
                        <b><u>Title</u></b>: {aCourse.title}<br />
                        <b><u>Department</u></b>: {aCourse.department.name} (administrator: {aCourse.department.administrator})<br />
                        {aCourse.isOnsite &&
                            <div>
                                <b><u>Type</u>: <font color="green">Onsite</font></b>
                                <ul>
                                    {aCourse.onsiteSchedule.map(e => {
                                        <li key={e.id}><b>Location</b>: {e.location}, <b>Day</b>: {e.days}, <b>Time</b>: {e.times}</li>
                                    })}
                                </ul>
                            </div>
                        }
                        {!aCourse.isOnsite &&
                            <p><b><u>Type</u>: <font color="green">Online</font></b></p>
                        }
                        {aCourse.instructors.length == 1 &&
                            <p><b><u>Instructor</u></b>: {aCourse.instructors[0].fName} {aCourse.instructors[0].lName}</p>
                        }
                        {aCourse.instructors.length > 1 &&
                            <div>
                                <b><u>Instructors</u>:</b>
                                <ul>
                                    {aCourse.instructors.map((e, index) => {
                                        <li key={e.id}><b><u>Instructor</u></b>: {e.fName} {e.lName}</li>
                                    })}
                                </ul>
                            </div>
                        }
                        <b><u>Number of Students</u></b>: {aCourse.studentNum}<br />
                        <br /><br />
                    </td></tr></tbody></table>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    aCourse: state.courses.data[0],
})

export default connect(mapStateToProps, actions)(requireAuth(DisplayACourseComponent))
