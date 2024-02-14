// Import necessary libraries and components
import React, {
    useState,
    useEffect,
    useRef,
    useImperativeHandle,
    useCallback,
    forwardRef,
    useLayoutEffect,
} from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

// Import styles
import { HeaderPopupStyle } from "./HeaderPopupStyle";
const { PopupContainer } = HeaderPopupStyle;

// HeaderPopup component definition
const HeaderPopup = forwardRef((props, ref) => {
    // Destructure props
    const {
        content,
        isPopupVisible,
        setIsPopupVisible,
        animateDuration = 0.3,
        buttonId,
        ...otherProps
    } = props;

    // Create refs for container and button
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    // State to manage whether the popup should be displayed
    const [shouldDisplay, setShouldDisplay] = useState(false);

    // Function to animate the popup
    const animatePopup = (opacity, duration, onComplete) => {
        const container = containerRef.current;
        gsap.to(container, {
            opacity,
            duration,
            ease: "power2.inOut",
            onComplete,
        });
    };

    // Function to open the popup
    const openPopup = useCallback(() => {
        // Get the button element by ID
        const button = document.getElementById(buttonId);

        if (button && containerRef) {
            // Set the buttonRef to the button element
            buttonRef.current = button;

            // Calculate available space on the right side of the button after the component is mounted
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const availableSpace = window.innerWidth - buttonRect.right;

            // Set the initial position of the popup container based on available space
            if (availableSpace <= containerRef.current.offsetWidth / 2) {
                containerRef.current.style.left = "auto";
                containerRef.current.style.transform = "none";
                containerRef.current.style.right = "6px";
            }

            // Animate the popup
            animatePopup(1, animateDuration);

            // Set shouldDisplay after the animation duration
            setTimeout(() => {
                setShouldDisplay(true);
            }, animateDuration);
        }
    }, [buttonId, animateDuration]);

    // Function to close the popup
    const closePopup = useCallback(() => {
        animatePopup(0, animateDuration, () => setShouldDisplay(false));
    }, [animateDuration]);

    // useImperativeHandle to expose openPopup and closePopup functions via ref
    useImperativeHandle(ref, () => ({ openPopup, closePopup }));

    // Function to handle clicks outside the popup
    const handleClickOutside = useCallback(
        (event) => {
            const container = containerRef.current;
            if (container && !container.contains(event.target)) {
                const button = document.getElementById(buttonId);
                if (button && !button.contains(event.target)) {
                    closePopup();
                    setIsPopupVisible(false);
                }
            }
        },
        [closePopup, setIsPopupVisible, buttonId]
    );

    // useEffect to add and remove click event listener for clicks outside the popup
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [handleClickOutside]);

    // useEffect for initial rendering
    useEffect(() => {
        // Set initial position when the component is mounted
        // Only open the popup if isPopupVisible is true
        if (isPopupVisible) {
            openPopup();
        } else {
            closePopup();
        }

        // Cleanup function
        return () => {
            // Add any cleanup logic if needed
        };
    }, [isPopupVisible, openPopup, closePopup]);

    // useLayoutEffect for subsequent openings
    useLayoutEffect(() => {
        // Set initial position when the component is mounted
        // Only open the popup if isPopupVisible is true and shouldDisplay is true
        if (isPopupVisible && shouldDisplay) {
            openPopup();
        }

        // Cleanup function
        return () => {
            // Add any cleanup logic if needed
        };
    }, [isPopupVisible, openPopup, shouldDisplay]);

    // useEffect to set the display property after the delay
    useEffect(() => {
        const displayTimeout = setTimeout(() => {
            containerRef.current.style.display = shouldDisplay
                ? "block"
                : "none";
        }, animateDuration * 1000);

        // Clear the timeout on component unmount or when the popup is closed
        return () => clearTimeout(displayTimeout);
    }, [shouldDisplay, animateDuration]);

    // Render the PopupContainer with the specified content
    return (
        <PopupContainer
            ref={containerRef}
            {...otherProps}
            style={{ display: shouldDisplay ? "block" : "none" }}
        >
            {content}
        </PopupContainer>
    );
});

// PropTypes for HeaderPopup component
HeaderPopup.propTypes = {
    content: PropTypes.node.isRequired, // The content of the popup
    setIsPopupVisible: PropTypes.func.isRequired, // Function to set the visibility of the popup
    animateDuration: PropTypes.number, // Optional animation duration prop
};

// Export the HeaderPopup component as the default export
export default HeaderPopup;
