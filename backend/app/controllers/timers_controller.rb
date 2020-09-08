class TimersController < ApplicationController
    def index 
        @timers = Timer.all 
        render json: @timers
    end

    def show
        @timer = Timer.find(params[:id])

        render json: @timer
    end
end
