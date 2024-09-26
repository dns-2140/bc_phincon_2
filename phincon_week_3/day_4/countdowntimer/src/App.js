import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  function timeLeft() {
    const todayDate = new Date();
    const eventDate = new Date('2024-10-10T15:30:00');
    const difference = eventDate - todayDate;
    const differenceInDays = difference / (1000 * 60 * 60 * 24);
    const dayState = Math.floor(differenceInDays);
    const hours = (differenceInDays - Math.floor(differenceInDays)) * 24;
    const hourState = Math.floor(hours);
    const mins = (hours - Math.floor(hours)) * 60;
    const minState = Math.floor(mins);
    const secState = Math.floor((difference % (1000 * 60)) / 1000);
    console.log(dayState, hourState, minState, secState);
    return {
      days: dayState,
      hours: hourState,
      minutes: minState,
      seconds: secState,
    };
  }

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timeLeft());
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <h1>We are launching soon</h1>
      <div className='numbers'>
        <div className='days'>{timer.days}</div>
        <div className='hours'>{timer.hours}</div>
        <div className='minutes'>{timer.minutes}</div>
        <div className='seconds'>{timer.seconds}</div>
      </div>
    </div>
  );
}

export default App;
