const getRandomNumber = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 1000);
  });
};

getRandomNumber()
  .then(num => console.log("Số ngẫu nhiên:", num))
  .catch(err => console.error("Error:", err));
