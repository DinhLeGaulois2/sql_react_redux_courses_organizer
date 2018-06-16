import React from 'react'
import { connect } from 'react-redux'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'
import actions from "../../actions/courses_organizer/courseAction"
import cst from '../../constants/courses_organizer/cst'

class DisplayStudentsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.props.setStatus(cst.GET_STUDENTS)
    }

    showAStudent(id){
        this.props.getAStudent(id)
        this.props.history.push('mainMenu/display/a_student')
    }
    
    render() {
        const { data, getAStudent, deleteAStudent } = this.props

        return (
            <div>
                <table align="center"><tbody>
                    <tr><th align="center"><h3 align="center"><font color="blue"><b>Students</b></font></h3></th></tr>
                    {data.map((d, index) =>
                        <tr key={index}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                            <div onClick={e => { this.showAStudent(d.id, getAStudent) }} className="relative">
                                <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Student (id: {d.id})</b></font></h3>
                                <button type="button" className="btnDelete" onClick={e => {
                                    e.preventDefault()
                                    deleteAStudent(d.id)
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
                <br /><br />
            </div>)
    }
}

const mapStateToProps = (state) => ({
    data: state.students.data,
    isList: state.students.isList
})

export default connect(mapStateToProps, actions)(requireAuth(DisplayStudentsComponent))
