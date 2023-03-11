const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const antePostNoonEl = document.getElementById("ante-post-noon");

function updateClock(){
    const dt = new Date();
    let h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();
    let antePostNoon = h >= 12?"PM":"AM";

    if(h > 12){
        h = h - 12
    }

    h = h < 10? "0" + h : h;
    m = m < 10? "0" + m : m;
    s = s < 10? "0" + s : s;

    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    antePostNoonEl.innerText = antePostNoon;
    setTimeout(()=>{
        updateClock();
    },1000)

}

updateClock();