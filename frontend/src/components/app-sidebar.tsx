import {
    BrainIcon,
    FileTextIcon,
    TwitterIcon,
    YoutubeIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "Tweets",
        url: "#",
        icon: TwitterIcon,
        color: "#5147e5",
    },
    {
        title: "Videos",
        url: "#",
        icon: YoutubeIcon,
        color: "#f23131",
    },
    {
        title: "Documents",
        url: "#",
        icon: FileTextIcon,
        color: "#554cd9",
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <div className="flex items-center gap-5 my-3">
                            <BrainIcon color="#5147e5" size={30} />
                            <div className="font-bold text-2xl">
                                Second Brain
                            </div>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="my-3">
                        <SidebarMenu className="mt-10">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        className="text-sidebar-accent-foreground"
                                    >
                                        <a href={item.url}>
                                            <item.icon color={item.color} />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
