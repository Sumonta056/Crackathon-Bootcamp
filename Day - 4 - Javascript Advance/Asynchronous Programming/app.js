function asyncFunc() {
  console.log("loading...");
  setTimeout(() => {
    console.log("asynchronous hello world after 3 seconds");
  }, 3000);
}

asyncFunc();

console.log("hello world");
