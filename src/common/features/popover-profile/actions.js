import { createAction } from 'redux-actions';

export const SHOW_PROFILE = 'SHOW_PROFILE';
export const HIDE_PROFILE = 'HIDE_PROFILE';
export const showProfile = createAction(SHOW_PROFILE);
export const hideProfile = createAction(HIDE_PROFILE);

export const REQUEST_PROFILE_DATA = 'REQUEST_PROFILE_DATA';
export const SUCCESS_PROFILE_DATA = 'SUCCESS_PROFILE_DATA';
export const FAILURE_PROFILE_DATA = 'FAILURE_PROFILE_DATA';
export const requestProfileData = createAction(REQUEST_PROFILE_DATA);
export const successProfileData = createAction(SUCCESS_PROFILE_DATA);
export const failureProfileData = createAction(FAILURE_PROFILE_DATA);
