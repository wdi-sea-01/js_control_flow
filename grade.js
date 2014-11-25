//Grade from an array

var grade = [30, 60, 90, 81, 75]

for (i=0; i<grade.length; i++) {
  if (grade[i] >= 90 ) {
  console.log("Grade: A");
  } else if (grade[i] >=80) {
  console.log("Grade: B");
  } else if (grade[i] >=70) {
  console.log("Grade: C");
  } else if (grade[i] >=60) {
  console.log("Grade: D");
  } else {
  console.log("Grade: F");
  }
}
