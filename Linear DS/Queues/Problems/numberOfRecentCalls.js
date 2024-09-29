// Leetcode 933. Number of recent calls
// EASY

// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds,
// and returns the number of requests that has happened in the past 3000 milliseconds (including the new request).
// Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].

// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

const Queue = require("../index.js");

// Using Queue Data Structure
class RecentCounter {
  constructor() {
    this.pings = new Queue();
  }

  ping(t) {
    this.pings.enqueue(t);
    while (this.pings.peek() < t - 3000) {
      this.pings.dequeue();
    }
    return this.pings.size;
  }
}

// Using an Array
// class RecentCounter {
//   constructor() {
//     this.pings = [];
//   }

//   ping(t) {
//     this.pings.push(t);
//     while (this.pings[0] < t - 3000) {
//       this.pings.shift();
//     }
//     return this.pings.length;
//   }
// }

const rec1 = new RecentCounter();
console.log("REC" + rec1.ping(1));
console.log("REC" + rec1.ping(5));
