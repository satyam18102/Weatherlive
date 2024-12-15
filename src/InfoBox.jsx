import { Card } from "@chakra-ui/react"
import { Box, Collapsible ,Image} from "@chakra-ui/react"
import { Button } from "./components/ui/button"
import './InfoBox.css'

export default function InfoBox ({info}){

  let images=[
    "/cloudy.png","/sunny.png","/sunny.png","/day_partly_sunny.png","/day_partly_sunny.png","/day_partly_sunny.png","/day_mostlycloudy.png",
    "/cloudy.png","/cloudy.png","/cloudy.png","/cloudy.png","/fog.png","/day_showers.png","/day_showers.png","/day_showers.png","/thunderstorms.png",
    "/day_sunny_thunderstorms.png","/day_sunny_thunderstorms.png","rain.png","/flurries.png","/flurries.png","/flurries.png","/snow.png","/snow.png",
    "/ice.png","/sleet.png","/freezing_rain.png","/cloudy.png","/cloudy.png","/rain_and_snow.png","/sunny.png","/cold.png","/cold.png",
    "/night_clear.png","/night_clear.png","/night_cloudy.png","/night_cloudy.png","/night_cloudy.png","/night_cloudy.png","/night_showers.png",
    "/night_showers.png","/night_thunderstorm.png","/night_thunderstorm.png","/flurries.png","snow.png"
  ];



    return (
        <div className="bg">
        <Card.Root width="650px" className="bg">
          <Card.Body gap="2"  >
            <Card.Title mt="2" mb="4" className="city">{info[0].city}</Card.Title>
            <Card.Description>
                <div className="infob">
                {/* <div className="tem"> */}
                  <div className="tem">
                  <div className="flex">
                  <Image  src={images[info[1].num]} alt="Weather Icon" className="img"/>
                  <h1>{info[10].currTemp} </h1>&deg;C
                  </div>
                  <div className="in">
                    <h3>{info[1].iconPhrase}</h3>
                  </div>
                  </div>
                {/* </div> */}
                  <div className="mt">
                    <h2>{info[0].min}</h2>
                    </div>
                  <div className="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width={70} height={60} viewBox="0 0 512 512"><defs><symbol id="meteoconsWind0" viewBox="0 0 342 234"><path fill="none" stroke="#fff" strokeDasharray={148} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={18} d="M264.2 21.3A40 40 0 1 1 293 89H9"><animate attributeName="stroke-dashoffset" dur="4.8s" repeatCount="indefinite" values="0; 2960"></animate></path><path fill="none" stroke="#fff" strokeDasharray={110} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={18} d="M148.2 212.7A40 40 0 1 0 177 145H9"><animate attributeName="stroke-dashoffset" dur="4.8s" repeatCount="indefinite" values="0; 1540"></animate></path></symbol></defs><use width={342} height={234} href="#meteoconsWind0" transform="translate(85 139)"></use></svg>
                  <p>{info[10].speed} Km/h </p>
                  </div>
                </div>
                <br />
                  <div className="tem mt ml flex">
                    <div className="mr">
                    <h2>Maximum Temp= {info[10].maxTemp} &deg;C</h2>
                    <h2>Minimum Temp= {info[10].minTemp} &deg;C</h2>
                    <h2>Real Feel= {info[10].realMin} &deg; &nbsp; To &nbsp; {info[10].realMax} &deg;C</h2>
                    </div>
                    <div className="ml mr">
                    <h2>Sunrise= {info[10].sunrise} : {info[10].sunriseM}</h2>
                    <h2>Sunset= {info[10].sunset} : {info[10].sunsetM}</h2>
                    <h2>Wind={info[10].speed} Km/h {info[10].direction}</h2>
                    </div>
                    <div className="ml">
                    <h2>Moonrise= {info[10].moonrise} : {info[10].moonriseM}</h2>
                    <h2>Moonset= {info[10].moonset} : {info[10].moonsetM}</h2>
                    <h2>Air Quality={info[10].air}</h2>
                    </div>
                  </div>
                
                {/* <br />
                <h2>{info[0].min}</h2>
                <br /> */}
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            {/* <Button variant="outline" loading loadingText="Saving" colorPalette="red">View</Button> */}
            <Button onClick={close} colorPalette="red">Close</Button>
          </Card.Footer>
        </Card.Root>
        <Collapsible.Root>
        <Collapsible.Trigger paddingY="3"><Button variant="outline" colorPalette="blue" className="btn" >Hourly Weather</Button></Collapsible.Trigger>
        <Collapsible.Content>
          <Box padding="4" borderWidth="1px" className="box">
            <li className="box-list">
                <ul>
                    <div className="div">
                      <img src={images[info[1].num]} alt="sun"></img>
                      <p>{info[1].iconPhrase}</p>
                      <p>{info[1].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[1].temp} &deg;C</p>
                        <p>Rain={info[1].rain} %</p>
                        <p>Wind={info[1].wind} Km/h {info[1].deg}&deg; {info[1].direction}</p>
                        <p>Dew Point= {info[1].dew} &deg;C</p>
                      </div>
                      <div>
                        <p>Real Feel= {info[1].real} &deg;C</p>
                        <p>Visibility= {info[1].visible} Km</p>
                        <p>Cloud Cover={info[1].cloud} %</p>
                        <p>Humidity={info[1].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[2].num]} alt="sun"></img>
                      <p>{info[2].iconPhrase}</p>
                      <p>{info[2].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[2].temp} &deg;C</p>
                        <p>Rain={info[2].rain} %</p>
                        <p>Wind={info[2].wind} Km/h {info[2].deg}&deg; {info[1].direction}</p>
                        <p>Dew Point= {info[2].dew} &deg;C</p>
                      </div>
                      <div>
                        <p>Real Feel= {info[2].real} &deg;C</p>
                        <p>Visibility= {info[2].visible} Km</p>
                        <p>Cloud Cover={info[2].cloud} %</p>
                        <p>Humidity={info[2].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[3].num]} alt="sun"></img>
                      <p>{info[3].iconPhrase}</p>
                      <p>{info[3].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[3].temp} &deg;C</p>
                        <p>Rain={info[3].rain} %</p>
                        <p>Wind={info[3].wind} Km/h {info[3].deg}&deg; {info[1].direction}</p>
                        <p>Dew Point= {info[3].dew} &deg;C</p>
                      </div>
                      <div className="tep">
                        <p>Real Feel= {info[3].real} &deg;C</p>
                        <p>Visibility= {info[3].visible} Km</p>
                        <p>Cloud Cover={info[3].cloud} %</p>
                        <p>Humidity={info[3].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[4].num]} alt="sun"></img>
                      <p>{info[4].iconPhrase}</p>
                      <p>{info[4].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[4].temp} &deg;C</p>
                        <p>Rain={info[4].rain} %</p>
                        <p>Wind={info[4].wind} Km/h {info[4].deg}&deg; {info[1].direction}</p>
                        <p>Dew Point= {info[4].dew} &deg;C</p>
                      </div>
                      <div className="te">
                        <p>Real Feel= {info[4].real} &deg;C</p>
                        <p>Visibility= {info[4].visible} Km</p>
                        <p>Cloud Cover={info[4].cloud} %</p>
                        <p>Humidity={info[4].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[5].num]} alt="sun"></img>
                      <p>{info[5].iconPhrase}</p>
                      <p>{info[5].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[5].temp} &deg;C</p>
                        <p>Rain={info[5].rain} %</p>
                        <p>Wind={info[5].wind} Km/h {info[5].deg}&deg; {info[1].direction}</p>
                        <p>Dew Point= {info[5].dew} &deg;C</p>
                      </div>
                      <div className="tmp">
                        <p>Real Feel= {info[5].real} &deg;C</p>
                        <p>Visibility= {info[5].visible} Km</p>
                        <p>Cloud Cover={info[5].cloud} %</p>
                        <p>Humidity={info[5].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[6].num]} alt="sun"></img>
                      <p>{info[6].iconPhrase}</p>
                      <p>{info[6].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[6].temp} &deg;C</p>
                        <p>Rain={info[6].rain} %</p>
                        <p>Wind={info[6].wind} Km/h {info[6].deg}&deg; {info[1].direction}</p>
                        <p>Dew Point= {info[6].dew} &deg;C</p>
                      </div>
                      <div className="tmp">
                        <p>Real Feel= {info[6].real} &deg;C</p>
                        <p>Visibility= {info[6].visible} Km</p>
                        <p>Cloud Cover={info[6].cloud} %</p>
                        <p>Humidity={info[6].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[7].num]} alt="sun"></img>
                      <p>{info[7].iconPhrase}</p>
                      <p>{info[7].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[7].temp} &deg;C</p>
                        <p>Rain={info[7].rain} %</p>
                        <p>Wind={info[7].wind} Km/h {info[7].deg}&deg; {info[1].direction}</p>
                        <p>Dew Point= {info[7].dew} &deg;C</p>
                      </div>
                      <div className="tmp">
                        <p>Real Feel= {info[7].real} &deg;C</p>
                        <p>Visibility= {info[7].visible} Km</p>
                        <p>Cloud Cover={info[7].cloud} %</p>
                        <p>Humidity={info[7].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[8].num]} alt="sun"></img>
                      <p>{info[8].iconPhrase}</p>
                      <p>{info[8].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[8].temp} &deg;C</p>
                        <p>Rain={info[8].rain} %</p>
                        <p>Wind={info[8].wind} Km/h {info[8].deg}&deg; {info[8].direction}</p>
                        <p>Dew Point= {info[8].dew} &deg;C</p>
                      </div>
                      <div className="emp">
                        <p>Real Feel= {info[8].real} &deg;C</p>
                        <p>Visibility= {info[8].visible} Km</p>
                        <p>Cloud Cover={info[8].cloud} %</p>
                        <p>Humidity={info[8].humidity} %</p>
                      </div>
                    </div>
                </ul>
                <ul>
                    <div className="div">
                      <img src={images[info[9].num]} alt="sun"></img>
                      <p>{info[9].iconPhrase}</p>
                      <p>{info[9].time} : 00 </p>
                    </div>
                    <div className="con">
                      <div className="temp">
                        <p>Temperature= {info[9].temp} &deg;C</p>
                        <p>Rain={info[9].rain} %</p>
                        <p>Wind={info[9].wind} Km/h {info[9].deg}&deg; {info[9].direction}</p>
                        <p>Dew Point= {info[9].dew} &deg;C</p>
                      </div>
                      <div className="tmp">
                        <p>Real Feel= {info[9].real} &deg;C</p>
                        <p>Visibility= {info[9].visible} Km</p>
                        <p>Cloud Cover={info[9].cloud} %</p>
                        <p>Humidity={info[9].humidity} %</p>
                      </div>
                    </div>
                </ul>
            </li>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
      </div>
      )
}