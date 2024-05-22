// 1360. Number of Days Between Two Dates


// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

 
// Example 1:

// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1
// Example 2:

// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15


// Summary

// The function daysBetweenDates calculates the number of days between two dates. It does so by:

// Converting the input date strings to Date objects.
// Subtracting the two Date objects to get the difference in milliseconds.
// Taking the absolute value of the difference to ensure it's positive.
// Dividing the result by the number of milliseconds in a day to convert the difference to days.
// Rounding the result to the nearest whole number using Math.round.



const daysBetweenDates = (date1, date2) =>
    Math.round(
      Math.abs(new Date(date1) - new Date(date2)) / (24 * 60 * 60 * 1000)
    );