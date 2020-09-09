let params = new URLSearchParams(window.location.search)
let id = params.get('id')

fetch(`http://localhost:3000/timers/${id}`)
    .then(response => response.json())
    .then(timer => {
        const name = document.querySelector("#name")
        name.textContent = timer.name
    })

window.addEventListener('DOMContentLoaded', (event) => {
    const timer = document.querySelector("#timer")
    //let setTimer = setInterval(tick(), 1000)
    const startbtn = document.querySelector("#start")
    startbtn.addEventListener('click', function() {
        startCountDown()
    })
    
});

// let setTimer = setInterval(tick(timer.length), 1000)
//                         function tick (timerLength) {
//                             let minutes = timerLength
//                             let secondsRemaining = minutes * 60
//                             let min = Math.floor(secondsRemaining / 60) 
//                             let sec = secondsRemaining - (min * 60)
//                             if (sec < 10) {
//                                 sec = "0" + sec;
//                             }
                            
//                             let timer = min.toString() + ":" + sec;
                        
//                             console.log(timer)
                        
//                             if (secondsRemaining === 0){
//                                 console.log("done");
//                                 clearInterval(setTimer);
//                             }
//                             secondsRemaining--;