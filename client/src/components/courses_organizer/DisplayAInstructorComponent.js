import React from 'react'
import { connect } from 'react-redux'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'
import actions from "../../actions/courses_organizer/courseAction"

class DisplayAInstructorComponent extends React.Component {   
    render() {
        const { instructor, deleteAnInstructor } = this.props

        return (
            <div>
                <table align="center"><tbody>
                    <tr><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                        <div className="relative">
                            <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Instructor</b></font></h3>
                            <button type="button" className="btnDelete" onClick={e => {
                                e.preventDefault()
                                deleteAnInstructor(instructor.id)
                            }}>x</button>
                        </div>
                        <b><u>Name</u></b>: {instructor.fName} {instructor.lName}<br />
                        {instructor.courses.length === 1 &&
                            <div>
                                <span>
                                    <b><u>Course</u></b>: {instructor.courses[0].title} (Dpt: {instructor.courses[0].department.name}, type: <font color="green"><b>{instructor.isOnsite ? "Onsite" : "Online"}</b></font>))</span><br />
                                <b><u>Number of Students</u></b>: {instructor.studentNum}<br />
                            </div>
                        }
                        {instructor.courses.length > 1 &&
                            <div>
                                <ul>
                                    {instructor.courses.map((e, index) =>
                                        <li key={index}>
                                            <div>
                                                <b><u>Course</u></b>: {e.title} (Dpt: {e.department.name}, type: <font color="green"><b>{e.isOnsite ? "Onsite" : "Online"}</b></font>)<br />
                                                <b><u>Number of Students</u></b>: {instructor.studentNum}<br />
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        }
                    </td></tr>
                </tbody></table>
                <br /><br />
            </div>)
    }
}

const mapStateToProps = (state) => ({
    instructor: state.instructors.data[0],
})

export default connect(mapStateToProps, actions)(requireAuth(DisplayAInstructorComponent))
