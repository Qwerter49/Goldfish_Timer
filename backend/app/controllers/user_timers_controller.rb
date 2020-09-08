class UserTimersController < ApplicationController
    def index 
        @usertimers = UserTimer.all 
        render json: @usertimers
    end

    def show
        @usertimer = UserTimer.find(params[:id])

        render json: @usertimer
    end
end
