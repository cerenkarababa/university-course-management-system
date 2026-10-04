export function calculateClassAverage(students, courseId) {
  const grades = [];

  students.forEach((student) => {
    const course = student.courses.find(
      (course) => course.courseId === courseId
    );

    if (course) {
      grades.push(course.grade);
    }
  });

  if (grades.length === 0) {
    return 0;
  }

  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

export function findTopStudent(students) {
  return students.reduce((topStudent, currentStudent) => {
    return currentStudent.getAverage() > topStudent.getAverage()
      ? currentStudent
      : topStudent;
  });
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
