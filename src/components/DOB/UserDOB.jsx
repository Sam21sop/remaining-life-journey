import React, { useState } from 'react';
import CountdownTimer from '../CountdownTimer/CountdownTimer';


function UserDOB() {
    const [dob, setDob] = useState('1998-12-21');
    const [showTimer, setShowTimer] = useState(false);

    const handleChange = (e) => {
        setDob(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowTimer(true);
    };

    return (
        <>
            <div className="App">
                {!showTimer && (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='dob'>Date of Birth: </label>
                        <input type="date" name='dob' id='dob' value={dob} onChange={handleChange} required placeholder='Enter DOB..' />
                        <br />
                        <button type="submit">Start</button>
                    </form>
                )}
            </div>
            <h1>Remaining Lifeline</h1>
            <CountdownTimer dob={dob} />
        </>
    );
}

export default UserDOB;
