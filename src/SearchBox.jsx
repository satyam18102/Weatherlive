import { Input } from "@chakra-ui/react"
import { Field } from "./components/ui/field"
import { Button,Heading } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import { useState } from "react"
import './SearchBox.css';


export default function SearchBox({ updateInfo }) {
  let API_URL="https://dataservice.accuweather.com/locations/v1/"
  let WEATHER_URL="https://dataservice.accuweather.com/forecasts/v1/hourly/12hour"
  let DAILY_URL="https://dataservice.accuweather.com/forecasts/v1/daily/1day"
  let MIN_URL="https://dataservice.accuweather.com/forecasts/v1/minute"
  let API_KEY="Pyfz37xZ5AGCUdlZVIXD1z3SL4MbKoYQ"
  let API_KEY2="CXLGxRfK3GhLzr2DHfZAoFgnzWi6Bqye"
  let API_MIN="pxKfMDtBdxEgAAHtgEwWZAeVsNRKs1Xe";

  let getWeatherInfo= async()=>{
    if (city==='Manali'){
      city="Muhal Manali"
    }
  let location= await fetch(`${API_URL}search?q=${city}&apikey=${API_KEY2}`);
  let jsonloc= await location.json();
  let loc=jsonloc[0].Key;
  let lat=jsonloc[0].GeoPosition.Latitude;
  let long=jsonloc[0].GeoPosition.Longitude;
  let min=await fetch(`${MIN_URL}?q=${lat}%2C${long}&apikey=${API_MIN}`)
  let minRes=await min.json()
  let response=await fetch(`${WEATHER_URL}/${loc}?apikey=${API_KEY2}&details=true&metric=true`);
  let jsonResponse=await response.json();
  let daily=await fetch(`${DAILY_URL}/${loc}?apikey=${API_KEY}&details=true&metric=true`);
  let dailyResponse=await daily.json();
  let result=[
    {
      city:city,
      min:minRes.Summary.Phrase,
    },
    {
      time:new Date(jsonResponse[0].DateTime).getHours(),
      temp:jsonResponse[0].Temperature.Value,
      real:jsonResponse[0].RealFeelTemperature.Value,
      rain:jsonResponse[0].PrecipitationProbability,
      wind:jsonResponse[0].Wind.Speed.Value,
      deg:jsonResponse[0].Wind.Direction.Degrees,
      direction:jsonResponse[0].Wind.Direction.English,
      cloud:jsonResponse[0].CloudCover,
      visible:jsonResponse[0].Visibility.Value,
      dew:jsonResponse[0].DewPoint.Value,
      humidity:jsonResponse[0].RelativeHumidity,
      num:jsonResponse[0].WeatherIcon,
      iconPhrase:jsonResponse[0].IconPhrase,
    },
    {
      time:new Date(jsonResponse[1].DateTime).getHours(),
      temp:jsonResponse[1].Temperature.Value,
      real:jsonResponse[1].RealFeelTemperature.Value,
      rain:jsonResponse[1].PrecipitationProbability,
      wind:jsonResponse[1].Wind.Speed.Value,
      deg:jsonResponse[1].Wind.Direction.Degrees,
      direction:jsonResponse[1].Wind.Direction.English,
      cloud:jsonResponse[1].CloudCover,
      visible:jsonResponse[1].Visibility.Value,
      dew:jsonResponse[1].DewPoint.Value,
      humidity:jsonResponse[1].RelativeHumidity,
      num:jsonResponse[1].WeatherIcon,
      iconPhrase:jsonResponse[1].IconPhrase,
    },
    {
      time:new Date(jsonResponse[2].DateTime).getHours(),
      temp:jsonResponse[2].Temperature.Value,
      real:jsonResponse[2].RealFeelTemperature.Value,
      rain:jsonResponse[2].PrecipitationProbability,
      wind:jsonResponse[2].Wind.Speed.Value,
      deg:jsonResponse[2].Wind.Direction.Degrees,
      direction:jsonResponse[2].Wind.Direction.English,
      cloud:jsonResponse[2].CloudCover,
      visible:jsonResponse[2].Visibility.Value,
      dew:jsonResponse[2].DewPoint.Value,
      humidity:jsonResponse[2].RelativeHumidity,
      num:jsonResponse[2].WeatherIcon,
      iconPhrase:jsonResponse[2].IconPhrase,
    },
    {
      time:new Date(jsonResponse[3].DateTime).getHours(),
      temp:jsonResponse[3].Temperature.Value,
      real:jsonResponse[3].RealFeelTemperature.Value,
      rain:jsonResponse[3].PrecipitationProbability,
      wind:jsonResponse[3].Wind.Speed.Value,
      deg:jsonResponse[3].Wind.Direction.Degrees,
      direction:jsonResponse[3].Wind.Direction.English,
      cloud:jsonResponse[3].CloudCover,
      visible:jsonResponse[3].Visibility.Value,
      dew:jsonResponse[3].DewPoint.Value,
      humidity:jsonResponse[3].RelativeHumidity,
      num:jsonResponse[3].WeatherIcon,
      iconPhrase:jsonResponse[3].IconPhrase,
    },
    {
      time:new Date(jsonResponse[4].DateTime).getHours(),
      temp:jsonResponse[4].Temperature.Value,
      real:jsonResponse[4].RealFeelTemperature.Value,
      rain:jsonResponse[4].PrecipitationProbability,
      wind:jsonResponse[4].Wind.Speed.Value,
      deg:jsonResponse[4].Wind.Direction.Degrees,
      direction:jsonResponse[4].Wind.Direction.English,
      cloud:jsonResponse[4].CloudCover,
      visible:jsonResponse[4].Visibility.Value,
      dew:jsonResponse[4].DewPoint.Value,
      humidity:jsonResponse[4].RelativeHumidity,
      num:jsonResponse[4].WeatherIcon,
      iconPhrase:jsonResponse[4].IconPhrase,
    },
    {
      time:new Date(jsonResponse[5].DateTime).getHours(),
      temp:jsonResponse[5].Temperature.Value,
      real:jsonResponse[5].RealFeelTemperature.Value,
      rain:jsonResponse[5].PrecipitationProbability,
      wind:jsonResponse[5].Wind.Speed.Value,
      deg:jsonResponse[5].Wind.Direction.Degrees,
      direction:jsonResponse[5].Wind.Direction.English,
      cloud:jsonResponse[5].CloudCover,
      visible:jsonResponse[5].Visibility.Value,
      dew:jsonResponse[5].DewPoint.Value,
      humidity:jsonResponse[5].RelativeHumidity,
      num:jsonResponse[5].WeatherIcon,
      iconPhrase:jsonResponse[5].IconPhrase,
    },
    {
      time:new Date(jsonResponse[6].DateTime).getHours(),
      temp:jsonResponse[6].Temperature.Value,
      real:jsonResponse[6].RealFeelTemperature.Value,
      rain:jsonResponse[6].PrecipitationProbability,
      wind:jsonResponse[6].Wind.Speed.Value,
      deg:jsonResponse[6].Wind.Direction.Degrees,
      direction:jsonResponse[6].Wind.Direction.English,
      cloud:jsonResponse[6].CloudCover,
      visible:jsonResponse[6].Visibility.Value,
      dew:jsonResponse[6].DewPoint.Value,
      humidity:jsonResponse[6].RelativeHumidity,
      num:jsonResponse[6].WeatherIcon,
      iconPhrase:jsonResponse[6].IconPhrase,
    },
    {
      time:new Date(jsonResponse[7].DateTime).getHours(),
      temp:jsonResponse[7].Temperature.Value,
      real:jsonResponse[7].RealFeelTemperature.Value,
      rain:jsonResponse[7].PrecipitationProbability,
      wind:jsonResponse[7].Wind.Speed.Value,
      deg:jsonResponse[7].Wind.Direction.Degrees,
      direction:jsonResponse[7].Wind.Direction.English,
      cloud:jsonResponse[7].CloudCover,
      visible:jsonResponse[7].Visibility.Value,
      dew:jsonResponse[7].DewPoint.Value,
      humidity:jsonResponse[7].RelativeHumidity,
      num:jsonResponse[7].WeatherIcon,
      iconPhrase:jsonResponse[7].IconPhrase,
    },
    {
      time:new Date(jsonResponse[8].DateTime).getHours(),
      temp:jsonResponse[8].Temperature.Value,
      real:jsonResponse[8].RealFeelTemperature.Value,
      rain:jsonResponse[8].PrecipitationProbability,
      wind:jsonResponse[8].Wind.Speed.Value,
      deg:jsonResponse[8].Wind.Direction.Degrees,
      direction:jsonResponse[8].Wind.Direction.English,
      cloud:jsonResponse[8].CloudCover,
      visible:jsonResponse[8].Visibility.Value,
      dew:jsonResponse[8].DewPoint.Value,
      humidity:jsonResponse[8].RelativeHumidity,
      num:jsonResponse[8].WeatherIcon,
      iconPhrase:jsonResponse[8].IconPhrase,
    },
    {
      sunrise:new Date(dailyResponse.DailyForecasts[0].Sun.Rise).getHours(),
      sunriseM:new Date(dailyResponse.DailyForecasts[0].Sun.Rise).getMinutes(),
      sunset:new Date(dailyResponse.DailyForecasts[0].Sun.Set).getHours(),
      sunsetM:new Date(dailyResponse.DailyForecasts[0].Sun.Set).getMinutes(),
      moonrise:new Date(dailyResponse.DailyForecasts[0].Moon.Rise).getHours(),
      moonriseM:new Date(dailyResponse.DailyForecasts[0].Moon.Rise).getMinutes(),
      moonset:new Date(dailyResponse.DailyForecasts[0].Moon.Set).getHours(),
      moonsetM:new Date(dailyResponse.DailyForecasts[0].Moon.Set).getMinutes(),
      minTemp:dailyResponse.DailyForecasts[0].Temperature.Minimum.Value,
      maxTemp:dailyResponse.DailyForecasts[0].Temperature.Maximum.Value,
      realMin:dailyResponse.DailyForecasts[0].RealFeelTemperature.Minimum.Value,
      realMax:dailyResponse.DailyForecasts[0].RealFeelTemperature.Maximum.Value,
      air:dailyResponse.DailyForecasts[0].AirAndPollen[0].Category,
      num:dailyResponse.DailyForecasts[0].Day.Icon,
      phrase:dailyResponse.DailyForecasts[0].Day.IconPhrase,
      speed:dailyResponse.DailyForecasts[0].Day.Wind.Speed.Value,
      deg:dailyResponse.DailyForecasts[0].Day.Wind.Direction.degrees,
      direction:dailyResponse.DailyForecasts[0].Day.Wind.Direction.English,
    },
  ]
  console.log(result[10])
  return(result);
  }

  let [city,setCity]=useState("");


  let handleChange=(evt)=>{
    setCity(evt.target.value);
  }

  let handleSubmit= async(evt)=>{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo=await getWeatherInfo();
    updateInfo(newInfo);
  };



  return (
    <div className='searchBox'>
      <Heading size="3xl" mb="4" >Search for the Weather</Heading>
      <form onSubmit={handleSubmit}>
      <Field >
        <Input placeholder="Search City" mb="6" onChange={handleChange} required value={city}/>
        <Button type="submit" mb="9" variant="surface">
        Search Weather <LuArrowRight />
      </Button>
        <br />
      </Field>
      </form>
    </div>
  )
}

//Loction key="https://dataservice.accuweather.com/locations/v1/search?q=Delhi&apikey=Pyfz37xZ5AGCUdlZVIXD1z3SL4MbKoYQ"
//weather="http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/202396?apikey=Pyfz37xZ5AGCUdlZVIXD1z3SL4MbKoYQ"
