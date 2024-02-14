// RoleStore.js
import React from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class RoleStore {
    roleList = null;
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setRoleData = (data) => {
        this.roleList = data;
    };

    getAllRolePermissionData = async () => {
        try {
            const fetchRoleDataUrl = `${this.appPath}/api/role/getAllRolePermission`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                fetchRoleDataUrl,
                [],
                this.axiosConfig
            );

            if (response) {
                // Handle the response data here
                this.setRoleData(response.data);
            }
        } catch (error) {
            console.error("Error fetching role data:", error);
        }
    };
}

const roleStore = new RoleStore();

export const roleStoreContext = React.createContext(roleStore);
export const useRoleStore = () => React.useContext(roleStoreContext);

export default useRoleStore;
