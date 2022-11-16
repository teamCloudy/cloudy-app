class UserCitiesController < ApplicationController
    def index
        cities = UserCity.all
        render json: cities
    end

    def create
    end

    def update
    end

    def destroy
    end
end

private
def user_city_params
end