// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
console.log(url.includes("staging")); // true
console.log(url.includes("production"));// false

// startsWith / endsWith
console.log(url.startsWith("https"));// true
console.log(url.startsWith("http://")); // false
console.log(url.endsWith("true")); // true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));// 10
console.log(url.lastIndexOf("a"));// 24
console.log(url.indexOf("nothere"));// -1

// ASCII -> A -> 65

const str = "Playwright Testng";
console.log(str.indexOf("w"));//4
console.log(str.slice(0,10));// Playwright
console.log(str.slice(5));//right Testng
console.log(str.slice(-4));// stng
console.log(str.slice(-10, -4));// ght Te
console.log(str.substring(0,10));// Playwright
console.log(str.substr(0,10));// Playwright

const str1="JavaScript is great";
console.log(str1.replace("great", "awesome"));
console.log(str1.replace("a", "@"));
console.log(str1.replaceAll("a", "@"));
console.log(str1.split(" "));// [ 'JavaScript', 'is', 'great' ]

