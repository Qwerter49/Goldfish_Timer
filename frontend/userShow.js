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
                    timerCard.classList.add('timer')
                    timerCard.textContent = timer.name 
                    timerSection.append(timerCard)
                })
        })
}

