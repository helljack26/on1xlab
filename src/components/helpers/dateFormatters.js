export const formatDate = (date, isForFront = false) => {
    if (!date) return "";
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    return isForFront ? `${day}.${month}.${year}` : `${year}-${month}-${day}`;
};

export const formatTableDate = (dateString) => {
    // Split the date string into day, month, and year
    const dateParts = dateString.split(".");
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Month is zero-based in JavaScript
    const year = parseInt(dateParts[2], 10);

    // Create a new Date object
    const dateObject = new Date(year, month, day);

    return dateObject.getTime();
};
export const formatForComparison = (dateString, isSubstractDay = null) => {
    // Returning the timestamp in milliseconds
    const date = new Date(dateString);

    if (isSubstractDay === true) {
        date.setDate(date.getDate() - 0.5);
    } else {
        date.setDate(date.getDate() + 1.1);
    }
    return date.getTime();
};
