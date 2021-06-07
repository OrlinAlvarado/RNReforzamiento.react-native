
export const TiposBasicos = () => {
    
    const nombre: string = 'Orlin';
    const edad:number = 34;
    const estaActivo:boolean  = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar'];
    
    return (
        <>
         <h3>Tipos Basicos</h3>   
         
         { nombre }, { edad }, { (estaActivo) ? 'Activo' : 'No Activo'}
         
         <br/>
         
         { poderes.join(', ')}
        </>
    )
}
