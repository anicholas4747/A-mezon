import * as AnimeAPIUtil from '../util/anime_api_util';

export const RECEIEVE_ONE_ANIME = "RECEIEVE_ONE_ANIME";
export const RECEIVE_ANIME_TITLES = "RECEIVE_ANIME_TITLES";
export const RECEIVE_RECS = "RECEIVE_RECS";
export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_YEARS = "RECEIVE_YEARS";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

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

export const receiveGenres = (genres) => ({
    type: RECEIVE_GENRES,
    genres
});

export const receiveYears = (years) => ({
    type: RECEIVE_YEARS,
    years
});

export const receiveSearchResults = (results) => ({
    type: RECEIVE_SEARCH_RESULTS,
    results
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

export const searchAnime = (searchParams) => dispatch => (
    AnimeAPIUtil.searchAnime(searchParams)
        .then((results) => dispatch(receiveSearchResults(results)))
);

export const fetchGenres = () => dispatch => (
    AnimeAPIUtil.fetchGenres()
        .then((genres) => dispatch(receiveGenres(genres)))
);

export const fetchYears = () => dispatch => (
    AnimeAPIUtil.fetchYears()
        .then((years) => dispatch(receiveYears(years)))
);