import sessions from './sessions';
import users from './users';
import '../css/style.css';

const thead = ['Name'];
sessions.puzzles.forEach((puzzleName) => {
  thead.push(puzzleName.name);
});

const tbody = [];
users.forEach((user, i) => {
  // tbody += '<tr>';
  tbody.push([user.displayName]);
  let fulltime = 0;
  sessions.rounds.forEach((round) => {
    try {
      tbody[i].push(
        {
          rCode: round.solutions[user.uid].code,
          rTime: round.solutions[user.uid].time.$numberLong,
        },
      );
      fulltime += Number(round.solutions[user.uid].time.$numberLong);
    } catch (e) {
      tbody[i].push(
        {
          rCode: '',
          rTime: '-',
        },
      );
    }
  });
  tbody[i].push({
    rCode: undefined,
    rTime: fulltime,
  });
});


$('body').append('<table></table>');
$('table').append('<thead><tr></tr></thead>');
$('table').append('<tbody></tbody>');
$('thead tr').append(`<td>${thead.join('</td><td>')}</td>`.concat('<td>fulltime</td>'));
tbody.forEach((tr) => {
  let trS = '<tr>';
  tr.forEach((td) => {
    if (td instanceof Object) {
      const tooltip = (td.rCode ? `tooltip = "${td.rCode}"` : '');
      const rTime = td.rTime !== 0 ? td.rTime : '-';
      trS += `<td ${tooltip}><span>${rTime}</span></td>`;
    } else {
      trS += `<td><span>${td}</span></td>`;
    }
  });
  trS += '</tr>';
  $('table tbody').append(trS);
});
