user = User.where(email: "test@example.com").first_or_create(password: "password", password_confirmation: "password", username: "username")

# weather = Weather.create(temperature: 99, time: "00:00", date: "2022-11-15", current_weather: "Sunny", uv_index: 5, wind_speed: 6, humidity: 50, description: "lorem ipsum", icon: "url")

weathers_seeds = [
  # NEW YORK CITY
  {
    temperature: 52,
    time: "10:00AM",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 1,
    wind_speed: 11,
    humidity: 57,
    description: "Partly Cloudy",
    icon: "../day.svg",
  },
  # SYDNEY
  {
    temperature: 68,
    time: "2:00AM",
    date: "2022-11-28",
    current_weather: "Cloudy",
    uv_index: 2,
    wind_speed: 14,
    humidity: 64,
    description: "Overcast with very low chance of rain",
    icon: "../day.svg",
  },
  # TOKYO
  {
    temperature: 59,
    time: "12:00AM",
    date: "2022-11-28",
    current_weather: "Partly Cloudy",
    uv_index: 3,
    wind_speed: 9,
    humidity: 50,
    description: "Partly cloudy with periodically clear skies",
    icon: "../day.svg",
  },
  # CHICAGO
  {
    temperature: 78,
    time: "9:00AM",
    date: "2022-11-28",
    current_weather: "Partly Cloudy",
    uv_index: 2,
    wind_speed: 9,
    humidity: 66,
    description: "Normal temperatures, and clear skies",
    icon: "../day.svg",
  },
  # PARIS
  {
    temperature: 52,
    time: "4:00PM",
    date: "2022-11-28",
    current_weather: "Scattered Showers",
    uv_index: 0,
    wind_speed: 5,
    humidity: 87,
    description: "Patchy light drizzle",
    icon: "../day.svg",
  },
  # HONG KONG
  {
    temperature: 78,
    time: "11:00PM",
    date: "2022-11-28",
    current_weather: "Scattered Thunderstorms",
    uv_index: 1,
    wind_speed: 15,
    humidity: 91,
    description: "Mostly warm conditions with high humidity",
    icon: "../day.svg",
  },
  # LOS ANGELES
  {
    temperature: 78,
    time: "7:00AM",
    date: "2022-11-28",
    current_weather: "Partly Cloudy",
    uv_index: 1,
    wind_speed: 5,
    humidity: 74,
    description: "Rolling clouds with normal scattered conditions",
    icon: "../day.svg",
  },
  # DUBAI
  {
    temperature: 82,
    time: "7:00PM",
    date: "2022-11-28",
    current_weather: "Clear",
    uv_index: 5,
    wind_speed: 9,
    humidity: 56,
    description: "Warm temperatures and clear skies",
    icon: "../day.svg",
  },
  # LONDON
  {
    temperature: 78,
    time: "3:00PM",
    date: "2022-11-28",
    current_weather: "Overcast",
    uv_index: 1,
    wind_speed: 3,
    humidity: 74,
    description: "Cold temperatures with chance of rolling showers",
    icon: "../day.svg",
  },
  {
    temperature: 78,
    time: "7:00AM",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 3,
    wind_speed: 9,
    humidity: 0,
    description: "Normal temperatures, and clear skies",
    icon: "../day.svg",
  },
  {
    temperature: 39,
    time: "1:00AM",
    date: "2022-11-28",
    current_weather: "Snowing",
    uv_index: 0,
    wind_speed: 12,
    humidity: 13,
    description: "Light snow, with partial sun",
    icon: "../cloudy.svg",
  },
  {
    temperature: 60,
    time: "7:00AM",
    date: "2022-11-28",
    current_weather: "Windy",
    uv_index: 1,
    wind_speed: 12,
    humidity: 3,
    description: "Strong winds with low humidity",
    icon: "../day.svg",
  },
  {
    temperature: 37,
    time: "4:00AM",
    date: "2022-11-28",
    current_weather: "Tornado",
    uv_index: 0,
    wind_speed: 35,
    humidity: 28,
    description: "Tornado warning in this area until 3:30pm. Take shelter now. Check local media -NWS.",
    icon: "../day.svg",
  },
  {
    temperature: 77,
    time: "8:00AM",
    date: "2022-11-28",
    current_weather: "Partly Cloudy",
    uv_index: 1,
    wind_speed: 9,
    humidity: 13,
    description: "Low chances of rain",
    icon: "../rainy-3.svg",
  },
  {
    temperature: 80,
    time: "1:00AM",
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
    time: "8:00AM",
    date: "2022-11-28",
    current_weather: "Partly Cloudy",
    uv_index: 1,
    wind_speed: 18,
    humidity: 13,
    description: "Low chances of rain with strong winds",
    icon: "../thunder.svg",
  },
  {
    temperature: 40,
    time: "10:00AM",
    date: "2022-11-28",
    current_weather: "Hailing",
    uv_index: 5,
    wind_speed: 12,
    humidity: 11,
    description: "Light hail",
    icon: "../snowy-1.svg",
  },
  {
    temperature: 65,
    time: "5:00AM",
    date: "2022-11-28",
    current_weather: "Cloudy",
    uv_index: 0,
    wind_speed: 4,
    humidity: 10,
    description: "Low winds, and cool temperatures with partial sun",
    icon: "../assets/images/cloudy.svg",
  },
  {
    temperature: 43,
    time: "3:00AM",
    date: "2022-11-28",
    current_weather: "Stormy",
    uv_index: 0,
    wind_speed: 14,
    humidity: 38,
    description: "Light rain, and mild thunder",
    icon: "../night.svg",
  },
  {
    temperature: 64,
    time: "12:00AM",
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
    time: "9:00AM",
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
    time: "4:00AM",
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
    time: "11:00AM",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 2,
    wind_speed: 9,
    humidity: 0,
    description: "Normal temperatures, clear skies, and a low pollen index",
    icon: "url",
  },
  {
    temperature: 90,
    time: "1:00AM",
    date: "2022-11-28",
    current_weather: "Sunny",
    uv_index: 3,
    wind_speed: 7,
    humidity: 0,
    description: "High temperatures, and clear skies",
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
    city_name: "New York City",
    country_name: "United States",
    notes: "",
    private: false
  },
  {
    weather_id: 2,
    city_name: "Sidney",
    country_name: "Australia",
    notes: "",
    private: false
  },
  {
    weather_id: 3,
    city_name: "Tokyo",
    country_name: "Japan",
    notes: "",
    private: false
  },
  {
    weather_id: 4,
    city_name: "Chicago",
    country_name: "United States",
    notes: "",
    private: false
  },
  {
    weather_id: 5,
    city_name: "Paris",
    country_name: "France",
    notes: "",
    private: false
  },
  {
    weather_id: 6,
    city_name: "Hong Kong",
    country_name: "China",
    notes: "",
    private: false
  },
  {
    weather_id: 7,
    city_name: "Los Angeles",
    country_name: "United States",
    notes: "",
    private: false
  },
  {
    weather_id: 8,
    city_name: "Dubai",
    country_name: "United Arab Emirates",
    notes: "",
    private: false
  },
  {
    weather_id: 9,
    city_name: "London",
    country_name: "United Kingdom",
    notes: "",
    private: false
  }
]


user_cities_seeds.each do |city|
    user.user_cities.create(city)
    p city
end
