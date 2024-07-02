export default function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return []; // Return empty array if not an array
  }

  // Use map to extract student IDs from each object
  return students.map((student) => student.id);
}
