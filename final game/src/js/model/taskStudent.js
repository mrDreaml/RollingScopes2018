import Student from './taskStudent/Student';
import Group from './taskStudent/Group';
import Teacher from './taskStudent/Teacher';
import dataStudents from './taskStudent/dataStudents';
import View from '../view/taskStudent';

export default function () {
  const VikVikImgPath = 'https://pp.userapi.com/c844521/v844521755/10dbd1/UT48x1UcUQE.jpg?ava=1'; // hardcode
  const VikVik = new Teacher('VikVik', VikVikImgPath, [], 0, 0, false);
  const listStudents = [];
  dataStudents.forEach((student) => {
    listStudents.push(new Student(...(Object.values(student))));
  });


  const myGroup = new Group('10701217', listStudents);
  const viewData = {
    teacher: {
      name: VikVik.get().name,
      imgSrc: VikVik.get().imgSrc,
      isAngry: VikVik.get().isAngry ? 'Angry' : 'normal',
    },
  };

  const view = new View(viewData);

  $('#ShowStudentList').click(() => view.showStudentList(myGroup.getStudentData()));
  $('#ShowTopStudentList').click(() => view.showStudentList(myGroup.getTopStudents()));
  $('#CloseStudentList').click(() => view.closeStudentList());
  $('#RankeAll').click(() => {
    myGroup.rateStudents.call({ teacher: VikVik });
    view.showStudentList(myGroup.getStudentData());
  });
}
