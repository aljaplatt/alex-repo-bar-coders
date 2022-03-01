import React from 'react';
import "react-step-progress-bar/styles.css";
import styles from '../../../styles/progressbarcomponent.module.css'
import rocketicon from '../../../images/rocketicon.png'
import Image from 'next/image';

import { ProgressBar, Step } from "react-step-progress-bar";

function ProgressBarComponent({studentDaysRead}) {
//   const studentDaysRead = 4;
  return (
    <div className={styles.progressbar}>
      <ProgressBar
        percent={Math.ceil((studentDaysRead / 7) * 100)}
        filledBackground="linear-gradient(to right, #ACF5DA, #51ECB4)"
      >
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
      </ProgressBar>
      <div className={styles.dayCount}>
        <p>Day 0</p>
        <p>Day 1</p>
        <p>Day 2</p>
        <p>Day 3</p>
        <p>Day 4</p>
        <p>Day 5</p>
        <p>Day 6</p>
        <p>Day 7</p>
      </div>
    </div>
  );
}

export default ProgressBarComponent