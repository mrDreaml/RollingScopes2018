export default function () {
  function listen() {
    return new Promise((resolve) => {
      $('#shape').click((event) => {
        const span = event.target;
        if (span.tagName === 'SPAN') {
          resolve($(span.parentNode).attr('task_name'));
        }
      });
    });
  }

  function main() {
    $('#shape').empty();
    $('body').append('<section id = "shape" ></section>');
    $('#shape').append(`
    <div class= "row">
      <div class= "btn" task_name = "taskClassStudent"><span>Task Student, main task</span></div>
      <div class= "btn" task_name = "taskGuessNumber"><span>Task Guess a Number</span></div>
    </div>
    `);
  }

  function taskStudent() {
    $('#shape').empty();
    $('#shape').append('<div task_name = "main"><span>Go to menu</span></div>');
  }

  function guessNumber() {
    $('#shape').empty();
    $('#shape').append('<div task_name = "main"><span>Go to menu</span></div>');
    $('#shape').append('<div class="container"><h2>Guess a Number</h2></div>');
  }
  return {
    main, taskStudent, guessNumber, listen,
  };
}
