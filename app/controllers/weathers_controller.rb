class WeathersController < ApplicationController
  def index
    weathers = Weather.all
    render json: weathers
  end
end
