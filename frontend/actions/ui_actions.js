export const NAV_DROPDOWN = "NAV_DROPDOWN";
export const NAV_LI_CLICKED = "NAV_LI_CLICKED";
export const SEARCH_DROPDOWN_HIDE = "SEARCH_DROPDOWN_HIDE";
export const PRELOAD_FILTERS = "PRELOAD_FILTERS";

export const navDropdown = (bool) => ({
    type: NAV_DROPDOWN,
    bool
});

export const navLiClicked = (bool) => ({
    type: NAV_LI_CLICKED,
    bool
});

export const searchDropdownHide = (bool) => ({
    type: SEARCH_DROPDOWN_HIDE,
    bool
});

export const preloadFilters = (filtersArr) => ({
    type: PRELOAD_FILTERS,
    filtersArr
});
