import axios from "axios"

import cst from '../../constants/courses_organizer/cst'

const reservationAction = {
    addCourse: (data) => {
        return dispatch => {
            axios.post("http://localhost:3090/api/add/course", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            result.budget = parseInt(data.budget, 10)
            result.administrator = data.administrator
            result.startDate = new Date()
            axios.post("http://localhost:3090/api/add/department", result, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            obj.lastName = data.lastName
            obj.firstName = data.firstName
            obj.type = "student"
            obj.hireDate = new Date()
            obj.enrollmentDate = new Date()
            axios.post("http://localhost:3090/api/add/instructor", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            obj.lastName = data.lastName
            obj.firstName = data.firstName
            obj.type = "student"
            obj.hireDate = new Date()
            obj.enrollmentDate = new Date()
            axios.post("http://localhost:3090/api/add/student", obj, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.post("http://localhost:3090/api/add/course-instructor", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.post("http://localhost:3090/api/set/course/online", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.post("http://localhost:3090/api/set/course/onsite", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.post("http://localhost:3090/api/add/course-student", data, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
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
            axios.delete("http://localhost:3090/api/delete/student/" + sId, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    axios.get("http://localhost:3090/api/get/students", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
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

    deleteAnInstructor: (iId) => {
        return dispatch => {
            axios.delete("http://localhost:3090/api/delete/instructor/" + iId, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    axios.get("http://localhost:3090/api/get/instructors", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
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
            axios.delete("http://localhost:3090/api/delete/course/" + cId, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }
            })
                .then(response => {
                    axios.get("http://localhost:3090/api/get/courses", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
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

    setStatus: (actionStatus) => {
        return dispatch => {
            if (actionStatus.length > 0) {
                if (actionStatus === cst.GET_STUDENTS) {
                    axios.get("http://localhost:3090/api/get/students", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
                        .then(response => {
                            dispatch({
                                type: cst.GET_STUDENTS_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Students Request Error: " + err) })
                }
                else if (actionStatus === cst.GET_INSTRUCTORS) {
                    axios.get("http://localhost:3090/api/get/instructors", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
                        .then(response => {
                            dispatch({
                                type: cst.GET_INSTRUCTORS_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Instructors Request Error: " + err) })
                }
                else if (actionStatus === cst.GET_COURSES) {
                    axios.get("http://localhost:3090/api/get/courses", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
                        .then(response => {
                            dispatch({
                                type: cst.GET_COURSES_SUCCESS,
                                payload: response.data
                            })
                        })
                        .catch(err => { alert("Courses Request Error: " + err) })
                }
                else if (actionStatus === cst.ADD_COURSE) {
                    axios.get("http://localhost:3090/api/get/departments", {
                        headers: {
                            'authorization': localStorage.getItem('token')
                        }
                    })
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
                else if (actionStatus === cst.ADD_INSTRUCTOR) {
                    dispatch({
                        type: actionStatus
                    })
                }
                else if (actionStatus === cst.ADD_STUDENT) {
                    dispatch({
                        type: actionStatus
                    })
                }
                else if (actionStatus === cst.ADD_DEPARTMENT) {
                    dispatch({
                        type: actionStatus
                    })
                }
            }
        }
    }
}

export default reservationAction