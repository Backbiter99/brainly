import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrainIcon, Loader2 } from "lucide-react";
import { useState } from "react";

export const Signin = () => {
    const [isLoading, setIsLoading] = useState(false);

    function buttonLoading() {
        setTimeout(() => {
            setIsLoading(true);
        }, 100);
    }
    return (
        <ThemeProvider>
            <div className="h-screen w-screen bg-sidebar">
                <div className="flex justify-between items-center p-2">
                    <div className="flex items-center gap-5 my-3">
                        <BrainIcon color="#5147e5" size={30} />
                        <div className="font-bold text-2xl">Second Brain</div>
                    </div>
                    <ModeToggle />
                </div>
                <div className="flex items-center justify-center">
                    <div className="mt-40 bg-secondary w-60 rounded-lg h-60 flex items-center justify-center">
                        <div className="p-8 flex justify-center items-center flex-col">
                            <div className="rounded-lg min-w-48 flex flex-col gap-1">
                                <Input
                                    className="bg-sidebar"
                                    placeholder="Username"
                                />
                                <Input
                                    className="bg-sidebar"
                                    placeholder="Password"
                                />
                                <div className="flex justify-center">
                                    <Button
                                        className="w-full"
                                        onClick={buttonLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex justify-center items-center gap-2">
                                                <Loader2 className="animate-spin" />
                                                Please wait
                                            </div>
                                        ) : (
                                            "Signin"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};
