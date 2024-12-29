import { backend_url } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCheckLogin } from "./useCheckLogin";
import { useNavigate } from "react-router-dom";

export const useAllContent = () => {
    const [allContent, setAllContent] = useState([]);
    const check = useCheckLogin();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${backend_url}/api/v1/content`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setAllContent(response.data.content);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }, []);
    console.log(allContent);

    if (!check) {
        navigate("/signin");
    }

    return allContent;
};
