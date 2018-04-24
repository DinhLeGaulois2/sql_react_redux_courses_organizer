import axios from "axios"

import cst from '../../constants/courses_organizer/cst'

const reservationAction = {
    addCourse: (data) => {
        return dispatch => {
            axios.post("/api/add/course", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_COURSE_SUCCESS,
                        payload: response
                    })
                })
                .catch(err => { console.log("Course Insertion Error: " + err) })
        }
    },

    addInstructorCourse: (data) => {
        return dispatch => {
            axios.post("/api/add/course-instructor", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_INSTRUCTOR_COURSE_SUCCESS
                    })
                })
                .catch(err => { console.log("Instructor Insertion Error: " + err) })
        }
    },

    addOnlineCourse: (data) => {
        return dispatch => {
            axios.post("/api/set/course/online", data)
                .then(response => {
                    dispatch({
                        type: cst.SET_COURSE_ONLINE_SUCCESS
                    })
                })
                .catch(err => { console.log("Online Course Insertion Error: " + err) })
        }
    },

    addOnsiteCourse: (data) => {
        return dispatch => {
            axios.post("/api/set/course/onsite", data)
                .then(response => {
                    dispatch({
                        type: cst.SET_COURSE_ONSITE_SUCCESS
                    })
                })
                .catch(err => { console.log("Onsite Course Insertion Error: " + err) })
        }
    },

    addStudentCourse: (data) => {
        return dispatch => {
            axios.post("/api/add/course-student", data)
                .then(response => {
                    dispatch({
                        type: cst.ADD_STUDENT_COURSE_SUCCESS
                    })
                })
                .catch(err => { console.log("Student Insertion Error: " + err) })
        }
    },

    getAInstructor: (iId) => {
        return dispatch => {
            dispatch({
                type: cst.GET_INSTRUCTOR_BY_ID_SUCCESS,
                payload: iId
            })
        }
    },

    getACourse: (cId) => {
        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        console.log("getACourse, cId: " + cId)
        return dispatch => {
            dispatch({
                type: cst.GET_COURSE_BY_ID_SUCCESS,
                payload: cId
            })
        }
    },

    getAStudent: (sId) => {
        return dispatch => {
            dispatch({
                type: cst.GET_STUDENT_BY_ID_SUCCESS,
                payload: sId
            })
        }
    },

    // getInstructors: () => {
    //     return dispatch => {
    //         axios.get("/api/get/instructors")
    //             .then(response => {
    //                 dispatch({
    //                     type: cst.GET_INSTRUCTORS_SUCCESS,
    //                     payload: response
    //                 })
    //             })
    //             .catch(err => { console.log("Instructors Request Error: " + err) })
    //     }
    // },

    // getCourses: () => {
    //     return dispatch => {
    //         axios.get("/api/get/courses")
    //             .then(response => {
    //                 dispatch({
    //                     type: cst.GET_COURSES_SUCCESS,
    //                     payload: response
    //                 })
    //             })
    //             .catch(err => { console.log("Courses Request Error: " + err) })
    //     }
    // },

    setStatus: (mainStatus, actionStatus) => {
        //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        console.log("mainStatus: " + mainStatus + ", actionStatus: " + actionStatus)
        return dispatch => {
            if (actionStatus.length > 0) {
                if (actionStatus == cst.GET_STUDENTS) {
                    axios.get("/api/get/students")
                        .then(response => {
                            dispatch({
                                type: cst.GET_STUDENTS_SUCCESS,
                                payload: response
                            })
                        })
                        .catch(err => { console.log("Students Request Error: " + err) })
                }
                else if (actionStatus == cst.GET_INSTRUCTORS) {
                    axios.get("/api/get/instructors")
                        .then(response => {
                            dispatch({
                                type: cst.GET_INSTRUCTORS_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { console.log("Instructors Request Error: " + err) })
                }
                else if (actionStatus == cst.GET_COURSES) {
                    axios.get("/api/get/courses")
                        .then(response => {
                            dispatch({
                                type: cst.GET_COURSES_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { console.log("Courses Request Error: " + err) })
                }
            }
            if (mainStatus.length > 0) dispatch({ type: mainStatus })
        }
    }
}

export default reservationAction