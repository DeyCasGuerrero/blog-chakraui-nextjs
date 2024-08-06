import { Blog } from "@/features/ui/types/blog";
import { create } from "zustand";




interface BlogState {
    // setBlogState: (blog: blogTypes) => void;
    getBlog: (token: string, email:string) => Promise<void>;
    blogs:Blog[];
    createBlog:(token:string, data:Blog)=> Promise<void>;
}

export const useBlogSture = create<BlogState>((set) =>({
    blogs: [],

    getBlog: async (token, email) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/email/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            throw new Error('Could not get blog');
        }

        const blogs = await res.json();

        set((state) => ({
            ...state,
            blogs,
        }));
    },
    createBlog: async(token, data) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error('Could not create blog');
        }
        
    },
}))