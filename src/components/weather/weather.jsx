import React from 'react';
import style from './style.css';



const url = "http://api.openweathermap.org/data/2.5/weather?q=Fairfax,us&units=imperial&APPID=fa408109b6ec2e010a72ee13665a44df";



class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    };
  }
  componentDidMount () {
    this.weatherApi(url);
    this.myFunc();
  };

  weatherApi() {

    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        weatherTemp: data.main.temp,
        weatherDataP: data.main.humidity,
        allData: data
      });
    }).catch((err) => {
      return err;
    }).then();
  }

  myFunc () {
    return "I am myFunc";
    console.log("i am func");
  }



  render() {
    const result = JSON.stringify(this.state.weatherTemp);
    const temp = JSON.stringify(this.state.weatherDataP);
    const data = JSON.stringify(this.state.allData);

    return (
      <div className={style.weatherBox}>
        <div className="container">
          <div className="row group-form">
            <input type="text" name="city" id="city" className={style.form} placeholder="type here"></input>
            <button id="submitWeather" className={style.btn} onClick={this.myFunc}>Hello</button>
          </div>
        </div>
        <div>
          <p className={style.weatherTempBox}>
            {"Tempature:" + " " + result + "°"}<br/><br/>
            {"Humidity:" + " " + temp + "%"}
            {data}
          </p>

        </div>
      </div>
    );
  }
}

export default Weather;
