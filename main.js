
  function Grades() {
    var sub1 = parseInt(document.getElementById("mathGrade").value);
    var sub2 = parseInt(document.getElementById("sciGrade").value);
    var sub3 = parseInt(document.getElementById("engGrade").value);

    const ave = ((sub1 + sub2 + sub3) / 3).toFixed(2);

    if (ave >= 94 && ave <= 100) {
      window.alert("Average: " + ave + "; Excellent");
    } else if (ave >= 87 && ave < 94) {
      window.alert("Average: " + ave + "; Above Satisfactory");
    } else if (ave >= 80 && ave < 87) {
      window.alert("Average: " + ave + "; Satisfactory");
    } else if (ave >= 75 && ave < 80) {
      window.alert("Average: " + ave + "; Needs Improvement");
    } else if (ave >= 70 && ave < 75) {
      window.alert("Average: " + ave + "; Poor");
    } else {
      window.alert("Average: " + ave + "; Oh my gosh");
    }
  }