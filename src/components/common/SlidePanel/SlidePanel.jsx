import React, { useEffect, useRef, useCallback, useState } from "react";
import { debounce } from "lodash";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

// Store
import { observer } from "mobx-react-lite";
import { useSidePanelStore } from "../../../store/sidePanelStore";

// Variables
import SIDE_PANELS from "../../../assets/sidePanelName";

// Style
import { SlidePanelStyle } from "./SlidePanelStyle";

// Destructure styles for better readability
const { PanelContainer, PanelCloseButton, BackgroundOverlay } = SlidePanelStyle;

const SlidePanel = observer(
    ({ panelName, zIndex, children, direction = "left", isShowOnLoad }) => {
        // Get the current location from React Router
        const location = useLocation();

        const [isShowCloseButton, setShowCloseButton] = useState(false);
        // State to determine if the screen is in mobile view
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
        const wasMobile = useRef(isMobile);

        const { panels, openSidePanel, closeSidePanel } = useSidePanelStore();
        const isOpen = panels[panelName].isOpen;

        const panelRef = useRef(null);
        const overlayRef = useRef(null);

        const isSideMenu = panelName === SIDE_PANELS.SIDE_MENU;
        const isShowOverlayOnDesktop = !isSideMenu && !isMobile;

        // Animation function for sliding the menu
        const slideMenuAnimation = useCallback(
            (isOpen) => {
                if (panelRef.current) {
                    const offset =
                        direction === "left"
                            ? -panelRef.current.offsetWidth
                            : panelRef.current.offsetWidth;

                    gsap.to(panelRef.current, {
                        x: isOpen ? 0 : offset,
                        duration: 0.2,
                        ease: "power2.inOut",
                    });
                }
            },
            [direction]
        );

        // Animation function for fading in/out the overlay
        const fadeInOverlayAnimation = useCallback(
            (isOpen) => {
                if (
                    (overlayRef.current && isMobile) ||
                    isShowOverlayOnDesktop
                ) {
                    gsap.to(overlayRef.current, {
                        opacity: isOpen ? 1 : 0,
                        duration: 0.15,
                        ease: "power2.inOut",
                        onStart: () => {
                            if (isOpen) {
                                gsap.set(overlayRef.current, {
                                    display: "block",
                                });
                            } else {
                                slideMenuAnimation(isOpen);
                            }
                        },
                        onComplete: () => {
                            if (!isOpen) {
                                gsap.set(overlayRef.current, {
                                    display: "none",
                                });
                            } else {
                                slideMenuAnimation(isOpen);
                            }
                        },
                    });
                } else {
                    slideMenuAnimation(isOpen);
                }
            },
            [isMobile, slideMenuAnimation, isShowOverlayOnDesktop]
        );

        // Effect to update isMobile state on window resize
        useEffect(() => {
            const handleResize = () => {
                const newIsMobile = window.innerWidth <= 1200;

                // Check if there is a transition from desktop to mobile
                if (!wasMobile.current && newIsMobile && isSideMenu) {
                    // Custom logic for the transition from desktop to mobile for SIDE_MENU
                    closeSidePanel(panelName);
                }

                // Update isMobile state
                setIsMobile(newIsMobile);
                wasMobile.current = newIsMobile;
            };

            // Add event listener for window resize
            window.addEventListener("resize", handleResize);

            // Remove event listener on component unmount
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, [closeSidePanel, openSidePanel, panelName, isSideMenu]);

        // Effect to handle isShowOnLoad logic based on the presence of a hash in the URL
        useEffect(() => {
            if (isShowOnLoad) {
                openSidePanel(panelName);
            }
        }, [isShowOnLoad, panelName, openSidePanel]);

        useEffect(() => {
            if (isOpen === true) {
                fadeInOverlayAnimation(true);
                // Show the close button after a delay (e.g., 500ms)
                const timeoutId = setTimeout(() => {
                    fadeInOverlayAnimation(true);
                    setShowCloseButton(true);
                }, 200);

                return () => {
                    clearTimeout(timeoutId);
                };
            } else {
                fadeInOverlayAnimation(false);
                // Hide the close button immediately when closing the panel
                setShowCloseButton(false);
            }
        }, [isOpen, fadeInOverlayAnimation]);

        // Effect to reset side menu position when switching to desktop view
        useEffect(() => {
            const isSideMenuOnDesktop = !isMobile && !isOpen && isSideMenu;

            if (isSideMenuOnDesktop) {
                panelRef.current.style.transition = "none";
                panelRef.current.style.transform = "translate(0px, 0px)";
                openSidePanel(panelName);
            }
        }, [isMobile, isOpen, openSidePanel, panelName, isSideMenu]);

        const [hasClosedPanel, setHasClosedPanel] = useState(false);

        const handleCloseSidePanel = useCallback(() => {
            closeSidePanel(panelName);
            setHasClosedPanel(true);
        }, [closeSidePanel, panelName]);

        useEffect(() => {
            // Reset the flag when the pathname changes
            setHasClosedPanel(false);
        }, [location.pathname]);

        // useEffect(() => {
        //     // Close the panel only if isMobile is true and the panel hasn't been closed yet
        //     if (isMobile && !hasClosedPanel) {
        //         handleCloseSidePanel();
        //         console.log("хуйгя");
        //     }
        // }, [isMobile, hasClosedPanel, handleCloseSidePanel]);

        return (
            <>
                <PanelContainer
                    isOpen={isOpen}
                    zIndex={zIndex}
                    ref={panelRef}
                    direction={direction}
                >
                    {/* CloseButton styled component */}
                    {!isSideMenu && isShowCloseButton && (
                        <PanelCloseButton
                            direction={direction}
                            onClick={handleCloseSidePanel}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </PanelCloseButton>
                    )}
                    {children}
                </PanelContainer>

                {/* Overlay */}
                {(isShowOverlayOnDesktop || isMobile) && (
                    <BackgroundOverlay
                        isOpen={isOpen}
                        zIndex={zIndex}
                        onClick={handleCloseSidePanel}
                        ref={overlayRef}
                    />
                )}
            </>
        );
    }
);

export default SlidePanel;
