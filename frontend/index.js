fetch("http://localhost:3000/user_timers")
    .then(response => response.json())
    .then(timers => console.log(timers))