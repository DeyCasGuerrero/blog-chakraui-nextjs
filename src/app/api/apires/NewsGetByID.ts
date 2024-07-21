export default async function newsGetById(id:number){
    try {
        const response = await fetch(`http://localhost:3001/api/v1/news/byid/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;  // rethrow the error for the caller to handle
    }
}