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

export const searchAnime = (searchTerm, page) => (
    $.ajax({
        method: "GET",
        url: "/api/anime/search",
        data: {
            search: {
                search_term : searchTerm,
                page: page 
            }
        }
    })
);

export const searchAllAnime = (page) => (
    $.ajax({
        method: "GET",
        url: "/api/anime/search",
        data: {
            search: {
                page: page 
            }
        }
    })
);