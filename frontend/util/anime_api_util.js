export const fetchOneAnime = (animeTitle) => (
    $.ajax({
        method: "GET",
        url: `/api/anime/${animeTitle}`
    })
)