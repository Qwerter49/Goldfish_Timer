UserTimer.destroy_all
User.destroy_all
Timer.destroy_all


jay = User.create(username: "Jay", email: "jay.oliver@gmail.com", password: "Latom")
sydney = User.create(username: "Sydney", email: "sydney.goldberg@gmail.com", password: "Plus Ultra")

pomodoro = Timer.create(name: "Pomodoro", length: 25)
two_minute = Timer.create(name: "One Minute", length: 1)
ten_minute = Timer.create(name: "Ten Minute", length: 10)

UserTimer.create(user: jay, timer: two_minute)
UserTimer.create(user: jay, timer: ten_minute)
UserTimer.create(user: sydney, timer: pomodoro)
UserTimer.create(user: sydney, timer: two_minute)
UserTimer.create(user: sydney, timer: ten_minute)


