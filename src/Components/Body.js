import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css';

const Body = () => {
  const data = useSelector(state => state.weather.weather);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mt-8 items-center md:flex-row md:gap-10 lg:gap-16 xl:justify-evenly xl:items-center'>
        {data ? (
          <div className='flex flex-col items-center gap-2'>
            <h1 className='text-9xl font-bold md:text-'>{data.current.temp_c}°</h1>
            <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>{data.forecast.forecastday[0].day.mintemp_c}°/ {data.forecast.forecastday[0].day.maxtemp_c}°
              Humidity: {data.current.humidity}</h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{data.current.condition.text}</h1>
          </div>
        ) : (
          <div className='loader'></div>
        )}
        {data ? (
          <div className='grid grid-cols-3 gap-4 mt-4 xl:grid-cols-2 '>
            <div className='flex flex-col rounded-xl bg-gray-800 px-4 py-2 md:text-xl'>
              <img alt='logo' className='w-6 h-6 md:w-10 md:h-10' src='https://img.icons8.com/?size=100&id=18504&format=png&color=ffffff'></img>
              <h1 className='opacity-50'>Dew</h1>
              <h1>{data.current.dewpoint_c}°</h1>
            </div>
            <div className='flex flex-col rounded-xl bg-gray-800 px-4 py-2 md:text-xl'>
              <img alt='logo' className='w-6 h-6 md:w-10 md:h-10' src='https://img.icons8.com/?size=100&id=648&format=png&color=ffffff'></img>
              <h1 className='opacity-50'>Feels like</h1>
              <h1>{data.current.feelslike_c}°</h1>
            </div>
            <div className='flex flex-col rounded-xl bg-gray-800 px-4 py-2 md:text-xl '>
              <img alt='logo' className='w-6 h-6 md:w-10 md:h-10' src='https://img.icons8.com/?size=100&id=MZYYHOAmSwgz&format=png&color=ffffff'></img>
              <h1 className='opacity-50'>Gust</h1>
              <h1>{data.current.gust_mph} mph</h1>
            </div>
            <div className='flex flex-col rounded-xl bg-gray-800 px-4 py-2 md:text-xl'>
              <img alt='logo' className='w-6 h-6 md:w-10 md:h-10' src='https://img.icons8.com/?size=100&id=41152&format=png&color=ffffff'></img>
              <h1 className='opacity-50'>Air speed</h1>
              <h1>{data.current.wind_mph} mph</h1>
            </div>
            <div className='flex flex-col rounded-xl bg-gray-800 px-4 py-2 md:text-xl'>
              <img alt='logo' className='w-6 h-6 md:w-10 md:h-10' src='https://img.icons8.com/?size=100&id=6980&format=png&color=ffffff'></img>
              <h1 className='opacity-50'>Pressure</h1>
              <h1>{data.current.pressure_in}"</h1>
            </div>
            <div className='flex flex-col rounded-xl bg-gray-800 px-4 py-2 md:text-xl'>
              <img alt='logo' className='w-6 h-6 md:w-10 md:h-10' src='https://img.icons8.com/?size=100&id=53387&format=png&color=ffffff'></img>
              <h1 className='opacity-50'>Wind dir</h1>
              <h1>{data.current.wind_dir}</h1>
            </div>
          </div>
        ) : (
          <div className='loader'></div>
        )}
      </div>

      <div className='flex flex-col mt-8 md:mt-16 lg:mt-16 xl:mt-24 '>
        {data ? (
          <div className='flex flex-col gap-6 text-center  md:items-center   lg:items-center  xl:flex-row-reverse  xl:justify-evenly '>
            <h1 className='flex gap-1 text-3xl font-medium md:text-5xl  lg:text-7xl  xl:text-7xl'>
                {data.location.region}, {data.location.country}
            </h1>
            <div className='flex flex-col gap-2 md:w-full lg:w-full xl:w-full 2xl:w-1/2'>
              <div className='flex flex-row gap-3 bg-slate-800 rounded-xl px-4 py-2 items-center'>
                <div className='flex flex-col min-w-max items-center md:text-xl'>
                  <img alt='logo' className='h-16 w-16 md:w-28 md:h-28' src='https://img.icons8.com/?size=100&id=15374&format=png&color=000000'></img>
                  <h1 className='opacity-50'>Sun rise</h1>
                  <h1>
                    {data.forecast.forecastday[0].astro.sunrise}
                  </h1>
                </div>
                <hr className='w-full opacity-50'></hr>
                <div className='flex flex-col min-w-max  items-center md:text-xl'>
                  <img alt='logo' className='h-16 w-16 md:w-28 md:h-28' src='https://img.icons8.com/?size=100&id=15368&format=png&color=000000'></img>
                  <h1 className='opacity-50'>Sun set</h1>
                  <h1>
                    {data.forecast.forecastday[0].astro.sunset}
                  </h1>
                </div>
              </div>
              <div className='flex flex-row gap-3 bg-slate-800 rounded-xl px-4 py-2 items-center'>
                <div className='flex flex-col min-w-max items-center md:text-xl'>
                  <img alt='logo' className='h-16 w-16 md:w-28 md:h-28' src='https://img.icons8.com/?size=100&id=FG4FE3fzjs5z&format=png&color=000000'></img>
                  <h1 className='opacity-50'>Moon rise</h1>
                  <h1>
                    {data.forecast.forecastday[0].astro.moonrise}
                  </h1>
                </div>
                <hr className='w-full opacity-50'></hr>
                <div className='flex flex-col min-w-max  items-center md:text-xl'>
                  <img alt='logo' className='h-16 w-16 md:w-28 md:h-28' src='https://img.icons8.com/?size=100&id=9DWcQ1fQGkaC&format=png&color=000000'></img>
                  <h1 className='opacity-50'>Moon set</h1>
                  <h1>
                    {data.forecast.forecastday[0].astro.moonset}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='loader'></div>
        )}
      </div>

      <div className='mt-8 xl:mt-24 lg:mt-16'>
        {data ? (
          <div className='flex flex-col mt-8 gap-4 md:text-center md:gap-8 lg:text-center lg:gap-8  xl:text-center xl:gap-8'>
            <h1 className='text-3xl font-bold md:text-6xl lg:text-6xl xl:text-6xl'>
              Today
            </h1>
            <div className='grid grid-cols-4 gap-1 md:grid-cols-6 lg:grid-cols-6  items-center xl:grid-cols-8'>
              {data.forecast.forecastday[0].hour.map((load, index) => {
                return (
                  <div key={index} className='flex flex-col justify-around items-center py-2 bg-gray-800 rounded-xl px-2 md:text-xl'>
                    <span>{load.time.slice(-5)}</span>
                    <img alt='logo' className='w-12 h-12  md:w-20 md:h-20' src={load.condition.icon}></img>
                    <span>{load.temp_c}°</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className='loader'></div>
        )}
      </div>

    </div>
  );
};

export default Body;
