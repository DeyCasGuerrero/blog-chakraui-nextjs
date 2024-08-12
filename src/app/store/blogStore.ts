import { Blog } from "@/features/ui/types/blog";
import { create } from "zustand";




interface BlogState {
    // setBlogState: (blog: blogTypes) => void;
    getBlog: (email:string) => Promise<void>;
    blogs:Blog[];
    createBlog:(token:string, data:Blog)=> Promise<void>;
    hasError: boolean;
}

export const useBlogSture = create<BlogState>((set) =>({
    blogs: [],
    hasError: true,
    getBlog: async (email) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/email/${email}`);

            if (!res.ok) {
                throw new Error('Could not get blog');
            }

            const blogs = await res.json();

            set((state) => ({
                ...state,
                blogs,
                hasError: true, // Si la petición fue exitosa, no hay error
            }));
        } catch (error) {
            set((state) => ({
                ...state,
                hasError: false, // Si hay un error, se establece en true
            }));
        }
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