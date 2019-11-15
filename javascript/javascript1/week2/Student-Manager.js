const class07Students = ["bengu", "alex"];

//list of student names 

for (let i = 0; i < class07Students.length; i++) {
  studentName = class07Students[i];
  console.log(class07Students[i]);
} 

//function to compare student names exist in the array

function findExistingStudent(studentName) {
  if (class07Students.find(studentName => studentName === studentName)){
    console.log( `${studentName} exists in the class.`);
  }else { 
    console.log( `${studentName} is not in the class.`);
  }
} 

//Function to call number of students 

const numberOfStudents = function getNumberOfStudents() {
  class07Students.length
  return class07Students.length
} 


function addStudentToClass(studentName) {
    if (studentName === " ") {
        console.log("Please insert name")
    } else if ( numberOfStudents >= 5 && studentName.toLowerCase != "queen") {   
        console.log("Can't add more student into class!");
    } else {
        console.log(class07Students.push(studentName))
    }
  }
addStudentToClass(); 



