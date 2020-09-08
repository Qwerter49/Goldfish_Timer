class Timer < ApplicationRecord
    has_many :user_timers
    has_many users, through :user_timers
end
