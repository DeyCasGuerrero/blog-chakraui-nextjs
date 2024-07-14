interface Newcategory{
    id: number,
    name: string;
}
export interface News{
    idNews: number,
    title: string,
    content: string,
    author:string;
    categories:Newcategory[],
    createdAt: Date,
    updatedAt: Date,
}