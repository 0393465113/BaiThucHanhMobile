"use strict";
const getNumber = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};
getNumber().then((num) => console.log(num));
