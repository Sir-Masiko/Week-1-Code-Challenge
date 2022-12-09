const calculate = () => {
    let speed = document.getElementById("#speeeed");
    let demerit = ""
    if (speed <= 70) {
        demerit = "Ok"
    }
    if (speed >= 75 && speed < 80) {
        demerit = "1"
    }
    if (speed >= 80 && speed < 85) {
        demerit = "2"
    }
    if (speed >= 85 && speed < 90) {
        demerit = "3"
    }
    if (speed >= 90 && speed < 95) {
        demerit = "4"
    }
    if (speed >= 95 && speed < 100) {
        demerit = "5"
    }
    if (speed >= 100 && speed < 105) {
        demerit = "6"
    }
    if (speed >= 105 && speed < 110) {
        demerit = "7"
    }
    if (speed >= 110 && speed < 115) {
        demerit = "8"
    }
    if (speed >= 115 && speed < 120) {
        demerit = "9"
    }
    if (speed >= 120 && speed < 125) {
        demerit = "10"
    }
    if (speed >= 125 && speed < 130) {
        demerit = "11"
    }
    if (speed >= 130 && speed < 135) {
        demerit = "12"
    }
    if (speed > 135) {
        demerit = "Licence Suspended"
    }
    if  (speed >= 0) {
        document.querySelector(
            "#showdata"
        ).innerHTML = `Your demerit points are ${demerit}`;
    }
}

