import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { backend_url } from "@/config";
import axios from "axios";
import { FileText, Share2Icon, Trash2, Twitter, VideoIcon } from "lucide-react";
import { useMemo } from "react";

interface AppcardProps {
    icon: string;
    title: string;
    content: string;
    id: string;
    isCopied?: (value: boolean) => void;
}

export const Appcard = ({
    icon,
    title,
    content,
    id,
    isCopied,
}: AppcardProps) => {
    function handleClickIcon() {
        window.open(content, "_blank");
    }

    function handleShare() {
        navigator.clipboard
            .writeText(content)
            .then(() => {
                isCopied?.(true);
                setTimeout(() => {
                    isCopied?.(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }

    function handleDelete() {
        const stringId = id.toString();
        if (stringId == "0") {
            console.log("id = 0");

            return;
        }
        axios
            .delete(`${backend_url}/api/v1/content`, {
                data: {
                    contentId: stringId,
                },
                headers: {
                    Authorization: localStorage.getItem("token"),
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    const renderedIcon = useMemo(() => {
        console.log(icon);

        const stringIcon = icon.toString();

        if (stringIcon == "Tweet") {
            return <Twitter size={20} color="#5147e5" />;
        } else if (stringIcon == "Video") {
            return <VideoIcon size={20} color="#f23131" />;
        } else {
            return <FileText size={20} color="#554cd9" />;
        }
    }, [icon]);

    const renderedContent = useMemo(() => {
        const stringIcon = icon.toString();

        if (stringIcon == "Tweet") {
            return (
                <div>
                    <blockquote className="twitter-tweet w-full">
                        <a href={content} target="_blank">
                            {content}
                        </a>
                    </blockquote>
                </div>
            );
        } else {
            return (
                <iframe
                    src={content}
                    title="Embedded content"
                    className="w-full h-full rounded-lg"
                    sandbox="allow-scripts allow-same-origin"
                />
            );
        }
    }, [content]);

    return (
        <div className="min-w-72 max-w-80 shadow border-none rounded-lg">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center w-full">
                            <span
                                className="cursor-pointer"
                                onClick={handleClickIcon}
                            >
                                {renderedIcon}
                            </span>
                            <div className="w-full flex items-center justify-center">
                                <CardTitle className="text-lg">
                                    {title}
                                </CardTitle>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sidebar-foreground">
                            <Share2Icon
                                className="cursor-pointer"
                                size={20}
                                color="#5147e5"
                                onClick={handleShare}
                            />
                            <span
                                onClick={handleDelete}
                                className="cursor-pointer"
                            >
                                <Trash2 size={20} color="#7d0505" />
                            </span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>{renderedContent}</CardContent>
            </Card>
        </div>
    );
};
