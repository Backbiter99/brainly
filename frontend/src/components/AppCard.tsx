import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    NotebookTextIcon,
    Share2Icon,
    Trash2,
    Twitter,
    VideoIcon,
} from "lucide-react";

interface AppcardProps {
    icon: "tweet" | "video" | "document";
    title: string;
    content: string;
    footer: string;
}

export const Appcard = ({ icon, title, content, footer }: AppcardProps) => {
    const checkIcon = () => {
        if (icon === "tweet") {
            return <Twitter size={20} className="text-primary" />;
        } else if (icon === "video") {
            return <VideoIcon size={20} />;
        } else {
            return <NotebookTextIcon size={20} />;
        }
    };

    return (
        <div className="w-72 shadow border-none rounded-lg">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {checkIcon()}
                            <CardTitle>{title}</CardTitle>
                        </div>
                        <div className="flex items-center gap-3 text-sidebar-foreground">
                            <Share2Icon size={20} />
                            <Trash2 size={20} />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>{content}</p>
                </CardContent>
                <CardFooter>
                    <p>{footer}</p>
                </CardFooter>
            </Card>
        </div>
    );
};
