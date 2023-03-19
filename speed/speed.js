function calculateDemeritPoints(speed) {
    if (speed<70) {
        console.log("ok");
    }
    else{
        demeritPoints = ((speed-70)/5);
    }
    if (demeritPoints>12) {
        console.log("License Suspended");
    }
    else{
        console.log(demeritPoints);
    }
}
calculateDemeritPoints(120);