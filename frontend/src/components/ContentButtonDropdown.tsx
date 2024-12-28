import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, FileText, TwitterIcon, YoutubeIcon } from "lucide-react";
import { useState } from "react";

interface ContentButtonDropdownProps {
    onPositionChange: (value: string) => void;
}

export function ContentButtonDropdown({
    onPositionChange,
}: ContentButtonDropdownProps) {
    const [position, setPosition] = useState("Type");

    function handleValueChange(value: string) {
        setPosition(value);
        onPositionChange(value);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full flex items-center">
                    {position == "Tweet" ? (
                        <TwitterIcon color="#5147e5" />
                    ) : (
                        <span></span>
                    )}
                    {position == "Video" ? (
                        <YoutubeIcon color="#f23131" />
                    ) : (
                        <span></span>
                    )}
                    {position == "Document" ? (
                        <FileText color="#554cd9" />
                    ) : (
                        <span></span>
                    )}
                    <span className="text-sidebar-foreground">{position}</span>{" "}
                    {position == "Type" ? <ChevronDown /> : <span></span>}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={handleValueChange}
                >
                    <DropdownMenuRadioItem value="Tweet">
                        Tweet
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Video">
                        Video
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Document">
                        Document
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
