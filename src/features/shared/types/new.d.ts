export interface Newcategory{
    idCategory: number,
    newsId:number,
    name: string;
}

export interface News{
    idNews: number,
    title: string,
    content: string,
    author:string;
    newsOnCate:Newcategory[],
    createdAt: Date,
    updatedAt: Date,
}