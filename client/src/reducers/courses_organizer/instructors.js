import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    isList: true,
}

const instructors = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_INSTRUCTOR_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                isList: false
            })
        }

        case cst.GET_INSTRUCTOR_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id === action.payload ? a : null),
                isList: false
            })
        }

        case cst.GET_INSTRUCTORS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                isList: true
            })
        }

        case cst.DELETE_INSTRUCTOR_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id !== action.payload ? a : null),
            })
        }
        default:
            return state;
    }
}

export default instructors