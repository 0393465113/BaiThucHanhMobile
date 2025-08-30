"use strict";
const rejectPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
};
// Example usage
rejectPromise().catch(err => console.error(err.message));
