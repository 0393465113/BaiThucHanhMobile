"use strict";
const filterEvens = (arr) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr.filter(num => num % 2 === 0));
        }, 1000);
    });
};
filterEvens([1, 2, 3, 4, 5, 6, 7, 8, 9])
    .then(evens => console.log("Sô chẵn:", evens))
    .catch(err => console.error("Lỗi:", err))
    .finally(() => console.log("Hoàn thành kiểm tra số chẵn."));
