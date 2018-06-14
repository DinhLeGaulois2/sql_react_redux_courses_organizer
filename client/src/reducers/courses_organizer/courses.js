import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    status: "",
}

const courses = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_COURSE: {
            return Object.assign({}, state, {
                status: action.type,
                data: action.payload
            })
        }

        case cst.ADD_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_COURSE_BY_ID: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_COURSE_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.courseId == action.payload ? a : null),
                status: action.type
            })
        }

        case cst.GET_COURSES: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_COURSES_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.SET_COURSE_ONSITE: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.SET_COURSE_ONSITE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.SET_COURSE_ONLINE: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.SET_COURSE_ONLINE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_COURSE: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.id != action.payload ? a : null),
                status: cst.GET_COURSES_SUCCESS
            })
        }

        case cst.DELETE_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: state.data.filter(a => a.courseId != action.payload ? a : null),
                status: cst.GET_COURSES_SUCCESS
            })
        }
    }
    return state;
}

export default courses