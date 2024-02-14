import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
// import usePageTitle from "../components/helpers/setPageTitle";

export const UnprotectedRoute = observer(() => {
    // usePageTitle();

    // If authenticated, render the child routes
    return <Outlet />;
});
