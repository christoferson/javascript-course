// Enable Strict Mode (Write more secure robust code)
'use strict';

// Query Selector
console.log(document.querySelector(".message"));
console.log(document.querySelector(".message").textContent);


let start = Date.now(); 
console.log(start);

//start.setDays(start.getDate + 1);

const date = new Date();
console.log(date);
date.setFullYear(date.getFullYear() + 1);
console.log(date, date.valueOf(), typeof date.valueOf());


const TTL_DELTA = 60 * 60 * 24 * 7; // Keep records for 7 days
console.log((Math.floor(+new Date() / 1000) + TTL_DELTA).toString())