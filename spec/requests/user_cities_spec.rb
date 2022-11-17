require 'rails_helper'

RSpec.describe "UserCities", type: :request do
  let(:user) { User.create email: "test@gmail.com", password: "password", password_confirmation: "password", username: "testuser" }

  let(:weather) { Weather.create(temperature: 99, time: "00:00", date: "2022-11-15", current_weather: "Sunny", uv_index: 5, wind_speed: 6, humidity: 50, description: "lorem ipsum", icon: "url") }

  # -----index-----
  describe "GET /index" do
    it "gets all the cities" do
      city = user.user_cities.new(
        user_id: user.id,
        weather_id: weather.id,
        city_name: "Phoenix",
        country_name: "USA",
        notes: "Hot, dry, and beautiful here"
      )
      city.save
      get "/user_cities"
      
      cities = JSON.parse(response.body)
      p "LOOK OVER HERE PLS", response.body
      expect(cities.length).to eq 1
      expect(response).to have_http_status(200)
      city = cities.first
      expect(city["city_name"]).to eq "Phoenix"
      expect(city["country_name"]).to eq "USA"
      expect(city["notes"]).to eq "Hot, dry, and beautiful here"
    end
  end

  # -----create-----
  describe "POST /create" do
    it "creates a new city" do
      user_city_params = {
        user_city: {
          user_id: user.id,
          weather_id: weather.id,
          city_name: "San Jose",
          country_name: "United States",
          notes: "notes blah blah"
        }
      }

      post "/user_cities", params: user_city_params
      JSON.parse(response.body)
      city = UserCity.first
      expect(city["city_name"]).to eq "San Jose"
      expect(city["country_name"]).to eq "United States"
      expect(city["notes"]).to eq "notes blah blah"
    end
    it 'cannot create a new card without a city' do
      city_params = {
        user_city: {
          user_id: user.id,
          weather_id: weather.id,
          country_name: "United States"
        }
      }
      post '/user_cities', params: city_params
      error_response = JSON.parse(response.body)
      expect(error_response['city_name']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end
    it 'cannot create a new card without a country' do
      city_params = {
        user_city: {
          user_id: user.id,
          weather_id: weather.id,
          city_name: "San Jose"
        }
      }
      post '/user_cities', params: city_params
      error_response = JSON.parse(response.body)
      expect(error_response['country_name']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end
  end

  # -----update-----
  describe "PATCH /update" do
    it("updates city listing") do
      user_city_params = {
        user_city: {
          user_id: user.id,
          weather_id: weather.id,
          city_name: "San Jose",
          country_name: "United States",
          notes: "notes blah blah"
        }
      }

      post "/user_cities", params: user_city_params
      city = UserCity.first
      JSON.parse(response.body)

      update_params = {
        user_city: {
          user_id: user.id,
          weather_id: weather.id,
          city_name: "Atlanta",
          country_name: "USA",
          notes: "TWD originated here"
        }
      }

      patch "/user_cities/#{city.id}", params: update_params
      city = UserCity.first
      expect(response).to have_http_status(200)
      expect(city.city_name).to eq "Atlanta"
      expect(city.country_name).to eq "USA"
      expect(city.notes).to eq "TWD originated here"
    end
  end

  # -----destroy-----

end
