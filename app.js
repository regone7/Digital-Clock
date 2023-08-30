function d_clock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let am_pm = 'AM';

    if(hours == 0){
        hours = 12;
    }
    else if(hours>12){
        hours = hours-12;
        let am_pm = 'PM';
    }

    hours = hours<10 ? '0' + hours : hours;
    min = min<10 ? '0' + min : min;
    sec = sec<10 ? '0' + sec : sec;



    let final = `${hours}: ${min}: ${sec}`;
    document.getElementById('time').innerText = final;
    document.querySelector('small').innerText = am_pm;

    setInterval(d_clock, 1000);

}
d_clock();