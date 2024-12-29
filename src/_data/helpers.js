module.exports = {
    /**
     * Returns back some attributes based on whether the
     * link is active or a parent of an active item
     *
     * @param {String} itemUrl The link in question
     * @param {String} pageUrl The page context
     * @returns {String} The attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl) {
        let response = '';

        if (itemUrl === pageUrl) {
            response = ' aria-current="page"';
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"';
        }

        return response;
    },

    getWeekday(dateStr) {
        // Split the date string into components
        const [day, month, year] = dateStr.split('.').map(Number);

        // Create a Date object (adjust month index as it is zero-based in JS)
        const date = new Date(year, month - 1, day);

        // Array of weekday names
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Get the weekday index and return the name
        return weekdays[date.getDay()];
    },
};
