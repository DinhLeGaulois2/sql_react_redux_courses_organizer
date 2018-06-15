import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    status: "",
}

const departments = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_DEPARTMENT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.ADD_DEPARTMENT_SUCCESS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_DEPARTMENT_BY_ID: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_DEPARTMENT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_DEPARTMENTS: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.GET_DEPARTMENTS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_DPT: {
            return Object.assign({}, state, {
                status: action.type
            })
        }

        case cst.DELETE_DPT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        default:
            return state;
    }
}

export default departments