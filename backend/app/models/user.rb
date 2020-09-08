class User < ApplicationRecord
    has_many :user_timers
    has_many :timers, through: :user_timers
end
