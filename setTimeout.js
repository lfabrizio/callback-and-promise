function callMeWhenYoureDone() {
    console.log("yay, I got your call");
}

const timeInMiliSeconds = 1000;
setTimeout(callMeWhenYoureDone, timeInMiliSeconds);