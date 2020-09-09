    let params = new URLSearchParams(window.location.search)
    let id = params.get('id')

    const timerSection = document.querySelector('section')
    const title = document.querySelector('h1')
    fetch(`http://localhost:3000/users/${id}`)
        .then(response => response.json())
        .then(user => {renderTimers(user)})

    function renderTimers(user) {
        title.textContent = `${user.username}'s timers:`
            user.user_timers.forEach(user_timer => {
                let timer_id = user_timer.timer_id
                fetch(`http://localhost:3000/timers/${timer_id}`)
                    .then(response => response.json())
                    .then(timer => {
                        const timerCard = document.createElement('div')
                        const timerString = document.createElement('h3')
                        timerCard.classList.add("timer")
                        timerString.textContent = timer.name 
                        timerSection.append(timerCard)
                        timerCard.append(timerString)
                        let timeLeft = document.querySelector('.timer')
                        
                        let setTimer = setInterval(tick(timer.length), 1000)
                        //console.log(timer.id)
                        function tick (timerLength) {
                            let minutes = timerLength
                            let secondsRemaining = minutes * 60
                            let min = Math.floor(secondsRemaining / 60) 
                            let sec = secondsRemaining - (min * 60)
                        
                            if (sec < 10) {
                                sec = "0" + sec;
                            }
                            
                            let timer = min.toString() + ":" + sec;
                        
                            console.log(timer)
                        
                            if (secondsRemaining === 0){
                                console.log("done");
                                clearInterval(setTimer);
                            }
                            secondsRemaining--;
                            } 
                    })
            })
            //console.log(user.user_timers)
    }  


    

