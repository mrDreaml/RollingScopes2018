export default function (viewData) {
  (function init() {
    $('#shape').append('<main></main>');
    $('main').append(
      `<div class="container">
    <div class= "row bg-gray">
        <img class= "round-img" src="${viewData.teacher.imgSrc}" alt = "${viewData.teacher.name}">
        <div class = "col">
            <h2>Teacher: ${viewData.teacher.name}</h2>
            <span>Status: ${viewData.teacher.isAngry}</span>
        </div>
        <div class="col flex-end">
            <div class="btn col-center" id="RankeAll">Ranke all</div>
        </div>
    </div>
    <div class="menu">
        <div class="row">
            <div class= "btn" id= "ShowStudentList">Show Student List</div>
            <div class= "btn" id= "ShowTopStudentList">Show Top Student List</div>
            <div class= "btn" id= "CloseStudentList">Close Student List</div>
        </div>
    </div>
    <div id="listStudent"></div>
  </div>`,
    );
  }());


  function closeStudentList() {
    $('#listStudent').empty();
  }
  function showStudentList(listStudent) {
    closeStudentList();
    let tableData = '<table><thead>';
    Object.keys(listStudent[0]).forEach((el) => {
      tableData += `<td>${el}</td>`;
    });
    tableData += '</thead><tbody>';
    listStudent.forEach((student) => {
      tableData += '<tr>';
      Object.values(student).forEach((el) => {
        tableData += `<td>${el !== undefined ? el : '-'}</td>`;
      });
      tableData += '</tr>';
    });
    tableData += '</tbody></table>';
    $('#listStudent').append(tableData);
  }

  return { showStudentList, closeStudentList };
}
