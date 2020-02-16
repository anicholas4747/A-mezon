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