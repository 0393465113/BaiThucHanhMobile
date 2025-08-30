"use strict";
const simulateTask = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
};
simulateTask(2000).then((msg) => console.log(msg));
