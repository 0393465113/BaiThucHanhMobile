const simulateTask = (time: number): Promise<string> => {
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
