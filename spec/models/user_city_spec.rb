require 'rails_helper'

RSpec.describe UserCity, type: :model do
  let(:user) { User.create email:"test@gmail.com", password:"password", password_confirmation:"password" }

  it "should have a valid city name" do
    city = user.user_cities.new(
      country_name: "United States of America",
      notes: "We love high rent!"
    )
    city.validate
    expect(city.errors[:city_name]).to include "can't be blank"
  end
    
  it "should have a valid country name" do
    country = user.user_cities.new(
      city_name: "Dallas",
      notes: "Let's go cowboys"
    ) 
    country.validate
    expect(country.errors[:country_name]).to include "can't be blank"
  end
end
