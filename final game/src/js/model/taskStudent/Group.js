/*
  -----------------  Group  -----------------
*/

export default function Group(groupNumber_, students_) {
  const groupNumber = groupNumber_;
  const students = students_;

  function getStudentData() {
    const studentData = [];

    students.forEach((student) => {
      studentData.push(student.get());
    });

    return studentData;
  }


  function get() {
    return { groupNumber, students };
  }


  function rateStudents() {
    if (this !== undefined) {
      students.forEach((student) => {
        student.updateMark(this.teacher.rateStudent(student.get()));
      });
    } else {
      throw new Error('this.teacher is not defined, use call');
    }
  }


  function calculateMark() {
    const studentMarks = [];

    students.forEach((student) => {
      studentMarks.push(student.get().mark);
    });

    return studentMarks.reduce((accumulator, mark) => accumulator + mark);
  }


  function getstudentMarkList() {
    const studentMarkList = [];

    students.forEach((student) => {
      const obj = {};
      obj.name = student.get().name;
      obj.mark = student.get().mark;
      studentMarkList.push(obj);
    });

    return studentMarkList;
  }


  function getTopStudents() {
    const studentMarkList = getstudentMarkList();

    studentMarkList.sort((a, b) => {
      if (a.mark > b.mark) {
        return -1;
      }
      return 1;
    });

    return studentMarkList.slice(0, 3);
  }


  return {
    calculateMark, getTopStudents, rateStudents, getStudentData, get,
  };
}
