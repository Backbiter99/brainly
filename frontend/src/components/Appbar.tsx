import { PlusIcon, Share2Icon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export const Appbar = () => {
    return (
        <div className="flex justify-between items-center m-2">
            <div className="text-4xl font-black">All Notes</div>
            <div className="flex items-center gap-1">
                <Button variant="secondary">
                    <Share2Icon /> Share Brain
                </Button>
                <Button>
                    <PlusIcon /> Add Content
                </Button>
                <ModeToggle />
            </div>
        </div>
    );
};
