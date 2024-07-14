export default function NewPageOwn({params}:{params:{id:number}}){

    return(
        <h1 className="text-white">Hola desde la id {params.id}</h1>
    )
}