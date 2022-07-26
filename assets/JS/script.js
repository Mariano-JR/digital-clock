const currentTime = () => {
    const h1 = document.querySelector("h1");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss}`;
    h1.innerHTML = time;
};

const currentDate = () => {
    const h2 = document.querySelector("h2");

    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();

    dd = dd < 10 ? `0${dd}` : dd;
    mm = mm < 10 ? `0${mm}` : mm;

    let cal = `${dd}/${mm}/${yy}`;
    h2.innerHTML = cal;
}


currentTime();
currentDate();
setInterval(currentTime, 1000);