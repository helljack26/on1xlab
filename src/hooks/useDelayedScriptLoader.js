import { useEffect } from "react";

const useDelayedScriptLoader = (scriptList, delay) => {
    useEffect(() => {
        const loadedScripts = new Set();

        const loadScript = (src, isModule, callback) => {
            if (!loadedScripts.has(src)) {
                const script = document.createElement("script");
                script.src = src;
                // script.async = true;

                // Set the 'type' attribute based on whether the script is a module or not
                if (isModule) {
                    script.type = "module";
                }

                // Execute callback after script has loaded
                script.onload = () => {
                    loadedScripts.add(src);
                    callback();
                };

                document.body.appendChild(script);
            } else {
                callback();
            }
        };

        const loadNextScript = (index) => {
            if (index < scriptList.length) {
                setTimeout(() => {
                    const { src, isModule } = scriptList[index];
                    loadScript(src, isModule, () => {
                        loadNextScript(index + 1);
                    });
                }, delay);
            }
        };

        // Start loading scripts
        setTimeout(() => {
            loadNextScript(0);
        }, 100);

        return () => {
            // Cleanup code if needed
        };
    }, [scriptList, delay]); // Re-run effect if scriptList or delay changes
};

export default useDelayedScriptLoader;
