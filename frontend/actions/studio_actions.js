import * as StudioAPIUtil from '../util/studio_api_util';

export const RECEIVE_STUDIOS = "RECEIVE_STUDIOS";
export const RECEIVE_STUDIO = "RECEIVE_STUDIO";

export const receiveStudios = (studios) => ({
    type: RECEIVE_STUDIOS,
    studios
});

export const receiveStudio = (studio) => ({
    type: RECEIVE_STUDIO,
    studio
});

export const fetchStudios = () => dispatch => (
    StudioAPIUtil.fetchStudios()
    .then( (studios) => dispatch(receiveStudios(studios)) )
);

export const fetchStudio = (studio_name) => dispatch => (
    StudioAPIUtil.fetchStudio(studio_name)
    .then( (studio) => dispatch(receiveStudio(studio)) )
);