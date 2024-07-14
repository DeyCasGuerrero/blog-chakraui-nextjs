export async function fetchApi() {
    try {
        const res = await fetch('http://localhost:3001/api/v1/news');

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}