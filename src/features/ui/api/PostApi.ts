import { Blog } from "../types/blog";
import {useSession} from 'next-auth/react';
export async function postBlog(blog:Blog):Promise<boolean>{
    

    // const { data: session } = useSession();

    try {
        const res = await fetch('http://localhost:3001/api/v1/blog',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization:`Bearer ${session?.user.token}`,
            },
            body: JSON.stringify(blog)
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Network response was not ok');
        }

        return true; 

    } catch (error) {
        console.error('Error posting blog:', error);
        throw error; 
    }
}