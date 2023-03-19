//const mark = prompt("Enter the student's mark(between 0 and 100)");
//let grade;
function grades(mark) {
    
if (mark>79) {
    grade = `A`;
}
else if (mark>60) {
    grade = `B`;
}
else if (mark>50) {
    grade = `C`;
}
else if (mark>40) {
    grade = `D`;
}
else {
    grade = `E`;
}

console.log(grade);
}
grades(70);
