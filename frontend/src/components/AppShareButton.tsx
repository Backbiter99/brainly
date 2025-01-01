import { Share2Icon } from "lucide-react";
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
import axios from "axios";
import { backend_url } from "@/config";

export const AppShareButton = () => {
    async function handleClick(shareValue: boolean) {
        try {
            const response = await axios.post(
                `${backend_url}/api/v1/brain/share`,
                { share: shareValue.toString() },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );
            if (shareValue) {
                const rootUrl = window.location.origin;
                const midUrl = "/brain/";
                alert(
                    `Sharable link: ${rootUrl}${midUrl}${response.data.link}`
                );
            } else {
                alert(`${response.data.message}`);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="h-8 px-1 text-xs md:h-10 md:px-4 md:text-base"
                    variant="secondary"
                >
                    <Share2Icon /> Share Brain
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <Button
                        onClick={() => handleClick(true)}
                        className="w-full"
                    >
                        Share
                    </Button>
                    <Button
                        onClick={() => handleClick(false)}
                        className="w-full"
                    >
                        Do not Share
                    </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button className="w-full" type="button">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
