import { useEffect, useState } from "react";
import { News } from "../types/new";

export function useNewData(){
    const [data, setData]=useState<News[]>([]);

    useEffect(()=>{
        async function fetchNews(){
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);

            if (!response.ok) {
                console.log("fetch api failed")
            }

            const data = await response.json();
            setData(data);
        }
        fetchNews();
    },[]);

    return data;
}