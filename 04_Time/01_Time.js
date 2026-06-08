// const d = new Date();

// console.log(d);
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(d.getDate());
// console.log(d.getDay());
// // Sun, Mon, Tue, Wed, Thu, Fri, Sat
// // 0,    1,   2,   3,   4 ,  5,   6 
// console.log(d.getMonth());
// // jan, feb, mar....
// // 0,   1,    2.....

// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());

// console.log(d.getTime());
// const now= Date.now();
// console.log(now);


// const d= new Date ("2022-10-20");  //2022-10-20t10:10:12
// console.log(d);
// console.log(d.toDateString()); 

// const date = new Date(2024,4,28);
// // year/ month/ date/ hour/ minute/ second / millisecond
// console.log(date);
// console.log(date.toString());
// // jab number me dete hai tb ho 0 se start krta hai count krna remember it
// // jab string me lete hai tb 1 se start

// const d = new Date();
// d.setDate(21);
// d.setFullYear(2026);
// d.setMonth(4);
// console.log(d.toString()); 
// console.log(d.toLocaleDateString()); 

//---------->> Date Calculations

// const date1 = new Date();
// const date2 = new Date("2026-5-22");
// console.log(date2-date1); // in milliseconds

// Countdown Timer for olympics
// Days/ hour/minute/second

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2-date1;
const days= Math.floor(date/(1000*60*60*24));
const hour=Math.floor((date/(1000*60*60))%24);
const minute= Math.floor((date/(1000*60))%60);
const seconds= Math.floor((date/(1000))%60);

// console.log(hour);
// console.log(days);
// console.log(minute);
// console.log(seconds);
console.log(`Olympics Countdowntime: Days:${days} hour${hour} minutes${minute} seconds ${seconds} `);
