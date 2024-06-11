import { useState } from "react";
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import api from "./constants";
import { setWeather } from "../app/slice";

const Header = () => {

  const [userLocation, setUserLocation] = useState('...'); 
  const defaultHeader = document.getElementById('defaultHeader');
  const searchHeader = document.getElementById('searchHeader');
  const dispatch = useDispatch();
  let isDefaultHeader = true;

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      fetch(`${api.base}/forecast.json?key=${api.key}&q=${latitude},${longitude}`)
        .then(res => res.json())
        .then(result => {
          setUserLocation(result.location.name);
          dispatch(setWeather(result));
        });
    });
  }, [dispatch]);

  const focusSearch = () => {
    defaultHeader.style.display = 'none';
    searchHeader.style.display = 'flex';
    searchHeader.children[1].focus();
    searchHeader.children[1].value = '';
    isDefaultHeader = false;
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !isDefaultHeader) {
      defaultHeader.style.display = 'flex';
      searchHeader.style.display = 'none';
      setUserLocation('...');

      try {
      const searchValue = document.querySelector('#searchHeader input').value;
      fetch(`${api.base}/forecast.json?key=${api.key}&q=${searchValue}`)
      .then(res => {
        if (res.ok) {
        return res.json();
        } else if (res.status === 400) {

          searchHeader.children[1].placeholder = 'Invalid Location';
        }
      }).catch(error => {
        window.location.reload();

      })
      .then(result => {
        setUserLocation(result.location.name);
        dispatch(setWeather(result));
        defaultHeader.style.display = 'flex';
        searchHeader.style.display = 'none';
        searchHeader.children[1].value = '';
        searchHeader.children[1].placeholder = 'Search';
      })
      .catch(error => {
        focusSearch();
      });
      } catch (error) {
      focusSearch();
      }
    }
    else if (event.key === 'Escape' && !isDefaultHeader) {
      defaultHeader.style.display = 'flex';
      searchHeader.style.display = 'none';
    }
  };

  document.addEventListener('keydown', handleKeyPress);

  return (
    <div>
      <div id="defaultHeader" onClick={() => focusSearch()} className="flex flex-row gap-2 items-baseline justify-between 2xl:px-32">
        <div className="flex flex-row text-4xl gap-4 items-center font-bold md:text-6xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt md:h-6 md:w-6" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
          <span>{userLocation}</span>
        </div>
        <div onClick={()=>focusSearch()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
      </div>
      <div id="searchHeader" onClick={() => focusSearch()} className="hidden gap-4 text-4xl items-center md:text-5xl 2xl:px-32">
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="min-h-6 min-w-6 bi bi-search md:h-7 md:w-7" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input type="text" className="w-5/6 bg-transparent outline-none" placeholder="Search..."></input>
      </div>
    </div>
  )
}

export default Header