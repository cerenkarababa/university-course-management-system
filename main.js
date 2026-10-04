import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
  calculateClassAverage,
  findTopStudent,
  filterStudents
} from "./analytics.js";

console.log("Fetching data from database...");

fetchStudents((rawData) => {
  console.log("Data received!");
  console.log();

  const students = rawData.map(
    (student) => new Student(student.id, student.name, student.courses)
  );

  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");

  try {
    students[0].id = 999;
  } catch (error) {
    console.log("ID is read-only, so the change was rejected.");
  }

  console.log(
    `Final ID: ${students[0].id} (Success: ID did not change)`
  );
  console.log();

  const classAverage = calculateClassAverage(students, 101);
  const topStudent = findTopStudent(students);

  const hasCourse102 = (student) =>
    student.courses.some((course) => course.courseId === 102);

  const course102Students = filterStudents(students, hasCourse102);

  console.log("--- Analytics Report ---");
  console.log(
    `Class Average for Course 101: ${classAverage.toFixed(2)}`
  );
  console.log(
    `Top Student: ${topStudent.name} (Average: ${topStudent
      .getAverage()
      .toFixed(1)})`
  );
  console.log(
    `Students in Course 102: ${course102Students
      .map((student) => student.name)
      .join(", ")}`
  );
});
