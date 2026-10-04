# University Course Management System

## Overview

This project is a JavaScript-based University Course Management System. It simulates fetching student data from a database and then creates student objects and generates a small analytics report.

## File Organization

- `models.js` - Defines the `Student` class. The student ID is created with `Object.defineProperty()` so it cannot be changed or deleted.
- `database.js` - Simulates an asynchronous database request with `setTimeout()` and a callback.
- `analytics.js` - Contains functions for calculating a course average, finding the top student with `reduce()`, and filtering students with a higher-order function.
- `main.js` - Imports all required modules, fetches the data, creates `Student` objects, tests ID immutability, and prints the analytics report.

## How to Run

This project uses ES6 modules. With a recent Node.js version, run:

```bash
node --experimental-default-type=module main.js
```

The program waits 2 seconds to simulate the database request and then prints the report.

## Challenges Faced

One challenge was making the student ID immutable while still allowing the other student properties to be changed normally. I solved this by using `Object.defineProperty()` with `writable: false` and `configurable: false`.

Another challenge was handling the asynchronous database simulation. The student data must be processed inside the callback because the data is only available after the 2-second delay.

I also used array methods such as `map()`, `find()`, `some()`, `filter()`, `forEach()`, and `reduce()` to process the student and course data.

## Expected Result

The program should report:

- Course 101 class average: `73.33`
- Top student: `Zeynep` with an average of `82.5`
- Students in Course 102: `Ali, Zeynep, Ahmet`
