import {
    createContext,
    useContext
} from "react";

import {
    observable,
    action,
    makeObservable
} from "mobx";
import enTranslations from "../translations/en.json";
import ukTranslations from "../translations/uk.json";
// Navlinks
import enNavLinkTranslations from "../translations/enNavLinks.json";
import ukNavLinkTranslations from "../translations/ukNavLinks.json";

class Multilanguage {
    translations = {
        uk: ukTranslations,
        en: enTranslations,
        ukNavlinks: ukNavLinkTranslations,
        enNavlinks: enNavLinkTranslations,
    };

    language = "uk"; // Default to an empty string
    navItems = [];

    constructor() {
        makeObservable(this, {
            translations: observable,
            language: observable,
            setLanguage: action,
            getTranslation: action,
            getNavLinkTranslation: action,
            generateNavItemsByRoute: action,
            saveLanguageToLocalStorage: action,
            loadLanguageFromLocalStorage: action,
            navItems: observable,
        });

        this.loadLanguageFromLocalStorage();
    }

    setLanguage = (newLanguage) => {
        this.language = newLanguage;
        this.saveLanguageToLocalStorage();
    };

    getTranslation = (key) => {
        const keys = key.split(".");
        let currentTranslation = this.translations[this.language];

        for (const nestedKey of keys) {
            if (currentTranslation && currentTranslation[nestedKey]) {
                currentTranslation = currentTranslation[nestedKey];
            } else {
                // Handle missing translations or incorrect key
                console.error(`Translation not found for key: ${key}`);
                return key;
            }
        }

        return currentTranslation;
    };

    //
    getNavLinkTranslation = (route, langNavLinks = null, isParams) => {
        if (!langNavLinks) {
            const langKey = this.language.toLowerCase();
            langNavLinks = this.translations[`${langKey}Navlinks`];
        }

        if (!langNavLinks) {
            return route;
        }

        let routeParts = route.split("/").filter((part) => part !== "");
        if (isParams) {
            routeParts = routeParts.slice(0, -1);
        }

        let currentObject = langNavLinks;

        for (const part of routeParts) {
            if (currentObject.hasOwnProperty(part)) {
                currentObject = currentObject[part];
            } else if (
                currentObject.hasOwnProperty("children") ||
                currentObject.hasOwnProperty("subPages")
            ) {
                const currentTempObject = currentObject.children[part];
                if (currentTempObject) {
                    currentObject = currentTempObject;
                } else {
                    currentObject = currentObject.subPages[part];
                }
            } else {
                return route; // Translation not found
            }
        }

        // Check if the final translation has a "name" property
        if (currentObject || currentObject.hasOwnProperty("name")) {
            return currentObject.name !== undefined ?
                currentObject.name :
                currentObject;
        }

        return route;
    };

    generateNavItemsByRoute = (currentPageRoute, isSubPages) => {
        // Split route path by "/"
        const routeParts = currentPageRoute.split("/").filter(Boolean);

        // Get the first part of the route
        const firstPart = routeParts[0];
        const secondPart = routeParts[1];

        const langKey = this.language.toLowerCase();
        const langNavLinks = this.translations[`${langKey}Navlinks`];

        const generateNavItem = (parentKey, route, label, secondPart) => {
            const url = secondPart ?
                `/${parentKey}/${secondPart}/${route}` :
                `/${parentKey}/${route}`;

            const navItem = {
                id: Math.random(),
                label,
                url: url,
            };

            return navItem;
        };

        // Handle other routes
        const subLinks = langNavLinks && langNavLinks[firstPart];

        if (!subLinks || !subLinks.children) {
            console.error(`SubLinks not found for route: ${currentPageRoute}`);
            return;
        }

        if (isSubPages && subLinks.subPages[secondPart].children) {
            const navItems = Object.entries(
                subLinks.subPages[secondPart].children
            ).map(([key, label]) => {
                return generateNavItem(firstPart, key, label, secondPart);
            });
            this.navItems = navItems;
        } else {
            const navItems = Object.entries(subLinks.children).map(
                ([key, label]) => {
                    return generateNavItem(firstPart, key, label);
                }
            );
            this.navItems = navItems;
        }
    };

    saveLanguageToLocalStorage = () => {
        localStorage.setItem("language", this.language);
    };

    loadLanguageFromLocalStorage = () => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage && this.translations[storedLanguage]) {
            this.language = storedLanguage;
        }
    };
}

const MultilanguageStore = new Multilanguage();

export const MultilanguageStoreContext = createContext(MultilanguageStore);
export const useMultilanguageStore = () =>
    useContext(MultilanguageStoreContext);