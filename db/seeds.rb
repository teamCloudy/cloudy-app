user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password", username: "username")

# weather = Weather.create(temperature: 99, time: "00:00", date: "2022-11-15", current_weather: "Sunny", uv_index: 5, wind_speed: 6, humidity: 50, description: "lorem ipsum", icon: "url")

weathers_seeds = [
  {
    temperature: 74,
    time: "07:00",
    date: "2022-08-13",
    current_weather: "Sunny",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../day.svg",
  },
  {
    temperature: 44,
    time: "01:00",
    date: "2022-08-13",
    current_weather: "Snowing",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../cloudy.svg",
  },
  {
    temperature: 60,
    time: "07:09",
    date: "2022-08-13",
    current_weather: "Windy",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../day.svg",
  },
  {
    temperature: 37,
    time: "04:59",
    date: "2022-08-13",
    current_weather: "Tornado",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../day.svg",
  },
  {
    temperature: 90,
    time: "08:09",
    date: "2022-08-13",
    current_weather: "Volcano Eruption",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../rainy-3.svg",
  },
  {
    temperature: 80,
    time: "01:09",
    date: "2022-08-13",
    current_weather: "Earthquake",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../thunder.svg",
  },
  {
    temperature: 101,
    time: "07:56",
    date: "2022-08-13",
    current_weather: "Hailing",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../snowy-1.svg",
  },
  {
    temperature: 65,
    time: "05:09",
    date: "2022-08-13",
    current_weather: "Normal",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../assets/images/cloudy.svg",
  },
  {
    temperature: 43,
    time: "07:09",
    date: "2022-08-13",
    current_weather: "Storm",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../night.svg",
  },
  {
    temperature: 99,
    time: "11:09",
    date: "2022-08-13",
    current_weather: "Wild Fire",
    uv_index: 5,
    wind_speed: 12,
    humidity: 28,
    description: "lorem ipsum",
    icon: "../thunder.svg",
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
