user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password", username: "username")

weather = Weather.create(temperature: 99, time: "00:00", date: "2022-11-15", current_weather: "Sunny", uv_index: 5, wind_speed: 6, humidity: 50, description: "lorem ipsum", icon: "url")


user_cities_seeds = [
    {
        weather_id: weather.id,
        city_name: "Mexico",
        country_name: "sad",
        notes: "lorem itsum"
    },
    {
        weather_id: weather.id,
         city_name: "San Diego",
         country_name: "sad",
         notes: "lorem itsum"
    },
    {
        weather_id: weather.id,
        city_name: "Bikini Bottom",
        country_name: "sad",
        notes: "lorem itsum"
    }
]

user_cities_seeds.each do |city|
    user.user_cities.create(city)
    p city
end


# weathers_seeds = [
#     {
#     temperature: 74,
#     time: 7:00 
#     date:
#     current_weather:
#     uv_index:
#     wind_speed:
#     humidity:
#     description: "lorem ipsum"
#     },
# ]

# weathers_seeds.each do ||
#     user.
# end