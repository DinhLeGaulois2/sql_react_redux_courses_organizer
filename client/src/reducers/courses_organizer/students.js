import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    status: "",
}

const students = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_STUDENT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.ADD_STUDENT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.ADD_STUDENT_COURSE: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.ADD_STUDENT_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_STUDENT_BY_ID: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_STUDENT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id === action.payload ? a : null),
                status: action.type
            })
        }

        case cst.GET_STUDENTS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_STUDENTS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.UPDATE_STUDENT_GRADE: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.UPDATE_STUDENT_GRADE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_STUDENT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.DELETE_STUDENT_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id !== action.payload ? a : null),
                status: cst.GET_STUDENTS_SUCCESS
            })
        }
        default:
            return state;
    }
}

export default students