let Time = document.querySelector("#Time")
let Small = document.querySelector("#Small")



function CurrentTime() {
    let getTime = new Date();
    let hours = getTime.getHours()
    let minutes = getTime.getMinutes()
    let seconds = getTime.getSeconds()

    if (hours > 12) {
        hours = hours - 12
    }

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    Time.innerHTML = `${hours} : ${minutes}`
    Small.innerHTML = `${seconds}`
}

setInterval(() => {
    CurrentTime()
}, 1000);

