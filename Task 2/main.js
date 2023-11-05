let mark = parseInt(prompt('Please enter the number'));
let grade;

switch (true) {
    case mark >= 90:
        grade = "A+";
        break;
    case mark >= 80:
        grade = "A";
        break;
    case mark >= 70:
        grade = "B";
        break;
    case mark >= 60:
        grade = "C";
        break;
    case mark >= 50:
        grade = "D";
        break;
    default:
        grade = "Fail";
}

document.write(grade);
