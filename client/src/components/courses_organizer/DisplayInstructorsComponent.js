import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/courses_organizer/reservationAction'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'

const validate = values => {
    const errors = {}
    return errors
}

class DisplayInstructorsComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data, status, onClickShowAnInstructor, onClickDelete } = this.props

        return (
    <div>
        <table align="center"><tbody>
            <tr><th align="center"><h3 align="center"><font color="blue"><b>Instructors</b></font></h3></th></tr>
            {data.map((d, index) =>
                <tr key={index}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                    <div onClick={e => { onClickShowAnInstructor(d.id) }} className="relative">
                        <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Instructor (id: {d.id})</b></font></h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            onClickDelete(d.id)
                        }}>x</button>
                        <b><u>Name</u></b>: {d.fName} {d.lName}<br />
                        {d.courses.length == 1 &&
                            <span><b><u>Course</u></b>: {d.courses[0].title} (Dpt: {d.courses[0].department.name}, type: {d.courses[0].isOnsite ? "Onsite" : "Online"})</span>
                        }
                        {d.courses.length > 1 &&
                            <div>
                                <ul>
                                    {d.courses.map((e, index) =>
                                        <li key={index}><b><u>Course</u></b>: {e.title} (Dpt: {e.department.name}, type: {e.isOnsite ? "Onsite" : "Online"})</li>
                                    )}
                                </ul>
                            </div>
                        }
                    </div>
                </td></tr>
            )}
        </tbody></table>
        <br /><br />
    </div>)
    }
}

export default DisplayInstructorsComponent
