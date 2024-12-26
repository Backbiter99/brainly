import { ThemeProvider } from "../components/ThemeProvider";
import { Appbar } from "../components/Appbar";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import { Appcard } from "../components/AppCard";

function Dashboard() {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full p-2">
                    <div className="my-3">
                        <Appbar />
                    </div>
                    <main className="mt-9">
                        <Appcard
                            icon="tweet"
                            title="Hi"
                            content="hi"
                            footer="hi"
                        />
                    </main>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default Dashboard;
