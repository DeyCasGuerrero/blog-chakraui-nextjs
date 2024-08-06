import { create } from "zustand";
import { profileTypes } from "@/features/ui/types/profile";

interface ProfileState extends profileTypes {
    setProfile: (profile: profileTypes) => void;
    getProfile: (email: string, token: string) => Promise<void>;
    
    updateProfile: (imgProfile:string ,token: string, id:number) => Promise<void>;
}

export const useProfileStore = create<ProfileState>((set) => {
    return {

        idProfile: 0,
        description: '',
        urlImg: '',

        setProfile: (profile) => set(profile),

        getProfile: async (email) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/bio/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            set({
                idProfile: data.idProfile,
                description: data.description,
                urlImg: data.urlImg,
            });
        },
        updateProfile: async (img, token, id) => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        urlImg:img}),
                });

                if (!response.ok) {
                    throw new Error('Error updating profile');
                }

                const data = await response.json();

                set({
                    idProfile: data.idProfile,
                    description: data.description,
                    urlImg: data.urlImg,
                });
            } catch (error) {
                console.error('Failed to update profile:', error);
            }
        },
    }
});