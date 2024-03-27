// 화살표 함수 연습

let grade_to_score = (grade) => {
    switch(grade) {
        case "A+":
            return 4.5;
            break;
        case "A0":
            return 4.0;
            break;
        case "B+":
            return 3.5;
            break;
        case "B0":
            return 3.0;
            break;
        case "C+":
            return 2.5;
            break;
        case "C0":
            return 2.0;
            break;
        case "D+":
            return 1.5;
            break;
        case "D0":
            return 1.0;
            break;
        default:
            return 0.0;  

    }
}

const readline = require("linebyline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

for (i = 0; i < 20; i++) {
    var stu_grade = rl.question("What is yout grade?", (answer) => {
        console.log(`Then your score is ${grade_to_score(stu_grade)}!`);
        rl.close();
    })
}