import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    status: "",
}

const instructors = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_INSTRUCTOR: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.ADD_INSTRUCTOR_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.ADD_INSTRUCTOR_COURSE: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.ADD_INSTRUCTOR_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_INSTRUCTOR_BY_ID: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_INSTRUCTOR_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id === action.payload ? a : null),
                status: action.type
            })
        }

        case cst.GET_INSTRUCTORS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_INSTRUCTORS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_INSTRUCTOR: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.DELETE_INSTRUCTOR_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id !== action.payload ? a : null),
                status: cst.GET_INSTRUCTORS_SUCCESS
            })
        }
        default:
            return state;
    }
}

export default instructors