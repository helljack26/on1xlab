import { createContext, useContext } from "react";
import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";
import { authAxiosConfig } from "./authAxiosConfig";

class DocumentStore {
    documentData = {
        syncFinancialDocuments: null,
        syncInvoices: null,
    };
    appPath = process.env.REACT_APP_PATH;
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setDocumentData = (type, data) => {
        this.documentData[type] = data;
    };

    fetchFinancialDocumentData = async () => {
        await this.fetchDocumentData("syncFinancialDocuments");
    };

    fetchWarehouseDocumentData = async () => {
        await this.fetchDocumentData("syncInvoices");
    };

    fetchAllDocumentData = async () => {
        await this.fetchDocumentData("syncInvoices");
        await this.fetchDocumentData("syncFinancialDocuments");
    };

    fetchDocumentData = async (type) => {
        if (this.documentData[type] !== null) {
            return;
        } else {
            try {
                const fetchDocumentDataUrl = `${this.appPath}/api/torgsoft/${type}`;
                // Send a request to your server to check authentication status
                const response = await axios.post(
                    fetchDocumentDataUrl,
                    [],
                    toJS(this.axiosConfig)
                );
                console.log(
                    "🚀 ~ DocumentStore ~ fetchDocumentData= ~ response:",
                    response
                );
                if (response) {
                    // Handle the response data here
                    this.setDocumentData(
                        type,
                        response.data.invoices ||
                            response.data.financialDocuments
                    );
                }
            } catch (error) {
                console.error(`Error fetching ${type} data:`, error);
            }
        }
    };
}

const documentStore = new DocumentStore();

export const documentStoreContext = createContext(documentStore);
export const useDocumentStore = () => useContext(documentStoreContext);

export default useDocumentStore;
