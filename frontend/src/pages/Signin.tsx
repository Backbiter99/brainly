import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrainIcon, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import axios, { isAxiosError } from "axios";
import { backend_url } from "@/config";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function buttonLoading() {
        setIsLoading(true);

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const navigate = useNavigate();

        try {
            const res = await axios.post(`${backend_url}/api/v1/signin`, {
                username,
                password,
            });

            if (res.status === 200) {
                const jwt = res.data.token;
                localStorage.setItem("token", jwt);
                alert("Signin successful!");
                navigate("/dashboard");
            } else if (res.status === 411) {
                alert(
                    "Username must be between 3-10 characters and Password must be between 8-20 characters containing at least one uppercase letter, one lowercase letter, one number, and one special character."
                );
            }
        } catch (error) {
            if (isAxiosError(error) && error.response?.status === 411) {
                alert(
                    "Username must be between 3-10 characters and Password must be between 8-20 characters containing at least one uppercase letter, one lowercase letter, one number, and one special character."
                );
            } else {
                alert("An error occurred during signin. Please try again.");
                console.error("Error:", error);
            }
        } finally {
            setIsLoading(false);
        }
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
                                    ref={usernameRef}
                                />
                                <Input
                                    className="bg-sidebar"
                                    placeholder="Password"
                                    type="password"
                                    ref={passwordRef}
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
                                <div className="text-primary text-sm mt-1 flex flex-col items-center justify-center">
                                    Don't have an account?{" "}
                                    <span
                                        className="cursor-pointer underline"
                                        onClick={() => {
                                            navigate("/signup");
                                        }}
                                    >
                                        Signup
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};
