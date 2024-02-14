import { useLocation, useParams } from "react-router-dom";

const useCleanPath = () => {
    const { pathname, search, hash } = useLocation();
    const params = useParams();

    const cleanPath = () => {
        // Iterate over the params object and replace each parameter in the pathname
        let cleanedPathname = pathname;
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const paramValue = params[key];
                cleanedPathname = cleanedPathname.replace(`/${paramValue}`, "");
            }
        }

        // Construct the clean URL by combining the cleaned pathname with search and hash
        const cleanUrl = cleanedPathname;

        return cleanUrl;
    };

    return cleanPath;
};

export default useCleanPath;
