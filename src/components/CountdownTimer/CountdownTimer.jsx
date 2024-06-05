import React, { useState, useEffect } from 'react';

function CountdownTimer({ dob }) {
    const calculateTimeLeft = () => {
        const birthDate = new Date(dob);
        const targetDate = new Date(birthDate.setFullYear(birthDate.getFullYear() + 100));
        const now = new Date();

        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
                months: Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
                days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });


    return (
        <div className='flex justify-evenly'>
            <div className=''>
                <h1 className='bg-gray-800 w-14 text-white p-2 m-2 rounded-md font-bold text-3xl flex justify-center'>{timeLeft.years}</h1>
                <h1 className='p-2 text-white font-sans font-semibold text-xl'>Years</h1>
            </div>
            <div className=''>
                <h1 className='bg-gray-800 w-14 flex justify-center text-white p-2 m-2 rounded-md font-bold text-3xl '>{timeLeft.months}</h1>
                <h1 className='p-2 text-white font-sans font-semibold text-xl'>Month</h1>
            </div>
            <div className=''>
                <h1 className='bg-gray-800 w-14 flex justify-center text-white p-2 m-2 rounded-md font-bold text-3xl '>{timeLeft.days}</h1>
                <h1 className='p-2 text-white font-sans font-semibold text-xl'>Days</h1>
            </div>
            <div className=''>
                <h1 className='bg-gray-800 w-14 flex justify-center text-white p-2 m-2 rounded-md font-bold text-3xl '>{timeLeft.hours}</h1>
                <h1 className='p-2 text-white font-sans font-semibold  text-xl'>Hours</h1>
            </div>
            <div className=''>
                <h1 className='bg-gray-800 w-14 text-white p-2 m-2 rounded-md font-bold text-3xl flex justify-center'>{timeLeft.minutes}</h1>
                <h1 className='p-2 text-white text-xl'>Minutes</h1>
            </div>
            <div className=''>
                <h1 className='bg-gray-800 w-14 flex justify-center text-white p-2 m-2 rounded-md font-bold text-3xl '>{timeLeft.seconds}</h1>
                <h1 className='p-2 text-white font-sans font-semibold  text-xl'>Seconds</h1>
            </div>
        </div>
    );
}

export default CountdownTimer;
