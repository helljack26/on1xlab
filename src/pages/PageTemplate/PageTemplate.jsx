import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Store
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "src/store/MultilanguageStore";

// Components
import ClientPageWrapper from "src/components/ClientPageWrapper/ClientPageWrapper";
import PageMainHeader from "src/components/common/PageMainHeader/PageMainHeader";
// Variables
import IMAGES from "src/assets/images";
// Style
import { baseStyle } from "src/assets/style/baseStyle";
const { PageMainHeaderWrapper } = baseStyle;

const PageTemplate = observer(() => {
    // Multilanguage store
    const { language, getTranslation } = useMultilanguageStore();

    useEffect(() => {}, []);

    return (
        <ClientPageWrapper>
            <PageMainHeaderWrapper>
                <PageMainHeader />
            </PageMainHeaderWrapper>
        </ClientPageWrapper>
    );
});

export default PageTemplate;
