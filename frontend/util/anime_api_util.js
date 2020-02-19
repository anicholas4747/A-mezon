export const fetchOneAnime = (animeTitle) => (
    $.ajax({
        method: "GET",
        url: `/api/anime/${animeTitle}`
    })
);

export const fetchAnimeTitles = () => (
    $.ajax({
        method: "GET",
        url: `/api/anime/titles`
    })
);

export const fetchRecs = (recs) => (
    $.ajax({
        method: "GET",
        url: "/api/anime/recs",
        data: { recs }
    })
);

export const searchAnime = (searchParams) => (
    $.ajax({
        method: "GET",
        url: "/api/anime/search",
        data: {
            search: {
                title: searchParams.title,
                genres: searchParams.genres,
                studios: searchParams.studios,
                years: searchParams.years,
                page: searchParams.page
            }
        }
    })
);

export const fetchGenres = () => (
    $.ajax({
        method: "GET",
        url: "/api/anime/genres"
    })
);