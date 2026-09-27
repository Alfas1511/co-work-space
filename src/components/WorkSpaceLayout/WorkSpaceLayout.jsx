import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { Outlet } from "react-router-dom";

export default function WorkspaceLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                title="Workspace"
                subtitle="The Co-Working Hub"
                logo="/images/workspace_logo.jpg"
                showAccountsLink={true}
                showWorkspaceLink={false}
            />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
