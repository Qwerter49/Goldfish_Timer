let params = new URLSearchParams(window.location.search)
let id = params.get('id')

const timerSection = document.querySelector('section')

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(user => {
        const displayName = document.createElement('h2')
        displayName.textContent = user.username
        timerSection.append(displayName)
        user.user_timers.forEach(user_timer => {
            let timer_id = user_timer.timer_id
            fetch(`http://localhost:3000/timers/${timer_id}`)
                .then(response => response.json())
                .then(timer => {
                    const timerName = document.createElement('h2')
                    timerName.textContent = timer.name 
                    timerSection.append(timerName)
                })
        })
    })