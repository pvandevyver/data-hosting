self.onmessage = (event) => {
  self.postMessage(`Received: ${event.data}`);
};
