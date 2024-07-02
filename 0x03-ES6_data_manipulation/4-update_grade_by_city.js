function updateStudentGradeByCity(students, city, newGrades) {
  const gradeById = new Map(newGrades.map((grade) => [grade.studentId, grade.grade]));

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = gradeById.get(student.id) || 'N/A';
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
