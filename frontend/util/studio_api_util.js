export const fetchStudios = () => (
    $.ajax({
        method: "GET",
        url: "api/studios"
    })
);

export const fetchStudio = (studio_name) => (
    $.ajax({
        method: "GET",
        url: `api/studio/${studio_name}`
    })
);