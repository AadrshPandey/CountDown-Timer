document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.querySelector('.time');
    const setTime = document.querySelector('.button');
    const output = document.querySelector('.digit');
    const progress = document.querySelector('.progressStatus');

    const days1 = document.querySelector('#daysNum1');
    const days2 = document.querySelector('#daysNum2');   

    const hours1 = document.querySelector('#hoursNum1');
    const hours2 = document.querySelector('#hoursNum2');

    const minutes1 = document.querySelector('#minutesNum1');
    const minutes2 = document.querySelector('#minutesNum2');

    const seconds1 = document.querySelector('#secondsNum1');
    const seconds2 = document.querySelector('#secondsNum2');

    let interval = null;

    setTime.addEventListener('click', function(){

        if(interval){
            clearInterval(interval);
        }

        const days = parseInt(document.querySelector('#setDays').value)||0;
        const hours = parseInt(document.querySelector('#setHours').value)||0;
        const minutes = parseInt(document.querySelector('#setMinutes').value)||0;
        const seconds = parseInt(document.querySelector('#setSeconds').value)||0;

        const totalSeconds = 24*60*60*days + 60*60*hours + 60*minutes + seconds;

        if(totalSeconds<=0){
            alert("Enter the valid input");
        }
        else{
            const button = document.querySelector('.button');
            button.classList.remove('clicked');
            void button.offsetWidth;
            button.classList.add('clicked');

            days1.innerHTML = Math.floor(days/10);
            days2.innerHTML = days%10;

            hours1.innerHTML = Math.floor(hours/10);
            hours2.innerHTML = hours%10;

            minutes1.innerHTML = Math.floor(minutes/10);
            minutes2.innerHTML = minutes%10;

            seconds1.innerHTML = Math.floor(seconds/10);
            seconds2.innerHTML = seconds%10;

            let currentSeconds = totalSeconds;

            interval = setInterval(()=>{

                if(progress.style.width!=null){
                    progress.style.width = "0%";
                }

                currentSeconds--;
                if(currentSeconds<=0){
                    clearInterval(interval);
                }
        
                progress.style.width = `${Math.floor(((totalSeconds-currentSeconds)/totalSeconds)*100)}%`;
                progress.textContent = `${Math.floor(((totalSeconds-currentSeconds)/totalSeconds)*100)}%`;
                
                let d = Math.floor(currentSeconds / (24 * 60 * 60));
                let hrs = Math.floor((currentSeconds % (24 * 60 * 60)) / 3600);
                let min = Math.floor((currentSeconds % 3600) / 60);
                let s = currentSeconds % 60;

                days1.innerHTML = Math.floor(d/10);
                days2.innerHTML = d%10;

                hours1.innerHTML = Math.floor(hrs/10);
                hours2.innerHTML = hrs%10;

                minutes1.innerHTML = Math.floor(min/10);
                minutes2.innerHTML = min%10;
                
                seconds1.innerHTML = Math.floor(s/10);
                seconds2.innerHTML = s%10;
            },1000);
        }
    })
})