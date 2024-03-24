import React, {useState, useEffect} from 'react';

const RemainingTime = () => {

    // define state and its initial value
    const [time, setTime] = useState(5 * 24 * 60 * 60 * 1000);

    // useEffect hook for async call and re-rendering context
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time]);


    // date helper fnction
    const dateTimeConversionHelper = (timeValue, convFactor) => (parseInt(Math.floor(timeValue / convFactor)));


    // function to formating date
    const getFormattedDate = (timeInMiliSecond) => { 
        // calculation
        let totalSecond = dateTimeConversionHelper(timeInMiliSecond, 1000);
        let totalMinutes = dateTimeConversionHelper(totalSecond, 60);
        let totalHours = dateTimeConversionHelper(totalMinutes, 60);
        let totalDays = dateTimeConversionHelper(totalHours, 24);
        // let totalMonths = dateTimeConversionHelper(totalDays - 365, 12);
        // let totalYears = dateTimeConversionHelper(totalMonths, 12);

        let second = parseInt(totalSecond % 60);
        let minuts = parseInt(totalMinutes % 60);
        let hours = parseInt(totalMinutes % 60);
        let days = parseInt(totalDays % 24);
        // let month = parseInt(totalMonths % 12);
        // let year = parseInt(totalYears % 12)

        // return `${totalYears} : ${month} : ${days} : ${hours} : ${minuts} : ${second}`
        return {days,  hours,  minuts, second}
    };


    // destructure value
    const {days,  hours,  minuts, second} = getFormattedDate(time)

    return (
        <div className="flex justify-center items-center">
            {/* <h1 className="text-3xl font-bold m-2 p-4 text-black bg-slate-50 rounded"> {years} </h1> */}
            {/* <h1 className="text-3xl font-bold m-2 p-4 text-black bg-slate-50 rounded"> {months} </h1> */}
            <h1 className="text-3xl font-bold m-2 p-4 text-black bg-slate-50 rounded"> {days} </h1>
            <h1 className="text-3xl font-bold m-2 p-4 text-black bg-slate-50 rounded"> {hours} </h1>
            <h1 className="text-3xl font-bold m-2 p-4 text-black bg-slate-50 rounded"> {minuts} </h1>
            <h1 className="text-3xl font-bold m-2 p-4 text-black bg-slate-50 rounded"> {second} </h1>
        </div>
    )
}

export default RemainingTime