import {useState} from 'react'

export function moreInfoApi(lat, lon, setting) {
 return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely,current,alerts&units=metric&appid=40207e285e43c5b8e49ba7f2599cdd4b`)
    .then(rez => rez.json())
    .then(res => setting(res.hourly.slice(0, 12)))
    .catch(err => err)
}