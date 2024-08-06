export interface Category{
    idCategory:number;
    name: string;
}


export interface Blog{
    title: string,
    content: string,
    authorEmail: string,
    categories: Category[],
    idBlog?:string;
    createdAt?: Date;
    updatedAt?: Date;
}
