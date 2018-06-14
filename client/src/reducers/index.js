import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import courses from './courses_organizer/courses';
import departments from './courses_organizer/departments';
import instructors from './courses_organizer/instructors';
import students from './courses_organizer/students';

export default combineReducers({
  auth, courses, departments, instructors, students,
  form: formReducer
});
