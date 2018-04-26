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
                .catch(err => { alert("Course Insertion Error: " + err) })
        }
    },

    addDeparment: (data) => {
        return dispatch => {
            var result = {}
            result.name = data.name
            result.budget = parseInt(data.budget)
            result.administrator = data.administrator
            result.startDate = new Date()
            axios.post("/api/add/department", result)
            .then(response => {
                dispatch({
                    type: cst.ADD_DEPARTMENT_SUCCESS,
                    payload: response
                })
            })
            .catch(err => { alert("Department Insertion Error: " + err) })
        }
    },

    addInstructor: (data) => {
        return dispatch => {
            let obj = {}
            obj.lastName = data.lastName,
            obj.firstName = data.firstName,
            obj.type = "student",
            obj.hireDate = new Date(),
            obj.enrollmentDate = new Date()
            axios.post("/api/add/instructor", obj)
                .then(response => {
                    dispatch({
                        type: cst.ADD_INSTRUCTOR_SUCCESS,
                        payload: response
                    })
                })
                .catch(err => { alert("Instructor Insertion Error: " + err) })
        }
    },

    addStudent: (data) => {
        return dispatch => {
            let obj = {}
            obj.lastName = data.lastName,
            obj.firstName = data.firstName,
            obj.type = "student",
            obj.hireDate = new Date(),
            obj.enrollmentDate = new Date()
            axios.post("/api/add/student", obj)
                .then(response => {
                    dispatch({
                        type: cst.ADD_STUDENT_SUCCESS,
                        payload: response
                    })
                })
                .catch(err => { alert("Student Insertion Error: " + err) })
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
                .catch(err => { alert("Instructor Insertion Error: " + err) })
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
                .catch(err => { alert("Online Course Insertion Error: " + err) })
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
                .catch(err => { alert("Onsite Course Insertion Error: " + err) })
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
                .catch(err => { alert("Student Insertion Error: " + err) })
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

    deleteAStudent: (sId) => {
        return dispatch => {
            axios.delete("/api/delete/student/" + sId)
                .then(response => {
                    axios.get("/api/get/students")
                        .then(response => {
                            dispatch({
                                type: cst.GET_STUDENTS_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Students Request Error: " + err) })
                }).catch(err => alert(err))
        }
    },

    deleteAInstructor: (iId) => {
        return dispatch => {
            axios.delete("/api/delete/instructor/" + iId)
                .then(response => {
                    axios.get("/api/get/instructors")
                        .then(response => {
                            dispatch({
                                type: cst.GET_INSTRUCTORS_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Instructors Request Error: " + err) })
                }).catch(err => alert(err))
        }
    },

    deleteACourse: (cId) => {
        return dispatch => {
            axios.delete("/api/delete/course/" + cId)
                .then(response => {
                    axios.get("/api/get/courses")
                        .then(response => {
                            dispatch({
                                type: cst.GET_COURSES_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Courses Request Error: " + err) })
                }).catch(err => alert(err))
        }
    },

    setStatus: (mainStatus, actionStatus) => {
        return dispatch => {
            if (actionStatus.length > 0) {
                if (actionStatus == cst.GET_STUDENTS) {
                    axios.get("/api/get/students")
                        .then(response => {
                            dispatch({
                                type: cst.GET_STUDENTS_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Students Request Error: " + err) })
                }
                else if (actionStatus == cst.GET_INSTRUCTORS) {
                    axios.get("/api/get/instructors")
                        .then(response => {
                            dispatch({
                                type: cst.GET_INSTRUCTORS_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Instructors Request Error: " + err) })
                }
                else if (actionStatus == cst.GET_COURSES) {
                    axios.get("/api/get/courses")
                        .then(response => {
                            dispatch({
                                type: cst.GET_COURSES_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Courses Request Error: " + err) })
                }
                else if (actionStatus == cst.ADD_COURSE) {
                    axios.get("/api/get/departments")
                        .then(response => {
                            let obj = []
                            for (let i = 0; i < response.data.length; i++) {
                                obj.push({
                                    id: response.data[i].id,
                                    name: response.data[i].name,
                                    administrator: response.data[i].administrator
                                })
                            }
                            dispatch({
                                type: actionStatus,
                                payload: obj
                            })
                        }
                        ).catch(err => alert(err))
                }
                else if (actionStatus == cst.ADD_INSTRUCTOR) {
                    dispatch({
                        type: actionStatus
                    })
                }
                else if (actionStatus == cst.ADD_STUDENT) {
                    dispatch({
                        type: actionStatus
                    })
                }
                else if (actionStatus == cst.ADD_DEPARTMENT) {
                    dispatch({
                        type: actionStatus
                    })
                }
            }
            if (mainStatus.length > 0) dispatch({ type: mainStatus })
        }
    }
}

export default reservationAction