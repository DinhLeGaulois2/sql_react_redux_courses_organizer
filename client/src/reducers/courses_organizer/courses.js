import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    isList: true,
}

const courses = (state = initialStates, action) => {
    switch (action.type) {
        case cst.GET_COURSE_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.courseId === action.payload ? a : null),
            })
        }

        case cst.GET_COURSES_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
            })
        }

        case cst.SET_COURSE_ONLINE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
            })
        }

        case cst.DELETE_COURSE: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id !== action.payload ? a : null),
            })
        }

        case cst.DELETE_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.courseId !== action.payload ? a : null),
            })
        }
        
        default:
          return state;
    }
}

export default courses