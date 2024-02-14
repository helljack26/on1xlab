import React from "react";
import { makeAutoObservable, runInAction, toJS } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class EnterpriseStore {
    enterpriseData = null;
    singleEnterpriseData = null;
    enterpriseSelectData = null;
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setEnterpriseData = (data) => {
        this.enterpriseData = data;
        this.enterpriseSelectData = data.map((item) => item.name);
    };

    fetchEnterpriseData = async () => {
        try {
            const fetchEnterpriseDataUrl = `${this.appPath}/api/enterprise/all`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                fetchEnterpriseDataUrl,
                [],
                this.axiosConfig
            );
            if (response) {
                // Handle the response data here
                this.setEnterpriseData(response.data);
            }
        } catch (error) {
            console.error("Error fetching enterprise data:", error);
        }
    };

    getEnterpriseData = async (eGRPOU) => {
        if (this.enterpriseData) {
            const enterprise = this.enterpriseData.find(
                (enterprise) => parseInt(enterprise.eGRPOU) === parseInt(eGRPOU)
            );

            runInAction(() => {
                this.singleEnterpriseData = enterprise;
            });
        }
    };
    clearEnterpriseEditData = async () => {
        runInAction(() => {
            this.singleEnterpriseData = null;
        });
    };
}

const enterpriseStore = new EnterpriseStore();

export const enterpriseStoreContext = React.createContext(enterpriseStore);
export const useEnterpriseStore = () =>
    React.useContext(enterpriseStoreContext);

export default useEnterpriseStore;
