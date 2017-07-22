import React from 'react';
import style from './style.css';

const url = "http://api.openweathermap.org/data/2.5/weather?q=chantilly,us&units=imperial&APPID=fa408109b6ec2e010a72ee13665a44df";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    };
  }
  componentDidMount () {
    this.weatherApi(url);

  };

  weatherApi() {

    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        weatherTemp: data.main.temp,
        weatherDataP: data.main.humidity,
        allData: data,
        name: data.name,
        description: data.weather[0].description,
        country: data.sys.country
      });
    }).catch((err) => {
      return err;
    }).then();
  }
  render() {
    const result = JSON.stringify(this.state.weatherTemp);
    const temp = JSON.stringify(this.state.weatherDataP);
    const data = JSON.stringify(this.state.allData);
    const name = JSON.stringify(this.state.name);
    const country = JSON.stringify(this.state.country);
    const description = JSON.stringify(this.state.description);

    return (
      <div className={style.weatherBox}>
        <div className="container">
          <div className="row group-form">
            <input type="text" name="city" id="city" className={style.form} placeholder="insert city"></input>
            <button id="submitWeather" className={style.btn}>Click</button>
          </div>
        </div>
        <div>
          <p className={style.weatherTempBox}>
            {"City:" + " " + name }<br/><br/>
            {"Country:" + " " + country }<br/><br/>
            {"Tempature:" + " " + result + "°"}<br/><br/>
            {"Description:" + " " + description}<br/><br/>
            {"Humidity:" + " " + temp + "%"}
          </p>
        </div>
      </div>
    );
  }
}

export default Weather;
