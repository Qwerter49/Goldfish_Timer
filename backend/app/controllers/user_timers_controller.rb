class UserTimersController < ApplicationController
    def index 
        @usertimers = UserTimers.all 
        render json: @usertimers
    end

    def show
        @usertimer = UserTimers.find(params[:id])

        render json: @usertimer
    end
end
