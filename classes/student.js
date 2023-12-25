const Person = require('./person');

// Your code here

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA (student1, student2) {
    let text = 'has the higher GPA.';
    const eq = 'Both students have the same GPA';

    if (student1.GPA > student2.GPA) {
      text = `${student1.firstName} ${student1.lastName} ${text}`;
      return text;
    } else if (student1.GPA < student2.GPA) {
      text = `${student2.firstName} ${student2.lastName} ${text}`;
      return text;
    } else {
      return eq;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
