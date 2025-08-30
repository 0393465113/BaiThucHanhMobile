"use strict";
const simulateTask = (time, id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done`);
        }, time);
    });
};
Promise.all([
    simulateTask(1000, 1),
    simulateTask(1000, 2),
    simulateTask(1000, 3),
]).then(results => {
    console.log("Kết quả:", results);
});
Promise.race([
    simulateTask(2000, 1),
    simulateTask(1000, 2),
    simulateTask(3000, 3),
])
    .then(result => {
    console.log("Kết quả đầu tiên:", result);
})
    .catch(err => {
    console.error("Error:", err);
});
