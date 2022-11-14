
#user city database
rails g resource User_city user_id:integer weather_id:integer city_name:string country_name:string notes:text 

#weather database
rails g resource Weather temperature:integer time:time date:date current_weather:string uv_index:integer wind_speed:integer humidity:integer description:string

