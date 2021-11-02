import { takeLatest } from 'redux-saga/effects';
import * as employeeActions from '../actions/employees';
import {
  createEmployeeSaga,
  deleteEmployeeSaga,
  fetchEmployeesSaga,
  updateEmployeeSaga,
} from './employees';
import * as lecturerActions from '../actions/lecturers';
import {
  fetchLecturersSaga,
  createLecturerSaga,
  updateLecturerSaga,
  deleteLecturerSaga,
} from './lecturers';
import * as userActions from '../actions/users';
import { fetchUsersSaga, createUserSaga, updateUserSaga, deleteUserSaga } from './users';

export default function* mySaga() {
  // employees
  yield takeLatest(employeeActions.getEmployees.getEmployeesRequest, fetchEmployeesSaga);
  yield takeLatest(employeeActions.createEmployee.createEmployeeRequest, createEmployeeSaga);
  yield takeLatest(employeeActions.updateEmployee.updateEmployeeRequest, updateEmployeeSaga);
  yield takeLatest(employeeActions.deleteEmployee.deleteEmployeeRequest, deleteEmployeeSaga);

  // lecturers
  yield takeLatest(lecturerActions.getLecturers.getLecturersRequest, fetchLecturersSaga);
  yield takeLatest(lecturerActions.createLecturer.createLecturerRequest, createLecturerSaga);
  yield takeLatest(lecturerActions.updateLecturer.updateLecturerRequest, updateLecturerSaga);
  yield takeLatest(lecturerActions.deleteLecturer.deleteLecturerRequest, deleteLecturerSaga);

  // users
  yield takeLatest(userActions.getUsers.getUsersRequest, fetchUsersSaga);
  yield takeLatest(userActions.createUser.createUserRequest, createUserSaga);
  yield takeLatest(userActions.updateUser.updateUserRequest, updateUserSaga);
  yield takeLatest(userActions.deleteUser.deleteUserRequest, deleteUserSaga);
}
