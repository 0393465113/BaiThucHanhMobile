const helloAsync = (): Promise<string> => {
  return new Promise((resolve) => {
    let seconds = 0;
    const interval = setInterval(() => {
      seconds++;
      console.log(`Đã chờ ${seconds} giây...`);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      resolve("Hello Async");
    }, 2000);
  });
};

// Example usage
helloAsync().then((msg) => console.log(msg));
