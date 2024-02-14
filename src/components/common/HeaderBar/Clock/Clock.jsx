import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClockWrapper = styled.div`
    padding: 0 16px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 15%;
`;

const ClockText = styled.span`
    font-size: 2em;
    color: white;
    user-select: none;
`;

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update the current time every minute
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // 60000 milliseconds = 1 minute

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Format the time in 24-hour format
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return (
        <ClockWrapper>
            <ClockText>{`${formattedHours}:${formattedMinutes}`}</ClockText>
        </ClockWrapper>
    );
};

export default Clock;
