import { useState } from 'react';
import { MoreInfoList } from "../MoreInfo/MoreInfoList";
import { MoreInfoChartComponent } from "../MoreInfo/MoreInfoChartComponent";
import { WeatherForecastForWeek } from '../WeatherForecastForWeek/WeatherForecastForWeek'
import { WeekForecastLocationAPI } from 'components/WeatherForecastForWeek/WeatherForecastLocationAPI';

export const SomeInfo = () => {
    const [city, setCity] = useState('Kyiv');
    // London тут лише для того, щоб перевірити справність коду, надалі тут буде null
    const [seeMore, setSeeMore] = useState(false);
    const [hourlyForecast, setHourlyForecast] = useState(false);
    const [weeklyForecast, setWeeklyForecast] = useState(true);

    const getInfo = (currentCity, options) => {

        if (currentCity !== city) {
            setCity(currentCity)
            setSeeMore(false)
            setHourlyForecast(false)
            setWeeklyForecast(false)
        }

        switch (options) {
            case 'see more':
                setSeeMore(true)
                break;

            case 'hourly forecast':
                setHourlyForecast(true)
                break;

            case 'weekly forecast':
                setWeeklyForecast(true)
                break;
        
            default:
                break;
        }

    }

    return <>
        {/* місце для компоненту Миколи
        у свій компонент ти маєш прокинути функцію getInfo
        її ти викликатимеш при натисканні на кнопки
        передаючи туди місто і назву кнопки
        які назви має носити (передавати) кнопка ти можеш зрозуміти ознайомившись із функцією
         */}
        {seeMore && <MoreInfoList city={city} />}
        {hourlyForecast && <MoreInfoChartComponent city={city}/>}
        {weeklyForecast && <WeekForecastLocationAPI theCity={city}/>}
    </>

}