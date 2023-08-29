import React from 'react';
import styles from './TimeDisplay.module.scss'


const TimeDisplay = ({ milliseconds }) => {


  const formatTime = milliseconds => {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = milliseconds % 1000;
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  }


  return <p className={styles.timedisplay}>{formatTime(milliseconds)}</p>;
};

export default TimeDisplay;