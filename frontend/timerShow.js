let params = new URLSearchParams(window.location.search)
let id = params.get('id')

fetch(`http://localhost:3000/timers/${id}`)
    .then(response => response.json())
    .then(timer => {
        const name = document.querySelector("#name")
        name.textContent = timer.name
        timerLength = timer.length
        let h2 = document.querySelector("#timer")
        h2.textContent = timer.length + ":00"
        const startbtn = document.querySelector("#start")
        startbtn.addEventListener('click', function() {
            let minutes = timerLength
            let secondsRemaining = minutes * 60
            let setTimer = setInterval(tick, 1000)   
            function tick() {
                            let min = Math.floor(secondsRemaining / 60) 
                            let sec = secondsRemaining - (min * 60)
                            if (sec < 10) {
                                sec = "0" + sec;
                            }
                            let timer = min.toString() + ":" + sec;
                                    h2.textContent = timer
                            if (secondsRemaining === 0){
                                alert("Timer is up!")
                                clearInterval(setTimer);
                            }
                            secondsRemaining--;
                        }
                        })
    })


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