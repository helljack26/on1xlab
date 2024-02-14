import { Navigate } from "react-router-dom";
// Variables
import RouteName from "../../assets/routeName";
// Routes
import { ProtectedRoute } from "../ProtectedRoute";
import { UnprotectedRoute } from "../UnprotectedRoute";
// Auth
import Login from "../../pages/auth/Login/Login";
import SignUp from "../../pages/auth/SignUp/SignUp";
// Client Pages
// Accountant
import EnterpriseList from "../../pages/Client/AccountantPages/EnterpriseList/EnterpriseList";
import FinancialDocuments from "../../pages/Client/AccountantPages/FinancialDocuments/FinancialDocuments";
import WarehouseDocuments from "../../pages/Client/AccountantPages/WarehouseDocuments/WarehouseDocuments";
// Report
import FopGrEnEsv from "../../pages/Client/AccountantPages/Reports/FopGrEnEsv/FopGrEnEsv";
// Subscription
import UserSubscriptions from "../../pages/Client/SubscriptionsPages/UserSubscriptions/UserSubscriptions";
import SubscriptionsList from "../../pages/Client/SubscriptionsPages/SubscriptionsList/SubscriptionsList";
// Company
import CompanyInfo from "../../pages/Client/CompanyPages/CompanyInfo/CompanyInfo";
import Employees from "../../pages/Client/CompanyPages/Employees/Employees";
// Integrations
import IntegrationTorgsoft from "../../pages/Client/IntegrationsPages/IntegrationTorgsoft/IntegrationTorgsoft";

const createNavigateToAgreements = () => (
    <Navigate to={RouteName.accountantChildren.enterprise_list} />
);

export const routesForAuthenticatedOnly = [
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            // Accountant subpages
            {
                path: "", // Handle empty route (root path)
                element: (
                    <Navigate
                        to={RouteName.accountantChildren.enterprise_list}
                    />
                ),
            },
            // Reports
            {
                path: RouteName.reportChildren.fop_2_gr_en_esv,
                element: <FopGrEnEsv />,
            },
            {
                path: RouteName.reportChildren.fop_3_gr_en_esv,
                element: <FopGrEnEsv />,
            },
            // Accountant children
            {
                path: RouteName.accountantChildren.enterprise_list,
                element: <EnterpriseList />,
            },
            {
                path: RouteName.accountantChildren.enterprise_panel,
                element: <EnterpriseList />,
            },
            {
                path: RouteName.accountantChildren.financial_documents,
                element: <FinancialDocuments />,
            },
            {
                path: RouteName.accountantChildren.warehouse_documents,
                element: <WarehouseDocuments />,
            },
            // Subscriptions
            {
                path: RouteName.subscriptionChildren.user_subscription,
                element: <UserSubscriptions />,
            },
            {
                path: RouteName.subscriptionChildren.subscription_list,
                element: <SubscriptionsList />,
            },
            // Company
            {
                path: RouteName.companyChildren.info,
                element: <CompanyInfo />,
            },
            {
                path: RouteName.companyChildren.employees,
                element: <Employees />,
            },
            // Integration
            {
                path: RouteName.integrationChildren.torgsoft,
                element: <IntegrationTorgsoft />,
            },

            // Navigate to main page
            {
                path: "/",
                element: createNavigateToAgreements(),
            },
            {
                path: RouteName.login,
                element: createNavigateToAgreements(),
            },
            {
                path: RouteName.sign,
                element: createNavigateToAgreements(),
            },
        ],
    },
];
