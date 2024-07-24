import { useSession } from 'next-auth/react';
import { profileTypes } from '../types/profile';

function useGetBio() {
    const { data: session } = useSession();

    const getBio = async (email: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/profile/bio/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const bio = await response.json();
            return bio;
        } catch (error) {
            console.error('Error fetching bio:', error);
            return null;
        }
    };

    const updateBio = async (bio: profileTypes) => {
        try {
            const response = await fetch(`http://localhost:3001/api/v1/profile/bio/${bio.idProfile}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`
                },
                body: JSON.stringify(bio) // Enviar `bio` directamente sin envolverlo en un objeto
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error updating bio:', error);
            return null;
        }
    };

    return { getBio, updateBio };
}

export default useGetBio;
