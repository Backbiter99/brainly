import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { ContentButtonDropdown } from "./ContentButtonDropdown";
import { useRef, useState } from "react";
import axios from "axios";
import { backend_url } from "@/config";

export const AppContentButton = () => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [linkType, setLinkType] = useState("");

    function handlePositionChange(value: string) {
        setLinkType(value);
    }

    async function submitContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const type = linkType;

        console.log(title, link, type);

        try {
            await axios.post(
                `${backend_url}/api/v1/content`,
                {
                    link,
                    type,
                    title,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-8 px-1 text-xs md:h-10 md:px-4 md:text-base">
                    <PlusIcon /> Add Content
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add content</DialogTitle>
                    <DialogDescription>
                        Enter the details of the content to be added.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-1">
                    <Input placeholder="Title" ref={titleRef} />
                    <Input placeholder="Link" ref={linkRef} />
                    <ContentButtonDropdown
                        onPositionChange={handlePositionChange}
                    />
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            onClick={submitContent}
                            type="button"
                            variant="default"
                            className="w-full"
                        >
                            Submit
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
