import { ModeToggle } from "./ModeToggle";
import { AppContentButton } from "./AppContentButton";
import { AppShareButton } from "./AppShareButton";
import { AppLogoutButton } from "./AppLogoutButton";

interface AppbarProps {
    title?: string;
}

export const Appbar = ({ title }: AppbarProps) => {
    return (
        <div className="flex justify-between items-center m-2">
            <div className="text-lg sm:text-2xl md:text-4xl font-black">
                <span>{title ? title : "All Notes"}</span>
            </div>
            <div className="flex items-center">
                <div className="flex items-center gap-1 sm:flex-wrap">
                    <AppShareButton />
                    <AppContentButton />
                    <ModeToggle />
                    <AppLogoutButton />
                </div>
            </div>
        </div>
    );
};
