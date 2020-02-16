import * as AnimeAPIUtil from '../util/anime_api_util';

export const RECEIEVE_ONE_ANIME = "RECEIEVE_ONE_ANIME";
export const RECEIVE_ANIME_TITLES = "RECEIVE_ANIME_TITLES";
export const RECEIVE_RECS = "RECEIVE_RECS";

export const receiveOneAnime = (anime) => ({
    type: RECEIEVE_ONE_ANIME,
    anime
});

export const receiveAnimeTitles = (allTitles) => ({
    type: RECEIVE_ANIME_TITLES,
    allTitles
});

export const receiveRecs = (recs) => ({
    type: RECEIVE_RECS,
    recs
});

export const fetchOneAnime = (animeTitle) => dispatch => (
    AnimeAPIUtil.fetchOneAnime(animeTitle)
        .then((anime) => dispatch(receiveOneAnime(anime)))
);

export const fetchAnimeTitles = () => dispatch => (
    AnimeAPIUtil.fetchAnimeTitles()
        .then((allTitles) => dispatch(receiveAnimeTitles(allTitles)))
);

export const fetchRecs = (recs) => dispatch => (
    AnimeAPIUtil.fetchRecs(recs)
        .then((recs) => dispatch(receiveRecs(recs)))
);