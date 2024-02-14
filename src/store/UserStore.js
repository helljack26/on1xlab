import React from "react";

import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class UserStore {
    userData = null;
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;
    userFullName = "";

    constructor() {
        makeAutoObservable(this);
    }

    setUserData = (data) => {
        this.userData = data;
        if (data.first_name && data.last_name) {
            this.userFullName = data.first_name + " " + data.last_name;
        }
    };

    fetchUserData = async () => {
        try {
            const fetchUserDataUrl = `${this.appPath}/api/user/current`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                fetchUserDataUrl,
                [],
                this.axiosConfig
            );

            if (response) {
                // Handle the response data here
                this.setUserData(response.data);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    updateUserData = async (data, newAvatar) => {
        const queryConfig =
            newAvatar === undefined
                ? this.axiosConfig
                : {
                      withCredentials: true,
                      headers: {
                          "content-type": "multipart/form-data",
                      },
                  };

        try {
            const updateUserDataUrl = `${this.appPath}/api/user/updateSelfInfo`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                updateUserDataUrl,
                data,
                queryConfig
            );

            if (response.status === 200) {
                this.fetchUserData();
                return response;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
}

const userStore = new UserStore();

export const userStoreContext = React.createContext(userStore);
export const useUserStore = () => React.useContext(userStoreContext);

export default useUserStore;
