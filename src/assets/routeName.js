const RouteName = {
    // Auth
    forgot_password: "/forgot_password",
    signup: "/signup",
    login: "/login",
    //
    accountant: "/accountant",
    accountantSubPages: {
        reports: "/accountant/reports",
    },
    reportChildren: {
        fop_2_gr_en_esv: "/accountant/reports/fop_2_gr_en_esv",
        fop_3_gr_en_esv: "/accountant/reports/fop_3_gr_en_esv",
    },
    accountantChildren: {
        enterprise_list: "/accountant/enterprise_list",
        enterprise_panel: "/accountant/enterprise_list/:enterpriseErdpo",
        financial_documents: "/accountant/financial_documents",
        warehouse_documents: "/accountant/warehouse_documents",
    },

    subscriptionChildren: {
        user_subscription: "/subscription/license",
        subscription_list: "/subscription/subscription_list",
    },

    companyChildren: {
        info: "/company/info",
        employees: "/company/employees",
    },

    integrationChildren: {
        torgsoft: "/integrations/torgsoft",
    },

    // Account
    account: "/account",
    // Employees
    why_invite: "/why_invite",
    invite_employees: "/invite_employees",
    employees: "/employees",
    company_structure: "/company_structure",

    // Tariffs
    why_upgrade: "/why_upgrade",
    upgrade: "/upgrade",
    implementation_install: "/implementation_install",
};

export default RouteName;
