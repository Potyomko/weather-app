import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { HeroSection, HeroH1 } from './Hero.styled';
import { BiSearch } from "react-icons/bi";

import './styled.css'
import { HeroAPI } from './HeroAPI';
import { useState } from 'react';


export const Hero = () => {
  const [cityName, setCityName] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  const handleSubmit = (values) => {
    setCityName(values.cityName);
  };

  
  const currentDate = new Date();

  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate();
const year = currentDate.getFullYear()



const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const currentMonth = months[currentDate.getMonth()];
  return (
    <HeroSection>
      <HeroH1>Weather dashboard</HeroH1>
      <p>Create your personal list of favorite cities and always be aware of the weather.</p>
      <p>{currentMonth} {year} {currentDayOfWeek}, {day}th</p>
      <Formik
        initialValues={{
          cityName: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <label htmlFor="cityName"></label>
            <Field
              id="cityName"
              name="cityName"
              onChange={handleChange}
              value={values.cityName}
            />
            <button type="submit" onClick={handleSubmit}>
              <BiSearch />
            </button>
          </Form>
        )}
      </Formik>
      <HeroAPI city={cityName} />
    </HeroSection>
  );
}