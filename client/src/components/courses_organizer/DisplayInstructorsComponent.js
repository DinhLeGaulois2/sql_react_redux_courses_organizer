import React from 'react'
import { connect } from 'react-redux'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'
import actions from "../../actions/courses_organizer/courseAction"
import cst from '../../constants/courses_organizer/cst'

import DisplayAInstructorComponent from '../../components/courses_organizer/DisplayAInstructorComponent'

class DisplayInstructorsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props.setStatus(cst.GET_INSTRUCTORS)
    }

    showAnInstructor = (id) => {
        this.props.getAnInstructor(id)
    }
    
    render() {
        const { data, deleteAnInstructor, isList } = this.props


        return (
            <div>
                {isList &&
                    <table align="center"><tbody>
                        <tr><th align="center"><h3 align="center"><font color="blue"><b>Instructors</b></font></h3></th></tr>
                        {data.map((d, index) =>
                            <tr key={index}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                                <div onClick={e => { this.showAnInstructor(d.id) }} className="relative">
                                    <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Instructor (id: {d.id})</b></font></h3>
                                    <button type="button" className="btnDelete" onClick={e => {
                                        e.preventDefault()
                                        deleteAnInstructor(d.id)
                                    }}>x</button>
                                    <b><u>Name</u></b>: {d.fName} {d.lName}<br />
                                    {d.courses.length === 1 &&
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
                }
                {!isList &&
                    <DisplayAInstructorComponent />
                }
                <br /><br />
            </div>)
    }
}

const mapStateToProps = (state) => ({
    data: state.instructors.data,
    isList: state.instructors.isList
})

export default connect(mapStateToProps, actions)(requireAuth(DisplayInstructorsComponent))
