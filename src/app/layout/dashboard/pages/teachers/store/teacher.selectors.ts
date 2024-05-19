import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeacher from './teacher.reducer';

export const selectTeacherState = createFeatureSelector<fromTeacher.State>(
  fromTeacher.teacherFeatureKey
);

export const selectIsLoading = createSelector(selectTeacherState,(state)=>{
  return state.isLoading
})

export const selectTeachers = createSelector(selectTeacherState,(state)=> {
  return state.teachers
})

export const selectTeachersError = createSelector(selectTeacherState, (state)=>{
  return state.error
})