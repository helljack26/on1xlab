import { useState, useEffect } from "react";

const usePreventOverclick = () => {
    const [isClickable, setIsClickable] = useState(true);

    useEffect(() => {
        // Enable the button after 0.4 seconds
        const enableTimeout = setTimeout(() => {
            setIsClickable(true);
        }, 400);

        // Clear the timeout on component unmount to avoid memory leaks
        return () => clearTimeout(enableTimeout);
    }, [isClickable]);

    const handleClick = (callback) => {
        return (...args) => {
            if (isClickable) {
                setIsClickable(false);
                callback(...args);
            }
        };
    };

    return { handleClick, isClickable };
};

export default usePreventOverclick;
