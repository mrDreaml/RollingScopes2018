import '../stylesheet/style.css';
import renderPage from './renderPage';

const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5M5H1fC5g5QSfD_i9y4qgxzQ44K4CisY&type=video&part=snippet&maxResults=15&q=skateboarding&videoDefinition=high&order=viewCount';
function getJson(callback) {
  fetch(url)
    .then(res => res.json())
    .then(myJson => callback(myJson))
    .catch(err => err);
}

getJson(renderPage);
