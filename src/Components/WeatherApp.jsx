import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function WeatherApp() {
  const [content, setContent] = React.useState("");
  const [weatherObj, setWeatherObj] = React.useState({
    temp: "",
    location: "",
    time: "",
    date: "",
    condition: "",
    src: null
  })
  const [welcome, setWelcome] = React.useState("Welcome to MeghaLoom");

  const refresh = () => {
    window.location.reload();
  }

  const handleClick = async() => {

    // Get value of location :
    const Location = content;
    setContent("");
    setWelcome("");

    // Need to make request :
    if (Location.trim() !== "") {
      const data = await fetchWeather(Location);
      if (data == null) {
        alert("Please enter a valid location.");
        return;
      }

      // After extracting data, update state :
      updateWeather(data);
    } else {
      alert("Please enter a location.");
    }
  }

  const handleInput = (obj) => {
    setContent(obj.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleClick();
  }

  const updateWeather = (data) => {
    const temp = data.current.temp_c + "°C";
    const location = data.location.name;
    const condition = data.current.condition.text;
    const TimeDate = data.location.localtime;
    const [date, time] = TimeDate.split(" ");
    const iconLink = data.current.condition.icon;

    console.log("temperature: ", temp, "\nlocation: ", location, "\ndate", date, "\ntime", time, "\niconLink", iconLink);

    // update the state :
    let newObj = {
      "temp": temp,
      "location": location,
      "time": time + ", ",
      "date": date,
      "condition": condition,
      "src": iconLink
    }
    setWeatherObj(newObj);
  }

  async function fetchWeather(Location) {
    const apiKey = "053a62b02bb440dd92a165302250604";
    const Url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${Location}&aqi=yes`;
    const DataResponse = await fetch(Url);

    if (DataResponse.status == 400) {
      return null;
    } else if (DataResponse.status == 200) {
      const json = await DataResponse.json();
      console.log(json);
      return json;
    }
  }

  React.useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log(position);

          const coords = `${lat},${lon}`;
          const data = await fetchWeather(coords);
          if (data) {
            setWelcome(""); // Hide welcome text once location is fetched
            updateWeather(data);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }, []);

  return (
    <><div>
      <Header refresh={refresh} handleInput={handleInput} updateWeather={updateWeather} fetchWeather={fetchWeather} handleKeyDown={handleKeyDown} content={content} handleClick={handleClick}></Header>

      <Main weatherObj={weatherObj} welcome={welcome}></Main>

      <Footer></Footer>
    </div>
    </>
  );
}

export default WeatherApp