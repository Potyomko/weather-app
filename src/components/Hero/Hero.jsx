import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { HeroSection } from './Hero.styled';
import { BiSearch } from "react-icons/bi";

import './styled.css'
import { HeroAPI } from './HeroAPI';
import { useState } from 'react';

export const Hero = () => {
  const [cityName, setCityName] = useState(''); 

  const handleSubmit = (values) => {
    setCityName(values.cityName) 
  };

  return (
    <section className="hero">
      <div>
        <h1>Weather dashboard</h1>
        <p>Create your personal list of favorite cities and always be aware of the weather.</p>
           <p>October 2023 Friday, 13th</p>
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
      </div>
    </section>
  );
          }