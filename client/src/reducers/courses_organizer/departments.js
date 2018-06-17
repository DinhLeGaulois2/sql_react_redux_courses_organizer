import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    isList: true
}

const departments = (state = initialStates, action) => {
    switch (action.type) {
        case cst.GET_DEPARTMENT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload
            })
        }

        case cst.GET_DEPARTMENTS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                isList: true
            })
        }

        case cst.DELETE_DPT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
            })
        }
        default:
            return state;
    }
}

export default departments