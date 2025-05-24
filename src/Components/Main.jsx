import WeatherBg from '../Images/WeatherAppbg.jpg';
function Main(props) {
    return (<>
        <main className="w-screen flex justify-center items-center bg-cover bg-center text-[#736262]" style={{ backgroundImage: `url(${WeatherBg})`, height: 'calc(100vh - 170px)' }}>
            <div id="weather-condition" className="flex justify-center items-center gap-[40px] ">
                <div id="Welcome-Text" className='text-[55px] text-white animate-from-back'> {props.welcome} </div>
                <div className="text-[26px]  text-white" id="temperature">{props.weatherObj.temp}</div>

                <div id="location-data">
                    <div className="text-[50px] text-white" id="location">{props.weatherObj.location}</div>
                    <span className="text-[21px]  text-white" id="time">{props.weatherObj.time}</span>
                    <span className="text-[21px]  text-white" id="date">{props.weatherObj.date}</span>
                </div>

                <div className="weather-state">
                    <img className={`h-[6rem] ${!props.weatherObj.src ? "hidden" : ""}`} id="icon" src={props.weatherObj.src} alt="Condition-Icon" />
                    <div className="text-[26px]  text-white" id="condition">{props.weatherObj.condition}</div>
                </div>
            </div>
        </main></>);
}

export default Main