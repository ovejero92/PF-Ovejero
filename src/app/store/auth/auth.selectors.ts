import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureName } from "./auth.reducer";

export const authState = createFeatureSelector<AuthState>(authFeatureName);

export const authUser = createSelector(authState, (state) => state.authUser);
export const authLoading = createSelector(authState, (state) => state.loading);
export const authError = createSelector(authState, (state) => state.error);
export const isAdmin = createSelector(authUser, (user) => user?.role === 'ADMIN');
export const isAuthenticated = createSelector(authUser, (user) => !!user);
// import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { AuthState, authFeatureName } from "./auth.reducer";

// export const authState = createFeatureSelector<AuthState>(authFeatureName);
// export const authUser = createSelector(authState,(state)=> state.authUser)