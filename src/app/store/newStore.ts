import { create } from "zustand";
import { News } from "@/features/shared/types/new";


interface NewsState {
    news: News[];
    getNews: () => Promise<void>;
}

// API FECTHING USING ZUSTAND
export const useNews = create<NewsState>((set)=> ({
    news: [],
    getNews:async ()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);

        if (!res.ok) {
            throw new Error('Could not get news');
        }
        const news = await res.json();
        set((state)=>({
            ...state,
            news
        }))
    }
    
}))