/*
  -----------------  Student  -----------------
*/

export default function Student(name_, isReady_, skill_, rating_) {
  const name = name_;
  const isReady = isReady_;
  const skill = skill_;
  const rating = rating_;
  let mark;

  function get() {
    return {
      name, isReady, skill, rating, mark,
    };
  }

  function updateMark(newMark) {
    mark = newMark;
  }

  return { updateMark, get };
}
