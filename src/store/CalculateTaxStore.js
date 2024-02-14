// CalculateTaxStore.js
import React from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
// Config
import { authAxiosConfig } from "./authAxiosConfig";
class CalculateTaxStore {
    calculatedTaxData = null;
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setCalculatedTaxData = (data) => {
        this.calculatedTaxData = data;
    };

    calculateTax = async (eGRPOU, startDate, endDate) => {
        if (!eGRPOU && !startDate && !endDate) {
            return this.setCalculatedTaxData(null);
        }
        try {
            const queryData = {
                eGRPOU: eGRPOU,
                startDate: startDate,
                endDate: endDate,
            };
            const taxCalculateUrl = `${this.appPath}/api/tax/calculate`;

            const response = await axios.get(taxCalculateUrl, {
                params: queryData,
                ...this.axiosConfig,
            });

            // Process the response data as needed
            const data = response.data;
            console.log(
                "🚀 ~ file: CalculateTaxStore.js:39 ~ CalculateTaxStore ~ calculateTax= ~ data:",
                data
            );
            if ("message" in data) {
                // If it does, exclude it
                delete data.message;
            }

            this.setCalculatedTaxData(data);

            return; // Return the processed data or use it as needed
        } catch (error) {
            // Handle errors
            console.error("Error fetching data:", error);
        }
    };
}

export const calculateTaxStore = new CalculateTaxStore();

export const calculateTaxStoreContext = React.createContext(calculateTaxStore);
export const useCalculateTaxStore = () =>
    React.useContext(calculateTaxStoreContext);

export default useCalculateTaxStore;
