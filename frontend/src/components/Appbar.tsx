import { ModeToggle } from "./ModeToggle";
import { AppContentButton } from "./AppContentButton";
import { AppShareButton } from "./AppShareButton";
import { AppLogoutButton } from "./AppLogoutButton";

export const Appbar = () => {
    return (
        <div className="flex justify-between items-center m-2">
            <div className="text-lg sm:text-2xl md:text-4xl font-black">
                All Notes
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
