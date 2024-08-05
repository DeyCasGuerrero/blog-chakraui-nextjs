import { create } from "zustand";

interface Category {
    blogId: string;
    categoryId: number;
}

interface blogTypes {
    idBlog: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorEmail: string;
    BlogOnCategory: Category[];
}

interface BlogState {
    // setBlogState: (blog: blogTypes) => void;
    getBlog: (token: string, email:string) => Promise<void>;
    blogs:blogTypes[];
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
}))