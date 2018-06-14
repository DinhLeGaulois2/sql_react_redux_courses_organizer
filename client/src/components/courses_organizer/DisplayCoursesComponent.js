import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions/courses_organizer/courseAction'
import requireAuth from '../../components/requireAuth';

import '../../style.scss'

import cst from '../../constants/courses_organizer/cst'

const validate = values => {
    const errors = {}
    return errors
}

class DisplayCoursesComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data, onClickShowACourse, onClickDelete } = this.props

        return (
    <div>
        <table align="center"><tbody>
            <tr><th align="center"><h3 align="center"><font color="blue"><b>Courses Available</b></font></h3></th></tr>
            {data.map((d, index) =>
                <tr key={index}><td style={{ 'backgroundColor': 'white', 'color': 'black', 'padding': '20px', 'borderRadius': '20px' }}>
                    <div onClick={e => { onClickShowACourse(d.courseId) }} className="relative">
                        <h3 align="center" className="centeredChapterTitle"><font color="blue"><b>Course (id: {d.courseId})</b></font></h3>
                        <button type="button" className="btnDelete" onClick={e => {
                            e.preventDefault()
                            onClickDelete(d.courseId)
                        }}>x</button>
                        <b><u>Title</u></b>: {d.title}<br />
                        <b><u>Department</u></b>: {d.department.name} (administrator: {d.department.administrator})<br />
                        {d.isOnsite &&
                            <b><u>Type</u>: <font color="green">Onsite</font></b>
                        }
                        {!d.isOnsite &&
                            <b><u>Type</u>: <font color="green">Onsite</font></b>
                        }
                    </div>
                </td></tr>
            )}
        </tbody></table>
        <br /><br />
    </div>)
    }
}

export default DisplayCoursesComponent
