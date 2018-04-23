import axios from "axios"

import cst from '../../constants/courseAction/cst'

const reservationAction = {
    JJJJJ: (data) => {
        return (dispatch, getState) => {
            let st = getState()
            let anArray = {};
        }
    },

    setStatus: (mainStatus, actionStatus) => {
        return dispatch => {
            if (mainStatus.length > 0) dispatch({ type: mainStatus })
            if (actionStatus.length > 0) {
                if (actionStatus == cst.ADD_BOOKING) {
                    axios.get("/api/get/info4Booking")
                        .then(data => {
                            let anArray = [];
                            anArray.push(data.data)
                            dispatch({
                                type: cst.ADD_BOOKING,
                                payload: anArray
                            })
                        })
                }
                else dispatch({ type: actionStatus })
            }
        }
    }
}

export default reservationAction