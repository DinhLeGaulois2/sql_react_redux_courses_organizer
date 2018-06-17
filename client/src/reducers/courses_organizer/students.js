import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    isList: true,
}

const students = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_STUDENT_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,

            })
        }

        case cst.GET_STUDENT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id === action.payload ? a : null),
                isList: false
            })
        }

        case cst.GET_STUDENTS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                isList: true
            })
        }

        case cst.DELETE_STUDENT_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id !== action.payload ? a : null),
            })
        }
        default:
            return state;
    }
}

export default students