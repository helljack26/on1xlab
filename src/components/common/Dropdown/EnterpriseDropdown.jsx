// EnterpriseDropdown.js
import React, { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { useMultilanguageStore } from "src/store/MultilanguageStore";
import { useEnterpriseStore } from "src/store/EnterpriseStore";

// Component
import Dropdown from "src/components/common/Dropdown/Dropdown";

const EnterpriseDropdown = observer(({ onSelectEnterprise }) => {
    const { language, getTranslation } = useMultilanguageStore();
    const { enterpriseData, enterpriseSelectData, fetchEnterpriseData } =
        useEnterpriseStore();

    const dropdownEnterpriseLabel = getTranslation(
        `table_fop_gr_en_esv_addition.enterprise`
    );

    const handleSelectedEnterprise = useCallback(
        (value) => () => {
            const convertedEnterpriseData = toJS(enterpriseData);
            const selectedEnterpriseItem = convertedEnterpriseData?.find(
                (enterprise) => enterprise.name === value
            );
            const selectedEnterpriseEgrpouId = parseInt(
                selectedEnterpriseItem?.enterpriseId
            );
            onSelectEnterprise(selectedEnterpriseEgrpouId);
        },
        [enterpriseData, onSelectEnterprise]
    );

    if (!enterpriseSelectData) {
        return null;
    }

    return (
        <Dropdown
            label={dropdownEnterpriseLabel}
            defaultOption={enterpriseSelectData[0]}
            dropdownOptions={enterpriseSelectData}
            onClickAction={handleSelectedEnterprise}
        />
    );
});

export default EnterpriseDropdown;
