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
                .catch(err => { console.log("Course Insertion Error: " + err) })
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
                .catch(err => { console.log("Course Insertion Error: " + err) })
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
                .catch(err => { console.log("Course Insertion Error: " + err) })
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
                .catch(err => { console.log("Course Insertion Error: " + err) })
        }
    },

    showAInstructor: (iId) => {
        return dispatch => {
            axios.get("/api/get/instructor/", iId)
                .then(response => {
                    dispatch({
                        type: cst.GET_INSTRUCTOR_BY_ID_SUCCESS,
                        payload: response
                    })
                })
                .catch(err => { console.log("Course Insertion Error: " + err) })
        }
    },

    showAStudent: (sId) => {
        return dispatch => {
            axios.get("/api/get/student/", sId)
                .then(response => {
                    dispatch({
                        type: cst.GET_STUDENT_BY_ID_SUCCESS,
                        payload: response
                    })
                })
                .catch(err => { console.log("Course Insertion Error: " + err) })
        }
    },

    showInstructors: () => {
        return dispatch => {
            axios.get("/api/get/instructors")
                .then(response => {
                    dispatch({
                        type: cst.GET_INSTRUCTORS_SUCCESS,
                        payload: response
                    })
                })
                .catch(err => { console.log("Course Insertion Error: " + err) })
        }
    },

    showStudents: () => {
        return dispatch => {
            axios.get("/api/get/students")
                .then(response => {
                    dispatch({
                        type: cst.GET_STUDENTS_SUCCESS,
                        payload: response
                    })
                })
                .catch(err => { console.log("Course Insertion Error: " + err) })
        }
    },

    setStatus: (mainStatus, actionStatus) => {
        return dispatch => {
            dispatch({ type: actionStatus })
        }
    }
}

export default reservationAction