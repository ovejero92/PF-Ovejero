import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICreateTeacherPayload, ITeacher } from '../models';

export const TeacherActions = createActionGroup({
  source: 'Teacher',
  events: {
    'Load Teachers': emptyProps(),
    'Load Teachers Success': props<{ data: ITeacher[] }>(),
    'Load Teachers Failure': props<{ error: unknown }>(),

    'Create Teachers' : props<{payload:ICreateTeacherPayload}>(),
    'Create Teachers Success':props<{data : ITeacher}>(),
    'Create Teachers Failure':props<{error: unknown}>(),

    'Delete Teachers By Id': props<{ id : string}>(),
    'Delete Teachers By Id Success': props<{data:ITeacher}>(),
    'Delete Teachers By Id Failure': props<{error: unknown}>()
  }
});
