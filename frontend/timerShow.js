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
        let minutes = timerLength
        let secondsRemaining = minutes * 60
        let displayTimer;
        startbtn.addEventListener('click', function() {
            displayTimer = setInterval(tick, 1000)
            function tick() {
                let min = Math.floor(secondsRemaining / 60) 
                let sec = secondsRemaining - (min * 60)
                if (sec < 10) {
                    sec = "0" + sec
                }
                let timer = min.toString() + ":" + sec
                h2.textContent = timer
                if (secondsRemaining === 0){
                    alert("Timer is up!")
                    clearInterval(displayTimer)
                }
                secondsRemaining--
            }
        })
        const pausebtn = document.querySelector("#pause")
        pausebtn.addEventListener('click', function() {
            clearInterval(displayTimer)
        })
    })


