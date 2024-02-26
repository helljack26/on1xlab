import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import styled, { keyframes } from "styled-components";
import IMAGES from "src/assets/images";

const spin = keyframes`
    0% {
        transform: scale(1.2);
        opacity: 1;
    }

    50% {
        transform: scale(1);
        opacity: 0.7;
    }

    100% {
        opacity: 1;
        transform: scale(1.2);
    }
`;

const SpinnerContainer = styled.div`
    position: fixed;
    overflow-y: hidden;
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: 1000;
    opacity: 1;

    img {
        animation: ${spin} 2s infinite;

        @media screen and (max-width: 576px) {
            width: 300px;
        }

        @media screen and (max-width: 400px) {
            width: 240px;
        }
    }
`;

const LoadingSpinner = () => {
    const spinnerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Ensure spinnerRef.current is truthy before applying the animation
        if (spinnerRef.current) {
            const fadeOutAnimation = gsap.to(spinnerRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 3,
                onComplete: () => {
                    setIsLoading(false);
                },
            });
            return () => {
                fadeOutAnimation.kill();
            };
        }
    }, []);

    return (
        isLoading && (
            <SpinnerContainer ref={spinnerRef}>
                {/* <Spinner /> */}
                <img
                    src={IMAGES.Logo}
                    className="preloader_block_logo"
                    height="150px"
                    alt="logo"
                />
            </SpinnerContainer>
        )
    );
};

export default LoadingSpinner;
