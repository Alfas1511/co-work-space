import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { Outlet } from "react-router-dom";

export default function AccountsLayout() {
    return (
        <>
            <Header
                title="Accounts Solutions"
                subtitle="Your Accounting Partner"
                logo="/images/workspace_logo.jpg" // change if you have
                showAccountsLink={false} // hide button
                showWorkspaceLink={true}
            />
            <Outlet />
            <Footer />
        </>
    );
}