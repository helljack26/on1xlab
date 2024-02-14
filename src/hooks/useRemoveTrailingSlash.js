import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRemoveTrailingSlash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.endsWith("/") && currentPath !== "/") {
            const newPath = currentPath.slice(0, -1);
            navigate(newPath, { replace: true });
        }
    }, [navigate]);
};

export default useRemoveTrailingSlash;
