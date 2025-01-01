import { backend_url } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

export const useShareCard = (shareLink: string) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        axios
            .get(`${backend_url}/api/v1/brain/${shareLink}`)
            .then((response) => {
                setContent(response.data.content);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    }, []);

    return content;
};
