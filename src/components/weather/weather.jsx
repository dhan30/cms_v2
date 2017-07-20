import React from 'react';
import style from './style.css';

const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fa408109b6ec2e010a72ee13665a44df";


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: ""
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
        weatherData: data,
        weatherDataPressure: data
      });
    }).catch((err) => {
      return err;
    }).then();
  };

    render() {

          return (
            <div className={style.weatherBox}>{JSON.stringify(this.state.weatherData)}</div>
          );
    }
};

export default Weather;
