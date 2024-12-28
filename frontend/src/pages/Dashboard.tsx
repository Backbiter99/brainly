import { ThemeProvider } from "../components/ThemeProvider";
import { Appbar } from "../components/Appbar";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import { Appcard } from "../components/AppCard";
import { useAllContent } from "@/hooks/useAllContent";

interface contentsProps {
    _id: string;
    title: string;
    link: string;
    type: string;
}

function Dashboard() {
    const contents: contentsProps[] = useAllContent();
    return (
        <ThemeProvider>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full p-2 h-full">
                    <div className="my-3">
                        <Appbar />
                    </div>
                    <main className="mt-10 w-full mx-4">
                        <div className="grid grid-cols-3 w-full">
                            <Appcard
                                title="How to Use the Website"
                                content="https://docs.google.com/document/d/e/2PACX-1vQd_ZWDs1RsFNYyViLAXxHTtLIHlW3_TUys0HgDt5GCIkpqIGNFZ5CP8KreL01HYY3DKLoDOT04vxOJ/pub?embedded=true"
                                icon="Document"
                                id="0"
                            />
                            {contents.length > 0 ? (
                                contents.map(
                                    ({ title, link, type, _id }, index) => (
                                        <Appcard
                                            key={index}
                                            id={_id}
                                            icon={type}
                                            title={title}
                                            content={link}
                                        />
                                    )
                                )
                            ) : (
                                <p>No content available</p>
                            )}
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default Dashboard;
