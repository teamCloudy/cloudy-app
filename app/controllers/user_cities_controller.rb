class UserCitiesController < ApplicationController
    def index
        cities = UserCity.all
        render json: cities
    end

    def create
        city = UserCity.create!(user_city_params)
        if city.valid?
            render json: city
        else
            render json: city.errors, status: 422
        end
    end

    def update
        city = UserCity.find(params[:id])
        city.update(user_city_params)
        if city.valid?
            render json: city
        else
            render json: city.errors, status: 422
        end
    end

    def destroy
        city = UserCity.find(params[:id])
        if city.destroy
          render json: city
        else
          render json: city.errors, status: 422
        end
      end

    private
    def user_city_params
        params.require(:user_city).permit(:user_id, :weather_id, :city_name, :country_name, :notes, :private)
    end
end