const userSection = document.querySelector("section")
fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(user)
            const userName = document.createElement('h2')
            userName.innerHTML = `<a href="userShow.html?id=${user.id}">${user.username}</a>`
            userSection.append(userName)
        })
    })
