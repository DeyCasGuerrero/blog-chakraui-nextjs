export default async function newsGetById(id:number){
    try {
        const response = await fetch(`${process.env.API_URL}/news/byid/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error; 
    }
}