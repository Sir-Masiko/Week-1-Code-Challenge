const calculate = () => {
    let marks = document.getElementById("#grades");
    let grades = ""
    if (marks <= 100 && marks >= 80) {
        grades = "A";
    }
    if (marks <= 79 && marks >= 60) {
        grades = "B";
    } 
    if (marks <= 59 && marks >= 50) {
        grades = "C";
    } 
    if (marks <= 49 && marks >= 40) {
        grades = "D";
    } 
    if (marks < 40) {
        grades = "E";
    }
    if  (marks >= 0) {
        document.querySelector(
            "#showdata"
        ).innerHTML = `Your grade is ${grades}`;
    }
}   