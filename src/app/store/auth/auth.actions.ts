import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginData } from "../../layout/auth/models";
import { IUser } from "../../layout/dashboard/pages/users/models";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<{ payload: LoginData }>(),
    loginSuccess: props<{ user: IUser }>(),
    loginFailure: props<{ error: string }>(),

    register: props<{ payload: Omit<IUser, 'id' | 'createdAt'> }>(),
    registerSuccess: props<{ user: IUser }>(),
    registerFailure: props<{ error: string }>(),

    logout: emptyProps(),

    verifyToken: emptyProps(),
    verifyTokenSuccess: props<{ user: IUser }>(),
    verifyTokenFailure: emptyProps(),
  },
});
// import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
// import { LoginData } from "../../layout/auth/models";

// export const authActions = createActionGroup({
//     source: 'Auth',
//     events: {
//         login: props<{payload: LoginData}>(),
//         logout: emptyProps(),
//     },
// });