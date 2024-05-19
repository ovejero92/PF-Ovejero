import { createFeature, createReducer, on } from '@ngrx/store';
import { TeacherActions } from './teacher.actions';
import { ITeacher } from '../models';

export const teacherFeatureKey = 'teacher';

export interface State {
teachers: ITeacher[],
isLoading: boolean;
error:unknown;
}

export const initialState: State = {
teachers:[],
isLoading:false,
error:null,
};

export const reducer = createReducer(
  initialState,
  on(TeacherActions.loadTeachers, state => {
    return{...state,isLoading:true}
  }),
  on(TeacherActions.loadTeachersSuccess, (state, action) => {
    return{...state,isLoading:false,teachers:action.data}
  }),
  on(TeacherActions.loadTeachersFailure, (state, action) => {
    return{...state,error: action.error, isLoading:false}
  }),

  on(TeacherActions.createTeachers,state => {
    return{...state,isLoading:true}
  }),
  on(TeacherActions.createTeachersSuccess,(state, action) => {
    return{...state,isLoading:false, teachers:[...state.teachers,action.data]}
  }),
  on(TeacherActions.createTeachersFailure,(state, action) => {
    return{...state,isLoading:false,error: action.error}
  }),

  on(TeacherActions.deleteTeachersById,state => {
    return{...state,isLoading:true}
  }),
  on(TeacherActions.deleteTeachersByIdSuccess,(state, action) => {
    return{...state,isLoading:false,teachers:state.teachers.filter((el)=> el.id !== action.data.id)}
  })
);

export const teacherFeature = createFeature({
  name: teacherFeatureKey,
  reducer,
});

