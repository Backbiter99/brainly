import { ThemeProvider } from "../components/ThemeProvider";
import { Appbar } from "../components/Appbar";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import { Appcard } from "../components/AppCard";
import { useAllContent } from "@/hooks/useAllContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIsTablet } from "@/hooks/useTablet";
import { useIsSmallTablet } from "@/hooks/useSmallTablet";
import { useState } from "react";
import { AlertCopyClipboard } from "@/components/AlertCopyClipboard";

interface contentsProps {
    _id: string;
    title: string;
    link: string;
    type: string;
}

function Document() {
    const contents: contentsProps[] = useAllContent();
    const [isCopyToClipboard, setIsCopyToClipboard] = useState(false);

    function handleIsCopied(value: boolean) {
        setIsCopyToClipboard(value);
    }

    function checkIsMobile() {
        const isMobile = useIsMobile();
        const isSmallTablet = useIsSmallTablet();
        const isBigTablet = useIsTablet();

        const filteredContents = contents.filter(
            ({ type }) => type === "Document"
        );

        if (isMobile) {
            return (
                <div className="grid grid-cols-1 w-full h-full justify-items-center overflow-y-scroll">
                    <Appcard
                        title="How to Use the Website"
                        content="https://docs.google.com/document/d/e/2PACX-1vQd_ZWDs1RsFNYyViLAXxHTtLIHlW3_TUys0HgDt5GCIkpqIGNFZ5CP8KreL01HYY3DKLoDOT04vxOJ/pub?embedded=true"
                        icon="Document"
                        id="0"
                        isCopied={handleIsCopied}
                    />
                    {filteredContents.length > 0 ? (
                        filteredContents.map(
                            ({ title, link, type, _id }, index) => (
                                <Appcard
                                    key={index}
                                    id={_id}
                                    icon={type}
                                    title={title}
                                    content={link}
                                    isCopied={handleIsCopied}
                                />
                            )
                        )
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            );
        } else if (isSmallTablet) {
            return (
                <div className="grid grid-cols-1 w-full h-full justify-items-center overflow-y-scroll">
                    <Appcard
                        title="How to Use the Website"
                        content="https://docs.google.com/document/d/e/2PACX-1vQd_ZWDs1RsFNYyViLAXxHTtLIHlW3_TUys0HgDt5GCIkpqIGNFZ5CP8KreL01HYY3DKLoDOT04vxOJ/pub?embedded=true"
                        icon="Document"
                        id="0"
                        isCopied={handleIsCopied}
                    />
                    {filteredContents.length > 0 ? (
                        filteredContents.map(
                            ({ title, link, type, _id }, index) => (
                                <Appcard
                                    key={index}
                                    id={_id}
                                    icon={type}
                                    title={title}
                                    content={link}
                                    isCopied={handleIsCopied}
                                />
                            )
                        )
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            );
        } else if (isBigTablet) {
            return (
                <div className="grid grid-cols-2 w-full h-full justify-items-center overflow-y-scroll">
                    <Appcard
                        title="How to Use the Website"
                        content="https://docs.google.com/document/d/e/2PACX-1vQd_ZWDs1RsFNYyViLAXxHTtLIHlW3_TUys0HgDt5GCIkpqIGNFZ5CP8KreL01HYY3DKLoDOT04vxOJ/pub?embedded=true"
                        icon="Document"
                        id="0"
                        isCopied={handleIsCopied}
                    />
                    {filteredContents.length > 0 ? (
                        filteredContents.map(
                            ({ title, link, type, _id }, index) => (
                                <Appcard
                                    key={index}
                                    id={_id}
                                    icon={type}
                                    title={title}
                                    content={link}
                                    isCopied={handleIsCopied}
                                />
                            )
                        )
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            );
        } else {
            return (
                <div className="grid grid-cols-3 w-full justify-items-center">
                    <Appcard
                        title="How to Use the Website"
                        content="https://docs.google.com/document/d/e/2PACX-1vQd_ZWDs1RsFNYyViLAXxHTtLIHlW3_TUys0HgDt5GCIkpqIGNFZ5CP8KreL01HYY3DKLoDOT04vxOJ/pub?embedded=true"
                        icon="Document"
                        id="0"
                        isCopied={handleIsCopied}
                    />
                    {filteredContents.length > 0 ? (
                        filteredContents.map(
                            ({ title, link, type, _id }, index) => (
                                <Appcard
                                    key={index}
                                    id={_id}
                                    icon={type}
                                    title={title}
                                    content={link}
                                    isCopied={handleIsCopied}
                                />
                            )
                        )
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            );
        }
    }

    return (
        <ThemeProvider>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full p-2 h-full">
                    <div className="my-3">
                        <Appbar title="Documents" />
                    </div>
                    <main className="w-full mt-10">{checkIsMobile()}</main>
                    {isCopyToClipboard && <AlertCopyClipboard />}
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default Document;
