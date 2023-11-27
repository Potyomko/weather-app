import { Formik,  Form } from 'formik';
import { HeroSection,Field, HeroH1, HeroText, HeroData,  HeroSubmit, HeroSpan  , TextContainer} from './Hero.styled';
import { BiSearch } from "react-icons/bi";

import './styled.css'
import { HeroAPI } from './HeroAPI';
import { useState } from 'react';
import { WeekForecastLocationAPI } from 'components/WeatherForecastForWeek/WeatherForecastLocationAPI';


export const Hero = ({getCityName}) => {
  const [cityName, setCityName] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    
    console.log('Сабміт форми')
    setCityName(values.cityName);
    resetForm();
    getCityName(values.cityName)
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
    <TextContainer>
    <HeroText>Create your personal list of favorite cities and always be aware of the weather.</HeroText>
      <HeroSpan></HeroSpan>
      <HeroData>{currentMonth} {year} <br></br> {currentDayOfWeek}, {day}th</HeroData>
    </TextContainer>
          <Formik
        initialValues={{
          cityName: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className='form'>
            <label htmlFor="cityName"></label>
            <Field
              id="cityName"
              name="cityName"
              onChange={handleChange}
              value={values.cityName}
            />
            <HeroSubmit type="submit" onClick={handleSubmit}>
              <BiSearch size={25}  />
            </HeroSubmit>
          </Form>
        )}
      </Formik>
      <HeroAPI city={cityName} />
    </HeroSection>
  );
}