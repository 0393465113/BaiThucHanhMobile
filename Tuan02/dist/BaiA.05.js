"use strict";
const simulateTask = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
};
Promise.all([
    simulateTask(1000),
    simulateTask(1000),
    simulateTask(1000),
]).then(results => {
    console.log("Kết quả:", results);
});
