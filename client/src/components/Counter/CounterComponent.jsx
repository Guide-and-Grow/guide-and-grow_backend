import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

import './Counter.css';
const Counter = ({ from, to, time }) => {
  const [currentNumber, setCurrentNumber] = useState(from);
  const delta = to - from;
  const deltaPositive = delta > 0 ? 1 : 0;
  const changeTime = 10;
  const value = (delta * changeTime) / time;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const nextNumber = prevNumber + value;
        return deltaPositive && nextNumber >= to ? to : !deltaPositive && nextNumber <= to ? to : nextNumber;
      });
    }, changeTime);

    return () => clearInterval(interval);
  }, [deltaPositive, time, to, value]);

  return (
    <h4 className="h1 font-weight-normal mb-3">
      <span className="d-inline-block">{Math.round(currentNumber)}</span>
    </h4>
  );
};

const CounterComponent = () => {
  return (
    <div className="container my-5">
     

<section class="text-gray-50 body-font bg-counter">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
      <FontAwesomeIcon icon={faUsers} className='height-200' /><br/>
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
       
        <Counter from={0} to={1120} time={2000} />
        </h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <FontAwesomeIcon icon={faUsers} className='height-200' />
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
        <Counter from={0} to={5000} time={2000} />
        </h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <FontAwesomeIcon icon={faUsers} className='height-200' />
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
        <Counter from={0} to={250} time={2000} />
        </h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <FontAwesomeIcon icon={faUsers} className='height-200' />
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
        <Counter from={0} to={500} time={2000} />
        </h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default CounterComponent;
