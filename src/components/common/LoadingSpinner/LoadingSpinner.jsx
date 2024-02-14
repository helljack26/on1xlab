import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000000000;
    background-color: white;
`;

const LoadingSpinner = () => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    const [isLoading, setIsLoading] = useState(!hasVisitedBefore);
    const spinnerRef = useRef(null);
    const isRouteChanging = useRef(false);

    useEffect(() => {
        const handleBeforeUnload = () => {
            if (!isRouteChanging.current) {
                localStorage.removeItem("hasVisitedBefore");
            }
        };

        const routeChangeStart = () => {
            isRouteChanging.current = true;
        };

        const routeChangeComplete = () => {
            isRouteChanging.current = false;
        };

        window.addEventListener("popstate", routeChangeStart);
        window.addEventListener("pushState", routeChangeStart);
        window.addEventListener("replaceState", routeChangeStart);
        window.addEventListener("routeChangeComplete", routeChangeComplete);

        window.addEventListener("beforeunload", handleBeforeUnload);

        // Ensure spinnerRef.current is truthy before applying the animation
        if (spinnerRef.current) {
            const fadeOutAnimation = gsap.to(spinnerRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.4,
                onStart: () => {
                    if (!hasVisitedBefore) {
                        localStorage.setItem("hasVisitedBefore", true);
                    }
                },
                onComplete: () => {
                    setIsLoading(false);
                },
            });
            return () => {
                fadeOutAnimation.kill();
            };
        }

        return () => {}; // No cleanup needed
    }, [hasVisitedBefore]);

    return (
        isLoading && (
            <SpinnerContainer ref={spinnerRef}>
                {/* <Spinner /> */}
            </SpinnerContainer>
        )
    );
};

export default LoadingSpinner;
