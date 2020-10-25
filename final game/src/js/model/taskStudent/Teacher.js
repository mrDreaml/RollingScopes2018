/*
  -----------------  Teacher  -----------------
*/

export default function Teacher(name_, imgSrc_, groups_, deadline_, leaderboard_, isAngry_) {
  const name = name_;
  const imgSrc = imgSrc_;
  const groups = groups_;
  const deadline = deadline_;
  const leaderboard = leaderboard_;
  const isAngry = isAngry_;

  function get() {
    return {
      name, imgSrc, groups, deadline, leaderboard, isAngry,
    };
  }
  function rateStudent(student) {
    if (student.isReady) {
      const advance = isAngry ? 0 : 10;
      return student.skill + student.rating + advance;
    }

    return 0;
  }

  return { rateStudent, get };
}
