import React from 'react';
import style from './style.css';

const url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fa408109b6ec2e010a72ee13665a44df";

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
        weatherData: data,
        weatherDataP: data.clouds.all
      });
    }).catch((err) => {
      return err;
    }).then();
  }

  render() {
    const temp = JSON.stringify(this.state.weatherDataP);
    return (
      <div className={style.weatherBox}>
        {temp}
      </div>
    );
  }
}

export default Weather;
