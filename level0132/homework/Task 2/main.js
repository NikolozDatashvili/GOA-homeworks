import formatDate, { parseDate } from "./utils.js";

let date = new Date();
let formatted = formatDate(date);
console.log("Formatted:", formatted);

let parsed = parseDate(formatted);
console.log("Parsed:", parsed);
