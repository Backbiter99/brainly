import { Appcard } from "@/components/AppCard";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useShareCard } from "@/hooks/useShareCard";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import { BrainIcon } from "lucide-react";

export const ShareContent = () => {
    const shareId = useParams().shareId;
    const content = useShareCard(shareId ? shareId : "");
    const navigate = useNavigate();

    console.log(shareId);
    return (
        <ThemeProvider>
            <div className="h-screen w-screen">
                <div className="flex justify-between m-2">
                    <div
                        className="flex items-center gap-5 my-3 cursor-pointer"
                        onClick={() => {
                            navigate("/signin");
                        }}
                    >
                        <BrainIcon color="#5147e5" size={30} />
                        <div className="font-bold text-2xl">Second Brain</div>
                    </div>
                    <ModeToggle />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    {content.length > 0 ? (
                        content.map(({ title, link, type, _id }, index) => (
                            <Appcard
                                key={index}
                                id={_id}
                                icon={type}
                                title={title}
                                content={link}
                            />
                        ))
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            </div>
        </ThemeProvider>
    );
};
