user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password", username: "username")

# weather = Weather.create(temperature: 99, time: "00:00", date: "2022-11-15", current_weather: "Sunny", uv_index: 5, wind_speed: 6, humidity: 50, description: "lorem ipsum", icon: "url")

weathers_seeds = [
  {
    temperature: 78,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 3,
    wind_speed: 9,
    humidity: 0,
    description: "Normal tempearatures, and clear skies",
    icon: "url",
  },
  {
    temperature: 39,
    time: "01:00",
    date: "2022-11-28",
    current_weather: "Snowing",
    uv_index: 0,
    wind_speed: 12,
    humidity: 13,
    description: "Light snow, with partial sun",
    icon: "url",
  },
  {
    temperature: 60,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Windy",
    uv_index: 1,
    wind_speed: 12,
    humidity: 3,
    description: "Strong winds with low humidity",
    icon: "url",
  },
  {
    temperature: 37,
    time: "04:00",
    date: "2022-11-28",
    current_weather: "Tornado",
    uv_index: 0,
    wind_speed: 35,
    humidity: 28,
    description: "Tornado warning in this area until 3:30pm. Take shelter now. Check local media -NWS.",
    icon: "url",
  },
  {
    temperature: 77,
    time: "08:00",
    date: "2022-11-28",
    current_weather: "Partly Cloudy",
    uv_index: 1,
    wind_speed: 9,
    humidity: 13,
    description: "Low chances of rain",
    icon: "url",
  },
  {
    temperature: 80,
    time: "01:00",
    date: "2022-11-28",
    current_weather: "Earthquake",
    uv_index: 3,
    wind_speed: 12,
    humidity: 0,
    description: "EMS magnitude 2.5",
    icon: "url",
  },
  {
    temperature: 77,
    time: "08:00",
    date: "2022-11-28",
    current_weather: "Partly Cloudy",
    uv_index: 1,
    wind_speed: 18,
    humidity: 13,
    description: "Low chances of rain with strong winds",
    icon: "url",
  },
  {
    temperature: 40,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Hailing",
    uv_index: 5,
    wind_speed: 12,
    humidity: 11,
    description: "Light hail",
    icon: "url",
  },
  {
    temperature: 65,
    time: "05:00",
    date: "2022-11-28",
    current_weather: "Cloudy",
    uv_index: 0,
    wind_speed: 4,
    humidity: 10,
    description: "Low winds, and cool temperatures with partial sun",
    icon: "url",
  },
  {
    temperature: 43,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Stormy",
    uv_index: 0,
    wind_speed: 14,
    humidity: 38,
    description: "Light rain, and mild thunder",
    icon: "url",
  },
  {
    temperature: 64,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Rainy",
    uv_index: 0,
    wind_speed: 10,
    humidity: 33,
    description: "Light rain, with slight chance of sleet",
    icon: "url",
  },
  {
    temperature: 110,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 4,
    wind_speed: 14,
    humidity: 38,
    description: "Excessive heat warning issued until 8pm",
    icon: "url",
  },
  {
    temperature: 46,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Hailing",
    uv_index: 2,
    wind_speed: 80,
    humidity: 11,
    description: "Damaging wind, and high hail",
    icon: "url",
  },
  {
    temperature: 76,
    time: "07:00",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 2,
    wind_speed: 9,
    humidity: 0,
    description: "Normal tempearatures, clear skies, and a low pollen index",
    icon: "url",
  },
  {
    temperature: 90,
    time: "11:00",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 3,
    wind_speed: 7,
    humidity: 0,
    description: "High tempteratures, and Clear skies",
    icon: "url",
  }
]

weathers_seeds.each do |weather|
  Weather.create(weather)
  p weather
end

user_cities_seeds = [
    {
        weather_id: 1,
        city_name: "Mexico",
        country_name: "sad",
        notes: "notes",
        private: false
      },
      {
        weather_id: 2,
        city_name: "San Diego",
        country_name: "sad",
        notes: "notes",
        private: false
      },
      {
        weather_id: 3,
        city_name: "Bikini Bottom",
        country_name: "sad",
        notes: "notes",
        private: false
    }
]


user_cities_seeds.each do |city|
    user.user_cities.create(city)
    p city
end
