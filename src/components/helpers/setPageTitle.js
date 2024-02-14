import { useEffect } from "react";
import { useMultilanguageStore } from "../../store/MultilanguageStore";
import { useLocation, useParams } from "react-router-dom";
import { isExistParams } from "./isExistParams";
import useCleanPath from "src/hooks/useCleanPath";

const usePageTitle = () => {
    const location = useLocation();
    const pagePath = location.pathname;

    const params = useParams();

    const multilanguageStore = useMultilanguageStore();

    const { language, getNavLinkTranslation } = multilanguageStore;

    const getCleanPath = useCleanPath();
    const cleanUrl = getCleanPath();

    // Set page title based on whether params exist or not
    useEffect(() => {
        // Determine whether to use pagePath or cleanUrl for translation
        const pageTitleTranslations = !isExistParams(params)
            ? getNavLinkTranslation(pagePath)
            : getNavLinkTranslation(cleanUrl);

        // Set the document title with the translated text
        document.title = pageTitleTranslations;
    }, [
        pagePath,
        multilanguageStore,
        language,
        getNavLinkTranslation,
        params,
        cleanUrl,
    ]);
};

export default usePageTitle;
