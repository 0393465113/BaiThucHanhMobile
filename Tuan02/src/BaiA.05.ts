const simulateTask = (time: number, id: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} done`);
    }, time);
  });
};

//Bài A.06
Promise.all([
  simulateTask(1000, 1),
  simulateTask(1000, 2),
  simulateTask(1000, 3),
]).then(results => {
  console.log("Kết quả:", results);
});

//BaiA.07
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