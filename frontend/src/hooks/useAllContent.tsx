import { backend_url } from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

export const useAllContent = () => {
    const [allContent, setAllContent] = useState([]);

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

    return allContent;
};
