const class07Students = [];

function getNumberOfStudents() {
  return class07Students.length;
}

function addStudentToClass(studentName) {
  if (studentName === "") {
    return "Please insert name";
  } else {
    if (
      studentName.toLowerCase() == "queen" &&
      class07Students.includes(!studentName)
    ) {
      class07Students.push(studentName);
      return class07Students;
    } else if (
      class07Students.length > 5 &&
      studentName.toLowerCase() != "queen"
    ) {
      return "Can't add more student into class!";
    } else if (class07Students.includes(studentName)) {
      return "Student is already in the class";
    } else {
      class07Students.push(studentName);
      return class07Students;
    }
  }
}

console.log(addStudentToClass("Bengu"));
console.log(addStudentToClass("Bengu"));
console.log(addStudentToClass("Alex"));
console.log(addStudentToClass("Dani"));
console.log(addStudentToClass("Lia"));
console.log(addStudentToClass("Olga"));
console.log(addStudentToClass("Fred"));
console.log(addStudentToClass("Vala"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Queen"));
console.log(getNumberOfStudents());
