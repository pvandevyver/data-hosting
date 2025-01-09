self.onmessage = (event) => {
  const { taskId, data } = event.data;

  // Simulate a time-consuming task (e.g., multiplying input by 2)
  const result = data.input * 2;
  setTimeout(() => {
    self.postMessage({ taskId, result });
  }, 2000); // Simulate a delay
};
