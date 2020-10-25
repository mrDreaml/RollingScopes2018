// that file like a controller

import taskStudent from './js/model/taskStudent';
import guessNumber from './js/model/guessNumber';
import Pages from './js/view/pages';
import './css/style.css';

const pageViewer = new Pages();
const controllerPages = { main, taskClassStudent, taskGuessNumber }; // eslint-disable-line

pageViewer.pageControlling = function () {
  this.listen().then(taskName => controllerPages[taskName]());
};

function taskClassStudent() {
  pageViewer.taskStudent();
  pageViewer.pageControlling();
  taskStudent();
}

function taskGuessNumber() {
  pageViewer.guessNumber();
  pageViewer.pageControlling();
  guessNumber();
}

function main() {
  pageViewer.main();
  pageViewer.pageControlling();
}

$(document).ready(main);
