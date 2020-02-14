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