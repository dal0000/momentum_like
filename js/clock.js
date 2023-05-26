const clock = document.querySelector('h2#clock');

function clockShow(){
    const presentTime = new Date();
    const hours = String(presentTime.getHours()).padStart(2,'0');
    const minutes = String(presentTime.getMinutes()).padStart(2,'0');
    const seconds = String(presentTime.getSeconds()).padStart(2,'0');
    clock.innerHTML=`${hours}:${minutes}:${seconds}`;
}
clockShow();
setInterval(clockShow, 1000);