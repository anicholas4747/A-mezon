import * as AnimeAPIUtil from '../util/anime_api_util';

export const RECEIEVE_ONE_ANIME = "RECEIEVE_ONE_ANIME";
export const RECEIVE_ANIME_TITLES = "RECEIVE_ANIME_TITLES";

export const receiveOneAnime = (anime) => ({
    type: RECEIEVE_ONE_ANIME,
    anime
});

export const receiveAnimeTitles = (allTitles) => ({
    type: RECEIVE_ANIME_TITLES,
    allTitles
});

export const fetchOneAnime = (animeTitle) => dispatch => (
    AnimeAPIUtil.fetchOneAnime(animeTitle)
        .then((anime) => dispatch(receiveOneAnime(anime)))
);

export const fetchAnimeTitles = () => dispatch => (
    AnimeAPIUtil.fetchAnimeTitles()
        .then((allTitles) => dispatch(receiveAnimeTitles(allTitles)))
);