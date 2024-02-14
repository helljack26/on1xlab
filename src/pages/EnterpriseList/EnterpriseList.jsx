import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Store
import { observer } from "mobx-react-lite";
import { useMultilanguageStore } from "src/store/MultilanguageStore";
import { useSidePanelStore } from "src/store/sidePanelStore"; // Import the side panel store
import { useEnterpriseStore } from "src/store/EnterpriseStore";
import { useDocumentStore } from "src/store/DocumentStore";

// Components
import ClientPageWrapper from "../../../../components/ClientPageWrapper/ClientPageWrapper";
import PageMainHeader from "../../../../components/common/PageMainHeader/PageMainHeader";
// Hooks
import usePreventOverclick from "src/hooks/usePreventOverclick";
// Variables
import SIDE_PANELS from "src/assets/sidePanelName";
import IMAGES from "src/assets/images";

// Style
import { EnterpriseListStyle } from "./EnterpriseListStyle";
const {
    GridFiveColumn,
    PageMainHeaderWrapper,
    CardBlock,
    CardHeader,
    CardLine,
    CardRowStyle,
    CardRowTitle,
    CardRowValue,
    SettingsButton,
} = EnterpriseListStyle;

const EnterpriseList = observer(() => {
    // Multilanguage store
    const { language, getTranslation } = useMultilanguageStore();
    const sidePanelStore = useSidePanelStore(); // Use the side panel store
    const navigate = useNavigate();

    const { enterpriseData, fetchEnterpriseData } = useEnterpriseStore();

    const { fetchAllDocumentData } = useDocumentStore();

    useEffect(() => {
        // Fetch enterprise data when the component mounts
        fetchEnterpriseData();
    }, [fetchEnterpriseData]);

    useEffect(() => {
        setTimeout(() => {
            fetchAllDocumentData();
        }, 400);
    }, [fetchAllDocumentData]);

    const CardRow = ({ itemTitle, itemValue }) => {
        if (!itemValue || itemValue === undefined) return;

        return (
            <CardRowStyle>
                <CardRowTitle>{itemTitle}: </CardRowTitle>
                <CardRowValue>{itemValue}</CardRowValue>
            </CardRowStyle>
        );
    };

    const { handleClick, isClickable } = usePreventOverclick();

    const handleClickOnEnterprise = handleClick((enterpriseErdpo) => {
        if (isClickable) {
            // getContrahentData(enterpriseErdpo);
            // sidePanelStore.openSidePanel(SIDE_PANELS.ENTERPRISE_PANEL);
            const currentPath = window.location.pathname;
            navigate(currentPath + `/` + enterpriseErdpo, { replace: true });
        }
    });

    return (
        <ClientPageWrapper>
            <PageMainHeaderWrapper>
                <PageMainHeader />
            </PageMainHeaderWrapper>
            {/* Display enterprise data once it's available */}
            {enterpriseData && (
                <GridFiveColumn>
                    {enterpriseData.map((enterpriseItem, id) => (
                        <CardBlock key={id}>
                            <CardHeader>
                                <span>{enterpriseItem.name}</span>
                                <SettingsButton
                                    onClick={() =>
                                        handleClickOnEnterprise(
                                            enterpriseItem.eGRPOU
                                        )
                                    }
                                >
                                    <i></i>
                                </SettingsButton>
                            </CardHeader>
                            {(enterpriseItem.eGRPOU ||
                                enterpriseItem.VatTaxes) && (
                                <CardLine></CardLine>
                            )}
                            <CardRow
                                itemTitle={getTranslation(
                                    "accountant_terms.edrpou"
                                )}
                                itemValue={enterpriseItem.eGRPOU}
                            />
                            <CardRow
                                itemTitle={getTranslation(
                                    "accountant_terms.individualTaxNumber"
                                )}
                                itemValue={enterpriseItem.individualTaxNumber}
                            />
                            {enterpriseItem.VatTaxes && (
                                <CardRow
                                    itemTitle={getTranslation(
                                        "accountant_terms.VatTaxes"
                                    )}
                                    itemValue={`${enterpriseItem.VatTaxes}%`}
                                />
                            )}
                        </CardBlock>
                    ))}
                </GridFiveColumn>
            )}
        </ClientPageWrapper>
    );
});

export default EnterpriseList;
