// EmployeeStore.js
import React from "react";
import {
    makeAutoObservable,
    runInAction
} from "mobx";
import axios from "axios";
import {
    authAxiosConfig
} from "./authAxiosConfig";
// const employeeEditData = {
//     id: "3",
//     username: "new_user_name",
//     email: "newemail@example.com",
//     first_name: "NewFirstName",
//     second_name: "User",
//     last_name: "NewLastName",
//     avatar_url: "/uploads/users/avatar/41c2da58840bd211e2f020aa4c4896a2.jpg",
//     roles: {
//         id: "3",
//         role_name: "Manager",
//         description: "Manager inside company",
//         permissions: [
//             {
//                 id: "1",
//                 permission_name: "view_content",
//                 description: "Can view content",
//             },
//             {
//                 id: "2",
//                 permission_name: "edit_content",
//                 description: "Can edit existing content",
//             },
//             {
//                 id: "3",
//                 permission_name: "create_content",
//                 description: "Can create new content",
//             },
//             {
//                 id: "4",
//                 permission_name: "delete_content",
//                 description: "Can delete content",
//             },
//         ],
//     },
// };
class EmployeeStore {
    employeeList = null;
    employeeEditData = null;
    // employeeEditData = employeeEditData;

    _appPath = process.env.REACT_APP_PATH;
    get appPath() {
        return this._appPath;
    }
    set appPath(value) {
        this._appPath = value;
    }
    axiosConfig = authAxiosConfig;

    constructor() {
        makeAutoObservable(this);
    }

    setEmployeeStore = (data) => {
        this.employeeList = data;
    };

    fetchEmployeeStore = async () => {
        if (this.employeeList !== null) {
            return;
        } else {
            try {
                const fetchEmployeeStoreUrl = `${this.appPath}/api/user/company_info`;

                // Send a request to your server to check authentication status
                const response = await axios.post(
                    fetchEmployeeStoreUrl,
                    [],
                    this.axiosConfig
                );

                if (response) {
                    // Handle the response data here
                    runInAction(() => {
                        this.setEmployeeStore(response.data.users);
                    });
                }
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        }
    };

    getEmployeeEditData = async (id) => {
        if (!this.employeeList) {
            await this.fetchEmployeeStore();
        }

        const employee = this.employeeList.find(
            (user) => parseInt(user.id) === parseInt(id)
        );
        runInAction(() => {
            this.employeeEditData = employee;
        });
    };

    clearEmployeeEditData = async () => {
        runInAction(() => {
            this.employeeEditData = null;
        });
    };
}

const employeeStore = new EmployeeStore();

export const employeeStoreContext = React.createContext(employeeStore);
export const useEmployeeStore = () => React.useContext(employeeStoreContext);

export default useEmployeeStore;