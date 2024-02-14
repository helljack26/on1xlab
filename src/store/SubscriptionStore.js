// SubscriptionStore.js
import React from "react";
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class SubscriptionStore {
    suscriptionsList = null;

    // Settings
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setSubscriptionsData = (data) => {
        this.suscriptionsList = data;
    };

    fetchSubscriptionsData = async () => {
        try {
            const fetchSubscriptionsDataUrl = `${this.appPath}/api/subscription/available`;

            // Send a request to your server to check authentication status
            const response = await axios.post(
                fetchSubscriptionsDataUrl,
                [],
                this.axiosConfig
            );

            if (response) {
                // Handle the response data here
                this.setSubscriptionsData(response.data);
            }
        } catch (error) {
            console.error("Error fetching enterprise data:", error);
        }
    };

    buySubscriptionPortmone = async (price, sub_description) => {
        // Function to submit the form as a POST request using Axios
        const submitForm = async () => {
            // Set your dynamic values here (replace with actual values)
            const reqPayeeId = "72085";
            const paymentId = 1;
            const paymentSumm = price;
            const description = sub_description;
            const successUrl = "https://panel.torg-host.com/portmone_success";
            const failureUrl = "https://panel.torg-host.com/portmone_failure";
            const lang = "uk";
            const encoding = "UTF-8";
            const expTime = "400";
            const attribute1 = "your_username"; // Replace with the actual value
            const attribute2 = "your_token"; // Replace with the actual value

            const formData = new FormData();
            formData.append("payee_id", reqPayeeId);
            formData.append("shop_order_number", paymentId);
            formData.append("bill_amount", paymentSumm);
            formData.append("description", description);
            formData.append("success_url", successUrl);
            formData.append("failure_url", failureUrl);
            formData.append("lang", lang);
            formData.append("encoding", encoding);
            formData.append("exp_time", expTime);
            formData.append("attribute1", attribute1);
            formData.append("attribute2", attribute2);

            try {
                const response = await axios.post(
                    "https://www.portmone.com.ua/gateway/",
                    formData,
                    this.axiosConfig
                );

                // Handle the response as needed
                console.log(response);
            } catch (error) {
                // Handle errors
                console.error(error);
            }
        };

        // Automatically submit the form when the component mounts
        submitForm();
    };
}

const subscriptionStore = new SubscriptionStore();

export const subscriptionStoreContext = React.createContext(subscriptionStore);
export const useSubscriptionStore = () =>
    React.useContext(subscriptionStoreContext);

export default useSubscriptionStore;
