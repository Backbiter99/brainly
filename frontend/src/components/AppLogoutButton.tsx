import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const AppLogoutButton = () => {
    const navigate = useNavigate();

    function handleClick() {
        localStorage.removeItem("token");
        navigate("/signin");
    }

    return (
        <Button
            variant="destructive"
            onClick={handleClick}
            className="h-8 px-1 text-xs md:h-10 md:px-4 md:text-base"
        >
            Logout
        </Button>
    );
};
