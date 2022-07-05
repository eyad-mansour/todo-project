"use strict";

const userName = prompt("Enter your name");

const userGender = prompt("What is your gender");

const userAge = prompt("Enter your age");
if (userAge <= 0) {
  alert("your age is incorrect");
}

const msgDesplay = confirm(
  "if you want to see the welcoming message press OK  if you want to skipped press cancel"
);

if (msgDesplay === true && userGender === "male") {
  alert(`your name is Mr ${userName} and your age is ${userAge}`);
} else if (msgDesplay === true && userGender === "female") {
  alert(`your name is Ms ${userName} and your age is ${userAge}`);
} else {
  alert(`your name is ${userName} and your age is ${userAge}`);
}
// alert("your Alert here");

// confirm("your query here");

const arr = [];

let sportQ = confirm("do you like sport ?");
let musicQ = confirm("do you like music ?");
let moviesQ = confirm("do you like movies");
if (!sportQ) {
  arr.push("invalid");
} else {
  arr.push(sportQ);
}
if (!musicQ) {
  arr.push("invalid");
} else {
  arr.push(musicQ);
}
if (!moviesQ) {
  arr.push("invalid");
} else {
  arr.push(moviesQ);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
