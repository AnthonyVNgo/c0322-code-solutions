/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

/* could I have used a for in loop for this tacked within a for loop? */
