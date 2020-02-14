export const RECEIEVE_ONE_ANIME = "RECEIEVE_ONE_ANIME";
import * as AnimeAPIUtil from '../util/anime_api_util';

export const receiveOneAnime = (anime) => ({
    type: RECEIEVE_ONE_ANIME,
    anime
});

export const fetchOneAnime = (animeTitle) => dispatch => (
    AnimeAPIUtil.fetchOneAnime(animeTitle)
        .then((anime) => dispatch(receiveOneAnime(anime)))
);