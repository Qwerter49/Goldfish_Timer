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
                fetch(`http://localhost:3000/timers/${user_timer.timer_id}`)
                    .then(response => response.json())
                    .then(timer => {
                        const timerCard = document.createElement('div')
                        const timerString = document.createElement('h3')
                        timerString.innerHTML = `<a href="timerShow.html?id=${timer.id}">${timer.name}</a>`
                        timerSection.append(timerCard)
                        timerCard.append(timerString)
                            } 
                    )
            })
        }


