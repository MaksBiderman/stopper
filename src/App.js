import React from 'react';
import Button from './components/Button/Button';
import TimeDisplay from './components/TimeDisplay/TimeDisplay';
import { useEffect, useState } from 'react';

const  App = () => {
 
const[currentTime, setCurrentTime] = useState(0);
const[intervalId, setIntervalId] = useState(null);

const startTimer = () => {
  const newIntervalId = setInterval(() => {
    setCurrentTime(prevTime => prevTime + 1);
  }, 1);
  console.log('1');

  setIntervalId(newIntervalId);
};

const stopTimer = () => {
  clearInterval(intervalId);
  setIntervalId(null);
  console.log('2');
};

const resetTimer = () => {
  clearInterval(intervalId);
  setIntervalId(null);
  setCurrentTime(0);
  console.log('3');
};

useEffect(() => {
  return () => {
    clearInterval(intervalId);
  };
}, [intervalId]);

  return (
    <div>
      
      <TimeDisplay milliseconds={currentTime}/>
      <div className='mydiv'>
        <Button onClick={startTimer} children={'Start'}/>
        <Button onClick={stopTimer} children={'Stop'}/>
        <Button onClick={resetTimer} children={'Reset'}/>
      </div>
    </div>
  );
}

export default App;
