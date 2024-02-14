import React from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class IntegrationStore {
    integrationData = null;
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setIntegrationData = (data) => {
        this.integrationData = data;
    };

    fetchIntegrationData = async () => {
        try {
            const fetchIntegrationDataUrl = `${this.appPath}/api/integration/list`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                fetchIntegrationDataUrl,
                [],
                this.axiosConfig
            );

            if (response) {
                // Handle the response data here
                this.setIntegrationData(response.data);
            }
        } catch (error) {
            console.error("Error fetching integration data:", error);
        }
    };
}

const integrationStore = new IntegrationStore();

export const integrationStoreContext = React.createContext(integrationStore);
export const useIntegrationStore = () =>
    React.useContext(integrationStoreContext);

export default useIntegrationStore;
