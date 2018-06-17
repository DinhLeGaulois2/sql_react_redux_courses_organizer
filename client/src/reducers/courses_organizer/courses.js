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
                isList: false
            })
        }

        case cst.GET_COURSES_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                isList: true
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
                isList: true
            })
        }

        case cst.DELETE_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.courseId !== action.payload ? a : null),
                isList: true
            })
        }
        
        default:
          return state;
    }
}

export default courses