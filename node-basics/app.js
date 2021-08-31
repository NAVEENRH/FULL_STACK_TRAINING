// const mathObj = require("./modules");
const { add, sub } = require("./modules");
const fs = require("fs");

const { EventEmitter } = require("events");
const { writeFile } = require("fs/promises");

add(3, 2);
fs.writeFile("sample.txt", "some sample data", (error) => {
  if (error) {
    console.log("file write failed");
  } else {
    console.log("file created");
  }
});
// promise
// event emitter
const eventEmitter = new EventEmitter();
// add listeners
eventEmitter.on("custom-event", () => {
  console.log("custom event emitted");
});

eventEmitter.once("custom-event-once", () => {
  console.log("custom event emitted only once");
});
// node app.js
eventEmitter.emit("custom-event");
eventEmitter.emit("custom-event");

eventEmitter.emit("custom-event-once");
eventEmitter.emit("custom-event-once");

// process api
// handle unhandled errors/exceptions
process.on("uncaughtException", (err, origin) => {
  console.log(`Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});
// test();
// handle promise which do not have handled the promise rejection
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
  // Application specific logging, throwing an error, or other logic here
});

writeFile("test.txt", "test data").then((d) => console.log("DONE", d));
