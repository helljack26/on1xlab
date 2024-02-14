import React from "react";

import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class KvedStore {
    enterpriseKvedList = [];
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setKvedData = (data) => {
        this.enterpriseKvedList = data;
    };

    fetchKvedData = async (enterpriseEdrpou) => {
        console.log(
            "🚀 ~ KvedStore ~ fetchKvedData= ~ enterpriseEdrpou:",
            enterpriseEdrpou
        );
        try {
            const queryData = {
                eGRPOUId: enterpriseEdrpou,
            };
            const fetchKvedDataUrl = `${this.appPath}/api/kved/get`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                fetchKvedDataUrl,
                queryData,
                this.axiosConfig
            );

            if (response) {
                const sortedKveds = response.data.kveds.sort(
                    (a, b) => parseFloat(a.number) - parseFloat(b.number)
                );

                // Find the main KVED item
                const mainKvedIndex = sortedKveds.findIndex(
                    (kved) => parseInt(kved?.main) === 1
                );
                if (mainKvedIndex !== -1) {
                    // Remove the main KVED item from its current position
                    const mainKved = sortedKveds.splice(mainKvedIndex, 1)[0];
                    // Add the main KVED item as the first element
                    sortedKveds.unshift(mainKved);
                }

                this.setKvedData(sortedKveds);
            }
        } catch (error) {
            console.error("Error fetching kved data:", error);
        }
    };

    addKvedData = async (data, enterpriseErdpo) => {
        const newObjArray = [];
        // Generate query object
        Object.keys(data).forEach((key) => {
            if (key.startsWith("new_")) {
                const uniqueNumber = key.split("_").pop();
                const numberKey = `new_kved_number_${uniqueNumber}`;
                const nameKey = `new_kved_name_${uniqueNumber}`;
                const checkboxKey = `new_kved_checkbox_${uniqueNumber}`;

                // Check if number and name are empty
                if (
                    data[numberKey] !== undefined &&
                    data[nameKey] !== undefined
                ) {
                    if (data[numberKey] !== "" || data[nameKey] !== "") {
                        const newObj = {
                            number:
                                data[numberKey] !== ""
                                    ? data[numberKey]
                                    : undefined,
                            name:
                                data[nameKey] !== ""
                                    ? data[nameKey]
                                    : undefined,
                            main: +data[checkboxKey], // Convert boolean to integer
                            eGRPOUId: enterpriseErdpo, // Convert boolean to integer
                        };

                        // Check if the object already exists in newObjArray
                        const isDuplicate = newObjArray.some((obj) => {
                            // Check if both number and name are not undefined
                            if (
                                obj.number !== undefined &&
                                obj.name !== undefined
                            ) {
                                return (
                                    obj.number === newObj.number &&
                                    obj.name === newObj.name &&
                                    obj.checkbox === newObj.checkbox
                                );
                            }
                            return false; // If either number or name is undefined, consider it's not a duplicate
                        });

                        // Push the new object only if it's not a duplicate
                        if (!isDuplicate) {
                            newObjArray.push(newObj);
                        }
                    }
                }
            }
        });

        try {
            const addKvedDataUrl = `${this.appPath}/api/kved/add`;

            const requests = newObjArray.map(async (element) => {
                const response = await axios.post(
                    addKvedDataUrl,
                    element,
                    this.axiosConfig
                );

                // Check if the response status is 201
                if (response.status !== 201) {
                    throw new Error(
                        `Request failed with status code ${response.status}`
                    );
                }

                // You can choose to return something based on the response if needed
                return response.data;
            });

            // Wait for all requests to complete
            const summaryResponses = await Promise.all(requests);

            // This part will be executed after all requests are completed
            return { status: 201, data: summaryResponses };
        } catch (error) {
            // Handle errors
            console.error("Error fetching kved data:", error);
            return {
                statusCode: error.response.status || 500,
                error: error.message,
            };
        }
    };

    deleteKved = async (enterpriseEdrpou, kvedId) => {
        try {
            const queryData = {
                eGRPOUId: enterpriseEdrpou,
                kved_id: [kvedId],
            };
            const deleteKvedDataUrl = `${this.appPath}/api/kved/delete`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                deleteKvedDataUrl,
                queryData,
                this.axiosConfig
            );

            if (response.status === 200) {
                await this.fetchKvedData(enterpriseEdrpou);
                return response;
            }
        } catch (error) {
            console.error("Error fetching kved data:", error);
        }
    };
}

const kvedStore = new KvedStore();

export const kvedStoreContext = React.createContext(kvedStore);
export const useKvedStore = () => React.useContext(kvedStoreContext);

export default useKvedStore;
