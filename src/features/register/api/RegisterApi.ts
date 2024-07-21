import { Register } from "../types/register";

export async function postUser(user: Register): Promise<boolean> {
    try {
        const res = await fetch('http://localhost:3001/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return true; // Retorna true si todo sale bien

    } catch (error) {
        console.error('Error posting user:', error);
        return false; // Retorna false si hay algún error
    }
}
