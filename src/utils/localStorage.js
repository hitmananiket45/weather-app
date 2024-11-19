// Function to retrieve recent searches from local storage
export const getRecentSearches = () => {
    const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    return searches;
};

// Function to save a city to local storage
export const saveToLocalStorage = (city) => {
    const searches = getRecentSearches();
    if (!searches.includes(city)) {
        searches.push(city);
        localStorage.setItem('recentSearches', JSON.stringify(searches));
    }
};

// Function to clear all recent searches from local storage
export const clearLocalStorage = () => {
    localStorage.removeItem('recentSearches');
};
