/**
 * @author Makro Skorupan
 * @version 1.0.0
 * @date 2025-11-30
 * @fileoverview Calculate sum of values inside/outside of the range.
 */

// variables
const startString: string =
  prompt("Enter an integer for the start of the range: ") || "0";
const endString: string =
  prompt("Enter an integer for the end of the range: ") ||
  "0";

const start: number = parseInt(startString);
const end: number = parseInt(endString);

let sumInside: number = 0;
let sumOutside: number = 0;

let numberString: string;
let number: number;

do {
  numberString = prompt("Enter an integer or zero (0) to end: ") || "0";
  number = parseInt(numberString);

  if (number !== 0) {
    if (number >= start && number <= end) {
      sumInside += number;
    } else {
      sumOutside += number;
    }
  }
} while (number !== 0);

console.log("The sum of the integers inside the range is " + sumInside);
console.log("The sum of the integers outside the range is " + sumOutside);
console.log("\nDone.");
