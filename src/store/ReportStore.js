// ReportStore.js
import React from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class ReportStore {
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;
    Fop2GrEnEsvAddition = null;
    Fop3GrEnEsvAddition = null;
    selectedEnterpriseEgrpouId = null;
    selectedYear = null;
    startDate = null;
    endDate = null;
    totalIncome = null;

    constructor() {
        makeAutoObservable(this);
    }

    setReportData = (dataFop2Tax, dataFop3Tax) => {
        this.Fop2GrEnEsvAddition = dataFop2Tax;
        this.Fop3GrEnEsvAddition = dataFop3Tax;
    };
    setTotalIncome = (data) => {
        this.totalIncome = data;
    };

    getFopGrEnEsvAddition = async (eGRPOUId, startDate, endDate) => {
        try {
            this.selectedEnterpriseEgrpouId = eGRPOUId;
            this.selectedYear = parseInt(startDate.split("-")[0]);
            this.startDate = startDate;
            this.endDate = endDate;

            const queryData = {
                eGRPOUId: eGRPOUId,
                startDate: startDate,
                endDate: endDate,
            };

            const taxCalculateUrl = `${this.appPath}/api/tax/calculate`;

            const response = await axios.get(taxCalculateUrl, {
                params: queryData,
                ...this.axiosConfig,
            });

            // Process the response data as needed
            const dataFop2Tax = response.data?.getFop2Tax;
            const dataFop3Tax = response.data?.getFop3Tax;

            this.setReportData(dataFop2Tax, dataFop3Tax);
            this.setTotalIncome(response.data.totalIncome);

            return; // Return the processed data or use it as needed
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };

    updateFopGrEnEsvAddition = async (monthData, isFop2Gr) => {
        if (
            typeof monthData !== "object" ||
            Object.keys(monthData).length === 0
        ) {
            return null;
        }

        try {
            const requests = Object.values(monthData).map(async (element) => {
                const isFop2Prefix = isFop2Gr ? "insertF2" : "insertF3";
                const taxCalculateUrl = `${this.appPath}/api/tax/${isFop2Prefix}`;

                const response = await axios.post(
                    taxCalculateUrl,
                    element,
                    this.axiosConfig
                );

                // Check if the response status is 200
                if (response.status === 200) {
                    // Handle successful response if needed
                } else {
                    // Handle the case where the status code is not 200
                    console.error(
                        `Request failed with status code ${response.status}`
                    );
                    // You may want to throw an error or handle it in some other way
                }

                // You can choose to return something based on the response if needed
                return response.data;
            });

            // Wait for all requests to complete
            await Promise.all(requests);

            // This part will be executed after all requests are completed
            this.getFopGrEnEsvAddition(
                this.selectedEnterpriseEgrpouId,
                this.startDate,
                this.endDate
            );
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };
}

const reportStore = new ReportStore();

export const reportStoreContext = React.createContext(reportStore);
export const useReportStore = () => React.useContext(reportStoreContext);

export default useReportStore;
