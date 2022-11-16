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

  # -----update-----

  # -----destroy-----

end
