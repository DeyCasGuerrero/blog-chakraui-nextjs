import { create } from "zustand";

interface Category{
    blogId: string;
    categoryId: number;
}

interface blogTypes{
    idBlog: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorEmail: string;
    BlogOnCategory:Category[];
}

export const useBlogSture =create<blogTypes>(()=>({
    idBlog:'a',
    title:'Blog Title',
    content:'Blog Content',
    createdAt:new Date(),
    updatedAt:new Date(),
    authorEmail:'admin@example.com',
    BlogOnCategory:[{blogId:'a',categoryId:1}],

    getBlog: async ()=>{
        await fetch('')
    }
}))